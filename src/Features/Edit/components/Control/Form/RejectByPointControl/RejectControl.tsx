import React, { useState } from 'react';
import { CheckboxRejectControl } from './CheckboxRejectControl/CheckboxRejectControl';
import { RejectControlContainer } from './RejectControl.style';
import { ControlRejectable } from '../../../../types';
import { FileCommentBody } from '../../../../../Comments/File/Body/FileCommentBody';
import { Popper } from '../../../../../../Packages/Design/components';
import {
  FileCommentHeaderStyled,
  FileCommentStyled,
} from '../../../../../Comments/File/FileComment.style';
import { Card } from '@material-ui/core';
import { CommentIcon } from '../../../../../../Packages/Design';
import { router } from '../../../../../../Packages/Router';
import { FileCommentRejectionFooter } from './FileCommentRejection/FileCommentRejectionFooter';

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
  const [rejectComments, setRejectComments] = useState(
    controlRejectable.rejectComments,
  );

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
          <span
            style={{ marginLeft: '10px' }}
            id={`rejected-comments${controlId}`}
          >
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
            onClickAway={() => setAnchorEl(null)}
            zIndex={2}
          >
            <FileCommentStyled>
              <Card>
                <FileCommentHeaderStyled>
                  Commentaires liés au rejet
                </FileCommentHeaderStyled>
                <FileCommentBody comments={rejectComments} />
                <FileCommentRejectionFooter
                  controlId={controlId}
                  setRejectComments={setRejectComments}
                />
              </Card>
            </FileCommentStyled>
          </Popper>
        </>
      ) : null}
    </RejectControlContainer>
  );
};
