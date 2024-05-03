import React, { useCallback, useContext, useState } from 'react';
import { FileCommentFooterStyled } from '../../../../../../Comments/File/Footer/FileCommentFooter.style';
import {
  FormError,
  InputBase,
} from '../../../../../../../Packages/Design/components';
import { addRejectComment } from '../apiRoute/addRejectComment';
import { IFileComment } from '../../../../../../Comments';
import { IUser, security } from '../../../../../../../Packages/Security';
import { EditValidationContext } from '../../../../../EditValidationContext';
import { useTrans } from '../../../../../../../Services';

interface FileCommentRejectionFooter {
  controlId: string;
  setRejectComments: React.Dispatch<React.SetStateAction<IFileComment[]>>;
}

export const FileCommentRejectionFooter: React.FC<
  React.PropsWithChildren<FileCommentRejectionFooter>
> = ({ controlId, setRejectComments }) => {
  const [user] = useState<IUser>(security.getUser());
  const jwt = user.getJwt();
  const { fileId } = useContext(EditValidationContext);
  const [inputCommentValue, setInputCommentValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [trans] = useTrans('Edit');

  const handleChangeInputValue = useCallback((value: string) => {
    setInputCommentValue(value);
  }, []);

  const addComment = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        if (!inputCommentValue) {
          return;
        }

        const value = inputCommentValue.trim();

        if (!value || value === '') {
          return;
        }
        addRejectComment(
          fileId,
          controlId,
          jwt,
          value,
          setRejectComments,
          setError,
          setInputCommentValue,
        );
      }
    },
    [
      controlId,
      fileId,
      jwt,
      setInputCommentValue,
      inputCommentValue,
      setRejectComments,
    ],
  );

  return (
    <>
      <FileCommentFooterStyled>
        <InputBase
          color={'disabled'}
          bdr={'4px'}
          placeholder={trans('validateMessage')}
          onChange={(e) => handleChangeInputValue(e.currentTarget.value)}
          value={inputCommentValue}
          onKeyPress={addComment}
        />
      </FileCommentFooterStyled>
      {error && <FormError>{error}</FormError>}
    </>
  );
};
