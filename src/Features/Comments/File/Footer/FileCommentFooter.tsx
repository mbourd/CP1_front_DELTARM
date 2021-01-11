import React, { useCallback, useContext } from 'react';
import { FileCommentFooterStyled } from './FileCommentFooter.style';
import { InputBase } from 'Shared/components';
import { useApi } from 'Services';
import { EditValidationContext } from 'Features/Edit';

interface IProps {
  addComment: () => void;
}

export const FileCommentFooter: React.FC<IProps> = ({ addComment }): React.ReactElement => {
  const addCommentApi = useApi({ promise: true });
  const context = useContext(EditValidationContext);
  const { fileId } = context;

  const onAddComment = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        const input = e.currentTarget.querySelector('input');

        if (!input) {
          return;
        }

        const val = input.value.trim();

        if (!val || val === '') {
          return;
        }

        const promise = addCommentApi.send('addComment', {}, { file_id: fileId, comment: val });

        if (promise) {
          promise.then(() => {
            addComment();
            input.value = '';
          });
        }
      }
    },
    [addComment, addCommentApi, fileId],
  );

  return (
    <FileCommentFooterStyled>
      <InputBase
        color={'disabled'}
        bdr={'4px'}
        placeholder={'Appuyez sur la touche ENTRER pour valider votre message'}
        onKeyPress={onAddComment}
      />
    </FileCommentFooterStyled>
  );
};
