export * from './IAction';
export * from './IFile';
export * from './ISection';
export * from './IChapter';
export * from './IControl';
export * from './IState';
export * from './IData';
export * from './ILinkedFiles';

export const CONTENT_TYPE = {
  1: 'INFORMATION',
  2: 'SETTING_UP',
  3: 'DISBURSEMENT',
  23: 'POST_DISBURSEMENT',
};

export const ACTION_TYPE = {
  1: 'CANCEL_FILE',
  2: 'WITHOUT_CONTINUATION',
  8: 'SUBMIT_FOR_VALIDATION',
};
