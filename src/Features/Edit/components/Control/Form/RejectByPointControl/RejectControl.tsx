import React, { useCallback, useContext, useState } from 'react';
import { CheckboxRejectControl } from './CheckboxRejectControl/CheckboxRejectControl';
import { RejectControlContainer } from './RejectControl.style';
import { ControlRejectable } from '../../../../types';
import { FileCommentBody } from '../../../../../Comments/File/Body/FileCommentBody';
import {
  FormError,
  InputBase,
  Popper,
} from '../../../../../../Packages/Design/components';
import {
  FileCommentHeaderStyled,
  FileCommentStyled,
} from '../../../../../Comments/File/FileComment.style';
import { Card } from '@material-ui/core';
import { CommentIcon } from '../../../../../../Packages/Design';
import { router } from '../../../../../../Packages/Router';
import { addRejectComment } from './apiRoute/addRejectComment';
import { IUser, security } from '../../../../../../Packages/Security';
import { EditValidationContext } from '../../../../EditValidationContext';
import { FileCommentFooterStyled } from '../../../../../Comments/File/Footer/FileCommentFooter.style';

interface IRejectedProps {
  isRejected: boolean;
  controlId: string;
  setIsRejected: React.Dispatch<React.SetStateAction<boolean>>;
  context: 'edit' | 'validate';
  controlRejectable: ControlRejectable;
}

export const RejectControl: React.FC<IRejectedProps> = ({
  controlId,
  setIsRejected,
  isRejected,
  context,
  controlRejectable,
}): React.ReactElement | null => {
  const [anchorEl, setAnchorEl] = React.useState<
    SVGSVGElement | Element | null
  >(null);
  const [user] = useState<IUser>(security.getUser());
  const jwt = user.getJwt();
  const { fileId } = useContext(EditValidationContext);
  const [rejectComments, setRejectComments] = useState(
    controlRejectable.rejectComments,
  );
  const [error, setError] = useState<string | null>(null);

  const addComment = useCallback(
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
        addRejectComment(
          fileId,
          controlId,
          jwt,
          val,
          setRejectComments,
          setError,
        );
      }
    },
    [controlId, fileId, jwt],
  );

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  return (
    <RejectControlContainer>
      <CheckboxRejectControl
        setRejectComments={setRejectComments}
        checkedColor={'error'}
        uncheckedColor={'secondary'}
        context={context}
        controlId={controlId}
        isRejected={isRejected}
        setIsRejected={setIsRejected}
      />
      {rejectComments.length > 0 ? (
        <>
          <span style={{ marginLeft: '10px' }}>
            <CommentIcon
              fontSize={'small'}
              onClick={(e) => {
                setAnchorEl(anchorEl ? null : e.currentTarget);
                router.setQueries({});
              }}
            />
          </span>
          <Popper
            element={anchorEl}
            placement={'bottom-start'}
            bdr={'0'}
            border={'0'}
            onClickAway={handleClickAway}
            zIndex={2}
          >
            <FileCommentStyled>
              <Card>
                <FileCommentHeaderStyled>
                  Commentaires liés au rejet
                </FileCommentHeaderStyled>
                <FileCommentBody comments={rejectComments} />
                <FileCommentFooterStyled>
                  <InputBase
                    color={'disabled'}
                    bdr={'4px'}
                    placeholder={
                      'Appuyez sur la touche ENTRER pour valider votre message'
                    }
                    onKeyPress={addComment}
                  />
                </FileCommentFooterStyled>
                {error && <FormError>{error}</FormError>}
              </Card>
            </FileCommentStyled>
          </Popper>
        </>
      ) : null}
    </RejectControlContainer>
  );
};
