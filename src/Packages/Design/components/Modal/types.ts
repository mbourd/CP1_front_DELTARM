import React from 'react';

export interface IModal {
  /**
   * Modal header.
   */
  header?: string | React.ReactElement;
  /**
   * Modal footer.
   */
  footer?: string | React.ReactElement;
  /**
   * Modal width.
   */
  width?: 'lg' | 'md' | 'sm' | 'xl' | 'xs' | false;
  /**
   * Modal height.
   */
  height?: string;
  /**
   * Additional classes.
   */
  className?: string;
  /**
   * Close event callback.
   */
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Modal content.
   */
  children?: string | React.ReactElement;
  /**
   * Open / close modal.
   */
  open?: boolean;
  /**
   * Display the top and bottom dividers.
   */
  dividers?: boolean;
}
