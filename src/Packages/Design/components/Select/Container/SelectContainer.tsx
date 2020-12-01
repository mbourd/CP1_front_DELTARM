import React from 'react';
import { SelectBody } from '../Body/SelectBody';

// eslint-disable-next-line react/display-name
export const SelectContainer = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={'_SelectContainer'} ref={ref}>
      <SelectBody />
    </div>
  );
});
