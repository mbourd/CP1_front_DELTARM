import { ReferenceObject } from 'popper.js';
import { PopperPlacementType } from '@material-ui/core';

export interface IPopper {
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
  onClickAway?: (event: MouseEvent | TouchEvent) => void;
  zIndex?: number;
}
