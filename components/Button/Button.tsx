import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import styles from "./Button.module.css";
import { Spinner } from "./Spinner";

/** Figma `Size` variant. */
export type ButtonSize = "small" | "medium" | "large";

/** Figma `Style` variant — visual hierarchy. */
export type ButtonVariant = "primary" | "secondary" | "text";

/** Figma `Type` variant — semantic tone / the surface the button sits on. */
export type ButtonTone = "default" | "danger" | "onColor";

const ICON_SIZE: Record<ButtonSize, 16 | 20> = {
  small: 16,
  medium: 20,
  large: 20,
};

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  /** Figma `Size`. @default "medium" */
  size?: ButtonSize;
  /** Figma `Style`. @default "primary" */
  variant?: ButtonVariant;
  /** Figma `Type`. @default "default" */
  tone?: ButtonTone;
  /**
   * Figma `State=Loading`. Shows a spinner in place of the leading icon and
   * marks the button busy/non-interactive. Hover/Disabled/Default/Focus are
   * not props — they're native `:hover`, `disabled`, and `:focus-visible`.
   */
  loading?: boolean;
  /** Figma `leadingIcon` slot. Rendered at a fixed size — do not override. */
  leadingIcon?: ReactElement;
  /** Figma `trailingIcon` slot. Rendered at a fixed size — do not override. */
  trailingIcon?: ReactElement;
  /** Figma `label`. */
  children: ReactNode;
  /** Native HTML button type. Kept separate from the Figma `Type` variant (`tone`). @default "button" */
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

/**
 * Button — Figma: FPDS / Web / Components / Button (node 108:6599).
 * https://www.figma.com/design/HGkmlNBKwKdXzhLYQIPfHk/FPDS---Web_-Components?node-id=108-6599
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      size = "medium",
      variant = "primary",
      tone = "default",
      loading = false,
      disabled = false,
      leadingIcon,
      trailingIcon,
      children,
      className,
      htmlType = "button",
      ...rest
    },
    ref,
  ) {
    const iconSize = ICON_SIZE[size];
    const isDisabled = disabled || loading;

    return (
      <button
        {...rest}
        ref={ref}
        type={htmlType}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        data-size={size}
        data-variant={variant}
        data-tone={tone}
        data-loading={loading || undefined}
        className={[styles.button, className].filter(Boolean).join(" ")}
      >
        {loading ? (
          <Spinner size={iconSize} />
        ) : (
          leadingIcon && (
            <span
              className={styles.icon}
              style={{ width: iconSize, height: iconSize }}
              aria-hidden="true"
            >
              {leadingIcon}
            </span>
          )
        )}
        <span className={styles.label}>{children}</span>
        {trailingIcon && (
          <span
            className={styles.icon}
            style={{ width: iconSize, height: iconSize }}
            aria-hidden="true"
          >
            {trailingIcon}
          </span>
        )}
      </button>
    );
  },
);
