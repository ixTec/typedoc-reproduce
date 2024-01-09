import Radiomark from "./radiomark";

type RadioBaseProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> & {
  defaultChecked?: never;
  /** Sets appropriate error styling, and `aria-invalid` attribute.
   * @defaultValue `false` */
  error?: boolean;
  /** Sets the style of the Radio suitable for dark backgrounds.
   * @deprecated to be removed in next version
   * @defaultValue `false` */
  inverted?: boolean;
  /** Defines the size of the Radio. In most cases, the default size should be used.
   * @defaultValue `medium` */
  size?: "large" | "medium";
};

type RadioWithLabel = RadioBaseProps & {
  /** @ignore */
  "aria-label"?: string;
  /** The label displayed next to the Radio. */
  children: React.ReactNode;
};

type RadioOnly = RadioBaseProps & {
  "aria-label": string;
  children?: never;
};

export type RadioProps = RadioOnly | RadioWithLabel;

function RadioInternal(
  {
    "aria-label": ariaLabel,
    checked = false,
    children,
    disabled = false,
    error = false,
    inverted = false,
    size = "medium",
    ...restProps
  }: RadioProps,
  ref?: React.Ref<HTMLInputElement>
) {
  const hasChildren = children != null;

  return (
    <div>
      <input
        {...restProps}
        ref={ref}
        aria-invalid={error}
        aria-label={ariaLabel}
        checked={checked}
        disabled={disabled}
        type="radio"
      />
      <Radiomark {...{ checked, error, isFocusVisible: false }} />
      {hasChildren && { children }}
    </div>
  );
}

export default RadioInternal;
