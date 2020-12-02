import React, { ReactNode } from 'react';

export interface IModal {
  /**
   * Modal header.
   */
  header?: NonNullable<ReactNode>;
  /**
   * Modal footer.
   */
  footer?: NonNullable<ReactNode>;
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
