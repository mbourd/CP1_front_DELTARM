import React, { useCallback, useContext, useState } from 'react';
import { FileCommentFooterStyled } from './FileCommentFooter.style';
import { InputBase } from 'Shared/components';
import { EditContext } from 'Features/Edit';
import { useApi } from 'Services';
import { IAddComment } from '../../apiRoutes';

export const FileCommentFooter: React.FC = (): React.ReactElement => {
  const [value, setValue] = useState('');
  const { send } = useApi<IAddComment>();
  const { fileId } = useContext(EditContext);

  const addComment = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const val = e.currentTarget.value;

      send('addComment', {}, { file_id: fileId, comment: val });

      // const comment: IFileComment = {
      //   date: '',
      //   user: '',
      //   message: val,
      //   id: 45,
      // };

      setValue('');
    }
  }, []);

  return (
    <FileCommentFooterStyled>
      <InputBase
        color={'disabled'}
        bdr={'50px'}
        placeholder={'Appuyez sur la touche ENTRER pour valider votre message'}
        onKeyPress={addComment}
        onChange={(e) => setValue(e.currentTarget.value)}
        value={value}
      />
    </FileCommentFooterStyled>
  );
};
