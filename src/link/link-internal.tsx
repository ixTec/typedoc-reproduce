import React from "react";

import type { PolymorphicComponentProps, PolymorphicRef } from "../types";

type LinkBaseProps = {
  /** The content of the Link.  */
  children: React.ReactNode;
  /** An icon displayed to the left. */
  iconLeft?: JSX.Element;
  /** An icon displayed to the right. */
  iconRight?: JSX.Element;
  /** Sets the style of the Link suitable for dark backgrounds.
   * @deprecated to be removed in next version
   * @defaultValue `false` */
  inverted?: boolean;
  /** Defines the font size of the Link. In general should be specified only when used as a standalone element.
   * @defaultValue `inherit` */
  size?: "inherit" | "large" | "medium" | "small";
};

export type LinkProps<T extends React.ElementType = "a"> =
  PolymorphicComponentProps<T, LinkBaseProps>;

function LinkInternal<T extends React.ElementType = "a">(
  {
    as,
    children,
    iconLeft,
    iconRight,
    inverted = false,
    size = "inherit",
    ...restProps
  }: LinkProps<T>,
  ref?: PolymorphicRef<T>
) {
  const Element = as ?? "a";
  const typedRestProps: Record<string, unknown> = restProps;

  return (
    <Element ref={ref} {...typedRestProps}>
      {iconLeft != null && iconLeft}
      {<span>{children}</span>}
      {iconRight != null && iconRight}
    </Element>
  );
}

export default LinkInternal;
