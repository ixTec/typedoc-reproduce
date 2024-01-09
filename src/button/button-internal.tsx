import type { PolymorphicComponentProps, PolymorphicRef } from "../types";

type ButtonBaseProps = {
  /** Sets the style of the Button suitable for dark backgrounds.
   * @deprecated to be removed in next version
   * @defaultValue `false` */
  inverted?: boolean;
  /** Defines the size of the Button. In most cases, the default size should be used.
   * @defaultValue `medium` */
  size?: "large" | "medium" | "small";
  /** Defines the variant of the Button.
   * @defaultValue `secondary` */
  variant?: "destructive" | "plain" | "primary" | "secondary" | "upgrade";
};

type ButtonIconOnlyProps = ButtonBaseProps & {
  "aria-label": string;
  children?: never;
  /** An icon displayed as the only content of the Button. Because of that, `aria-label` attribute must be specified. */
  icon: JSX.Element;
};

type ButtonNoIconProps = ButtonBaseProps & {
  /** @ignore */
  "aria-label"?: string;
  /** The content inside the Button. Most of the time should be a plain text. Should never be an empty string. */
  children: React.ReactNode;
  icon?: never;
};

export type ButtonProps<T extends React.ElementType = "button"> =
  PolymorphicComponentProps<T, ButtonIconOnlyProps | ButtonNoIconProps>;

function ButtonInternal<T extends React.ElementType = "button">(
  {
    "aria-label": ariaLabel,
    as,
    children,
    icon,
    inverted = false,
    size = "medium",
    type,
    variant = "secondary",
    ...restProps
  }: ButtonProps<T>,
  ref?: PolymorphicRef<T>
) {
  const Element = as ?? "button";
  const typedRestProps: Record<string, unknown> = restProps;

  return (
    <Element
      {...typedRestProps}
      aria-label={ariaLabel}
      ref={ref}
      type={type == null && Element === "button" ? "button" : type}
    >
      {icon != null ? icon : <span>{children}</span>}
    </Element>
  );
}

export default ButtonInternal;
