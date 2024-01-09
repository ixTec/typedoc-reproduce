import { forwardRef } from 'react';

import type { ButtonProps } from './button-internal';
import ButtonInternal from './button-internal';

type ButtonComponent = <T extends React.ElementType = 'button'>(
  props: ButtonProps<T>,
) => JSX.Element | null;

const Button: ButtonComponent = forwardRef(ButtonInternal);

export default Button;
