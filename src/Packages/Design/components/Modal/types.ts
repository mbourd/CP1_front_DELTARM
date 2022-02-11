import React, { ReactNode } from 'react';

export interface IModal {
  /**
   * Modal header.
   */
  header?: ReactNode;
  /**
   * Modal footer.
   */
  footer?: ReactNode;
  /**
   * Modal width.
   */
  width?: 'lg' | 'md' | 'sm' | 'xl' | 'xs' | false;
  /**
   * Modal height.
   */
  height?: string;
  /**
   * Modal max height.
   */
  maxHeight?: string;
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
  children?: NonNullable<ReactNode>;
  /**
   * Open / close modal.
   */
  open?: boolean;
  /**
   * Modal can be closed
   */
  closable?: boolean;
  /**
   * Display the top and bottom dividers.
   */
  dividers?: boolean;
}
