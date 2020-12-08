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
} from '../Actions';

import { EditValidationContext, FileComment } from 'Features';

export const ContentHeader: React.FC = (): React.ReactElement => {
  const { data } = useContext(EditValidationContext);

  return (
    <ContentHeaderStyled>
      <Grid container alignItems={'center'} wrap={'nowrap'}>
        <Grid item className={'left'}>
          <FileComment />
        </Grid>
        <Grid item className={'right'}>
          {data?.actions.map((action) => {
            switch (action.code) {
              case 'CANCEL':
                return <Cancel />;
              case 'NONCASE':
                return <Classify />;
              case 'OWNER':
                return <ChangeOwner />;
              case 'NEWDEC':
                return <NewDisbursement />;
              case 'CANCELDEC':
                return <CancelDisbursement />;
              case 'POSTDEC':
                return <PostDisbursement />;
              case 'CLOSE':
                return <Close />;
              case 'VALIDASK':
                return <SubmitForValidation />;
              case 'ACCEPT':
                return <AcceptValidation />;
              case 'REJECT':
                return <RejectValidation />;
            }
          })}
          <PostDisbursement />
        </Grid>
      </Grid>
    </ContentHeaderStyled>
  );
};
