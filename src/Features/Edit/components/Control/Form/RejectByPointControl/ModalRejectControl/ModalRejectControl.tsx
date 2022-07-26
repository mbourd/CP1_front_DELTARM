import React, { useCallback, useState } from 'react';
import { Button, Modal } from '../../../../../../../Packages/Design/components';
import { Grid } from '@material-ui/core';
import { FormControlStyled } from '../../../Display/FormControl.style';
import { SearchModalFooterStyled } from '../../../../../../Manage/components/Search/Modal/SearchModal.style';
import { HeadingTwo } from '../../../../../../../Shared/components';
import { CommentRejectControl } from '../FormRejectControl/CommentRejectControl/CommentRejectControl';
import { IUser, security } from '../../../../../../../Packages/Security';
import axios from 'axios';
import { getEnv } from '../../../../../../../Packages/Helpers';
import { IApiFileComment, IFileComment } from '../../../../../../Comments';
import { useTrans } from '../../../../../../../Services';

interface IProps {
  open: boolean;
  onClose: () => void;
  controlId: string;
  fileId: string;
  isRejected: boolean;
  setSuccessCallRejection: React.Dispatch<React.SetStateAction<boolean>>;
  setRejectComments: React.Dispatch<React.SetStateAction<IFileComment[]>>;
}

export const ModalRejectControl: React.FC<IProps> = ({
  open,
  onClose,
  controlId,
  fileId,
  isRejected,
  setSuccessCallRejection,
  setRejectComments,
}): React.ReactElement => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [user] = useState<IUser>(security.getUser());
  const jwt = user.getJwt();
  const [trans] = useTrans('Edit');
  const [commentValue, setCommentValue] = useState<string | null>(null);

  const saveValue = useCallback(() => {
    setErrorMessage(null);
    if (!commentValue) {
      setErrorMessage(trans('commentMandatoryReject'));

      return;
    }
    axios
      .post(
        `${getEnv('API_PROTOCOL')}://${getEnv(
          'API_HOST',
        )}/control/reject/value?file_id=${fileId}&elm_id=${controlId}&reject_value=${isRejected}&reject_comment=${commentValue}`,
        {},
        {
          headers: {
            Authorization: jwt,
            'Content-type': 'application/json',
          },
        },
      )
      .then(async (response) => {
        const rejectComments: IFileComment[] = [];
        if (response.data.comment_list) {
          response.data.comment_list.map((datum: IApiFileComment) => {
            const date = new Date(datum.comment_ts);

            rejectComments.push({
              id: datum.comment_id,
              message: datum.comment_text,
              date:
                date.getDate() +
                '/' +
                (date.getMonth() + 1) +
                '/' +
                date.getFullYear() +
                ' à ' +
                date.getHours() +
                ':' +
                date.getMinutes() +
                ':' +
                date.getSeconds(),
              user: datum.comment_user_name,
            });

            return datum;
          });

          return rejectComments;
        }
        setRejectComments(rejectComments);
        setSuccessCallRejection(true);
        setErrorMessage(null);
        onClose();

        return;
      })
      .catch(async (error) => {
        if (error) {
          setSuccessCallRejection(false);
          if (error.response.data.error_msg) {
            setErrorMessage(error.response.data.error_msg);
          } else {
            setErrorMessage(trans('errorOccured'));
          }

          return;
        }
      });
  }, [
    setRejectComments,
    onClose,
    setSuccessCallRejection,
    commentValue,
    fileId,
    controlId,
    jwt,
    isRejected,
    trans,
  ]);

  const footer = (
    <SearchModalFooterStyled>
      <Button color={'error'} onClick={onClose}>
        Annuler
      </Button>
      <Button color={'success'} onClick={saveValue}>
        Rejeter
      </Button>
    </SearchModalFooterStyled>
  );

  return (
    <Modal open={open} height={'350px'} onClose={onClose} footer={footer}>
      <HeadingTwo>{trans('explainReasonRejection')}</HeadingTwo>
      <FormControlStyled>
        <Grid container className={'control-container'}>
          <CommentRejectControl
            errorMessage={errorMessage}
            setCommentValue={setCommentValue}
          />
        </Grid>
      </FormControlStyled>
    </Modal>
  );
};
