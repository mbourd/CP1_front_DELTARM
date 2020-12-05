import React from 'react';
import { FileCommentFooterStyled } from './FileCommentFooter.style';
import { InputBase } from 'Shared/components';

export const FileCommentFooter: React.FC = (): React.ReactElement => {
  return (
    <FileCommentFooterStyled>
      <InputBase
        color={'disabled'}
        bdr={'50px'}
        placeholder={'Appuyez sur la touche ENTRER pour valider votre message'}
      />
    </FileCommentFooterStyled>
  );
};
