import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { ContentHeaderStyled } from './ContentHeader.style';

import {
  SubmitForValidation,
  Classify,
  Cancel,
  ChangeOwner,
  NewDisbursement,
  CancelDisbursement,
  Close,
  AcceptValidation,
  RejectValidation,
  PostDisbursement,
  GenericAction,
} from '../Actions';

import { EditValidationContext, FileComment, FileAudit } from 'Features';

export const ContentHeader: React.FC = (): React.ReactElement => {
  const { data } = useContext(EditValidationContext);

  return (
    <ContentHeaderStyled>
      <Grid container alignItems={'center'} wrap={'nowrap'}>
        <Grid item className={'icon-container'}>
          <FileComment />
        </Grid>
        <Grid item className={'icon-container'}>
          <FileAudit />
        </Grid>
        <Grid item className={'right'}>
          {data?.actions.map((action, index) => {
            switch (action.code) {
              case 'CANCEL':
                return <Cancel key={index} />;
              case 'NONCASE':
                return <Classify key={index} />;
              case 'OWNER':
                return <ChangeOwner key={index} />;
              case 'NEWDEC':
                return <NewDisbursement key={index} />;
              case 'CANCELDEC':
                return <CancelDisbursement key={index} />;
              case 'POSTDEC':
                return <PostDisbursement key={index} />;
              case 'CLOSE':
                return <Close />;
              case 'VALIDASK':
                return <SubmitForValidation key={index} />;
              case 'ACCEPT':
                return <AcceptValidation key={index} />;
              case 'REJECT':
                return <RejectValidation key={index} />;
              case 'UNCLOSE':
                return (
                  <GenericAction
                    key={index}
                    action={action}
                    message="Souhaitez-vous annuler la clôture du dossier ?"
                    actionLabel="Oui"
                    cancelLabel="Non"
                    successMessage="La clôture du dossier a été annulée"
                    successCloseLabel="Fermer"
                    postRouteName="actionUnclose"
                    comment
                    commentRequired
                    commentParam="unclose_comment"
                  />
                );
              case 'UNNONCASE':
                return (
                  <GenericAction
                    key={index}
                    action={action}
                    color="secondary"
                    message="Souhaitez-vous annuler le statut sans-suite ?"
                    actionLabel="Oui"
                    cancelLabel="Non"
                    successMessage="Le statut sans-suite du dossier a été annulé"
                    successCloseLabel="Fermer"
                    postRouteName="actionUnnoncase"
                  />
                );
            }
          })}
        </Grid>
      </Grid>
    </ContentHeaderStyled>
  );
};
