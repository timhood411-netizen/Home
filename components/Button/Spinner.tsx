import styles from "./Spinner.module.css";

export interface SpinnerProps {
  /** Diameter in px. Button passes 16 (Small) or 20 (Medium/Large). */
  size: 16 | 20;
  className?: string;
}

/**
 * Figma: Spinner (node 592:98888).
 * Uses `currentColor` instead of the Figma `surface` variant (Default /
 * OnColor) so it always matches the label color of whatever Button
 * variant/tone it's rendered inside.
 */
export function Spinner({ size, className }: SpinnerProps) {
  return (
    <span
      className={[styles.spinner, className].filter(Boolean).join(" ")}
      style={{ width: size, height: size }}
      role="status"
      aria-label="Loading"
    />
  );
}
