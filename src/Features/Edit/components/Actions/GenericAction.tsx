import React, { FC, useContext, useState } from 'react';
import { Button, GenericActionModal, IButton } from 'Shared/components';
import { EditValidationContext } from 'Features/Edit';
import { IAction } from 'Features/Edit/types';

export interface GenericActionProps extends IButton {
  action: IAction;
  successMessage: string;
  message: string;
  postRouteName: string;
  actionLabel?: string;
  cancelLabel?: string;
  successCloseLabel?: string;
  comment?: boolean;
  commentRequired?: boolean;
  commentParam?: string;
}

export const GenericAction: FC<React.PropsWithChildren<GenericActionProps>> = ({
  action,
  color = 'info',
  type = 'alt',
  successMessage,
  message,
  postRouteName,
  actionLabel,
  cancelLabel,
  successCloseLabel,
  comment,
  commentRequired,
  commentParam,
  ...props
}): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fileId } = useContext(EditValidationContext);

  return (
    <>
      <Button
        color={color}
        type={type}
        onClick={() => setIsModalOpen(!isModalOpen)}
        {...props}
      >
        {action.label}
      </Button>
      {isModalOpen ? (
        <GenericActionModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          fileId={fileId}
          actionLabel={actionLabel || action.label}
          cancelLabel={cancelLabel}
          successMessage={successMessage}
          successCloseLabel={successCloseLabel}
          message={message}
          postRouteName={postRouteName}
          redirectRouteName="edit"
          forceRedirect
          comment={comment}
          commentRequired={commentRequired}
          commentParam={commentParam}
        />
      ) : null}
    </>
  );
};
