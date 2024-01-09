import React from "react";

import type { PolymorphicComponentProps, PolymorphicRef } from "../types";

type TagBaseProps = {
  /** Numerical value alongside the label. */
  count?: number;
  /** An icon displayed to the left of the label. */
  icon?: JSX.Element;
  /** The text content of the Tag. Will be auto-truncated if the content is wider than the max-width. */
  label: string;
  /** Handler called when the Tag is clicked . */
  onClick?: () => void;
  /** Defines the size of the Tag. In most cases, the default size should be used.
   * @defaultValue `medium` */
  size?: "large" | "medium" | "small";
  /** Determines the variant of the Tag, based on the set of predefined background colors.
   * @defaultValue `blue` */
  variant?: "red" | "green" | "blue";
};

export type TagProps<T extends React.ElementType = "button"> =
  PolymorphicComponentProps<T, TagBaseProps>;

function Tag<T extends React.ElementType = "button">(
  {
    as,
    count,
    disabled,
    icon,
    label,
    onClick,
    size = "medium",
    variant = "blue",
    ...restProps
  }: TagProps<T>,
  ref?: PolymorphicRef<T>
) {
  const typedRestProps: Record<string, unknown> = restProps;

  function renderContent() {
    return (
      <div>
        {icon}
        {label}
        {count}
      </div>
    );
  }

  return (
    <button ref={ref} {...{ onClick, disabled }} {...typedRestProps}>
      {renderContent()}
    </button>
  );
}

export default Tag;
