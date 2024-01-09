export type CodeProps = React.HTMLAttributes<HTMLPreElement> & {
  /** The element used to render this component.
   * @defaultValue `code` */
  as?: "code" | "pre";
  /** The content of the inline Code sample. */
  children: React.ReactNode;
  /** Sets the style of the Code suitable for dark backgrounds.
   * @deprecated to be removed in next version
   * @defaultValue `false` */
  inverted?: boolean;
  /** Defines the font size of the Code sample. In general should be specified only when used as a standalone element.
   * @defaultValue `inherit` */
  size?: "inherit" | "large" | "medium" | "small" | "xlarge";
};

function Code({
  as,
  inverted = false,
  size = "inherit",
  ...restProps
}: CodeProps) {
  const Element = as ?? "code";

  return <Element {...restProps} />;
}

export default Code;
