export type AvatarProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "content"
> & {
  /** Content of the Avatar component. */
  content: JSX.Element | string;
  /** Whether the content should fill the whole avatar space or be restricted to the default Avatar sizing values.
   * @defaultValue `false` */
  contentFill?: boolean;
  /** Defines the size of the Avatar. In general, use default size.
   * @defaultValue `medium` */
  size?: "large" | "medium" | "small";
  /** Determines the variant of the Avatar, based on the set of predefined background colors.
   * @defaultValue `blue` */
  variant?: "red" | "green" | "blue";
};

function Avatar({
  content,
  contentFill = false,
  size = "medium",
  variant = "blue",
  ...restProps
}: AvatarProps) {
  return (
    <div {...restProps}>
      <div>
        {typeof content === "string"
          ? content.charAt(0).toUpperCase()
          : content}
      </div>
    </div>
  );
}

export default Avatar;
