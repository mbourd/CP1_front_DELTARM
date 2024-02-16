import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const SortIcon: React.FC<React.PropsWithChildren<SvgIconProps>> = (
  props,
) => {
  return (
    <SvgIcon viewBox={'0 0 24 24'} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <title>alpha-order</title>
        <path d="M8.546,11,7.822,8.621H4.178L3.454,11H1.17L4.7,1H7.289L10.83,11ZM7.316,6.844q-1-3.234-1.131-3.657C6.1,2.9,6.04,2.681,6,2.517q-.225.875-1.292,4.327Z" />
        <path d="M9.719,23H2.281V21.626l4.792-6.87H2.411v-1.75H9.589v1.367L4.8,21.25H9.719Z" />
        <polygon points="18 16 18 1 16 1 16 16 11 16 17 23 23 16 18 16" />
      </svg>
    </SvgIcon>
  );
};
