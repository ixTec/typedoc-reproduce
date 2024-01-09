export type CssVariable = `--${string}`;
export type CssVariableFunc = `var(${CssVariable})`;

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref'];

export type PolymorphicComponentProps<
  T extends React.ElementType,
  P extends Record<string, unknown>,
> = Omit<React.ComponentPropsWithoutRef<T>, keyof P> &
  P & { as?: T; ref?: PolymorphicRef<T> };
