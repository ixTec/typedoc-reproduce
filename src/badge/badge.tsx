export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  /** text content of the Badge. */
  children: React.ReactNode;
  /** Defines the size of the Badge. In general, default size should be used.
   * @defaultValue `medium` */
  size?: "large" | "medium" | "small";
  /** Determines the variant of the Badge, based on the set of predefined background colors.
   * @defaultValue `blue` */
  variant?: "red" | "green" | "blue";
};

function Badge({
  children,
  size = "medium",
  variant = "blue",
  ...restProps
}: BadgeProps) {
  return (
    <span {...restProps}>
      <span>{children}</span>
    </span>
  );
}

export default Badge;
