import { forwardRef } from 'react';

import type { TagProps as TagPropsInternal } from './tag-internal';
import TagInternal from './tag-internal';

type TagComponent = <T extends React.ElementType = 'button'>(
  props: TagPropsInternal<T>,
) => JSX.Element | null;

const Tag: TagComponent = forwardRef(TagInternal);

export default Tag;
