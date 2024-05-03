import { PopperPlacementType } from '@mui/material';

export interface IPopper {
  element: any;
  $border?: string;
  $shadow?: string;
  /**
   * Background color.
   */
  $bgc?: string;
  /**
   * Border radius.
   */
  $bdr?: string;
  placement?: PopperPlacementType;
  onClickAway?: (event: MouseEvent | TouchEvent) => void;
  zIndex?: number;
}
