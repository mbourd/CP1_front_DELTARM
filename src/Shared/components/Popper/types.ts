import { ReferenceObject } from 'popper.js';
import { PopperPlacementType } from '@material-ui/core';

export interface IBPIPopper {
  open: boolean;
  element: null | ReferenceObject | (() => ReferenceObject);
  classes?: string;
  placement?: PopperPlacementType;
}
