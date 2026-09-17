import primitiveTokens from '../../tokens/primitive.tokens.json'
import semanticTokens from '../../tokens/semantic.tokens.json'

type TokenValue = string | number
type TokenLeaf = { $type: string; $value: TokenValue }
type TokenTree = { [key: string]: TokenTree | TokenLeaf }

function isLeaf(node: unknown): node is TokenLeaf {
  return typeof node === 'object' && node !== null && '$value' in node
}

function deepMerge(a: TokenTree, b: TokenTree): TokenTree {
  const out: TokenTree = { ...a }
  for (const key of Object.keys(b)) {
    const existing = out[key]
    const incoming = b[key]
    out[key] =
      existing && !isLeaf(existing) && !isLeaf(incoming)
        ? deepMerge(existing, incoming)
        : incoming
  }
  return out
}

const root: TokenTree = deepMerge(
  primitiveTokens as unknown as TokenTree,
  semanticTokens as unknown as TokenTree,
)

const ALIAS_RE = /^\{(.+)\}$/

/**
 * Resolves a dot path (e.g. "color.palette.primary.1000") against the
 * merged primitive + semantic token tree, following `{a.b.c}` aliases
 * (as emitted by the Figma variables export) to their final value.
 */
export function token(path: string, depth = 0): TokenValue {
  if (depth > 10) throw new Error(`Token alias cycle at: ${path}`)

  const parts = path.split('.')
  let node: TokenTree | TokenLeaf = root
  for (const part of parts) {
    if (isLeaf(node) || !(part in node)) {
      throw new Error(`Token path not found: ${path}`)
    }
    node = node[part]
  }

  if (!isLeaf(node)) {
    throw new Error(`Token path is not a leaf value: ${path}`)
  }

  const { $value } = node
  if (typeof $value === 'string') {
    const alias = ALIAS_RE.exec($value)
    if (alias) return token(alias[1], depth + 1)
  }
  return $value
}

export const num = (path: string): number => Number(token(path))
export const color = (path: string): string => String(token(path))
export const str = (path: string): string => String(token(path))
