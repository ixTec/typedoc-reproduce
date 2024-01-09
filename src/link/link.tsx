import { forwardRef } from 'react';

import type { LinkProps } from './link-internal';
import LinkInternal from './link-internal';

type LinkComponent = <T extends React.ElementType = 'a'>(
  props: LinkProps<T>,
) => JSX.Element | null;

const Link: LinkComponent = forwardRef(LinkInternal);

export default Link;
