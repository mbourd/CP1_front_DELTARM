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
  classes?: string;
  placement?: PopperPlacementType;
  /**
   * Horizontal placement value.
   */
  x?: string;
  /**
   * Vertical placement value.
   */
  y?: string;
}
