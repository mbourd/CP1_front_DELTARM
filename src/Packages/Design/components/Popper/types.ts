import React from 'react';
import { ReferenceObject } from 'popper.js';
import { PopperPlacementType } from '@material-ui/core';

export interface IPopper {
  open: boolean;
  element: null | ReferenceObject | (() => ReferenceObject);
  border?: string;
  shadow?: string;
  /**
   * Background color.
   */
  bgc?: string;
  /**
   * Border radius.
   */
  bdr?: string;
  placement?: PopperPlacementType;
  onClickAway?: (event: React.MouseEvent<Document>) => void;
  zIndex?: number;
}
