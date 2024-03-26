import React, { useContext, useState } from 'react';
import { Grid } from '@mui/material';
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
import { Button, PreWrapStyled } from 'Shared/components';
import { useActionButton } from '../../../../Packages/Helpers/src/useActionButton';
import { useSecurity } from '../../../../Packages/Security';
import { ModalDynamic } from '../../../ModalDynamic/components/ModalDynamic';
import { IDataModal } from '../../../ModalDynamic/components/types';
import { useRecoilValue } from 'recoil';
import { Alert } from '@mui/material';
import { useTrans } from '../../../../Services';

export const ContentHeader: React.FC<
  React.PropsWithChildren<unknown>
> = (): React.ReactElement => {
  const [trans] = useTrans('Edit');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useContext(EditValidationContext);
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const { actionButton, modalData } = useActionButton({ jwt, setIsModalOpen });
  const modal: IDataModal = useRecoilValue<any>(modalData);

  return (
    <ContentHeaderStyled>
      <Grid container style={{ width: '100%' }}>
        {data?.sectionHeader && (
          <Alert
            variant="standard"
            icon={false}
            severity={data.sectionHeader.type === 'alert' ? 'error' : 'success'}
          >
            <PreWrapStyled>{data.sectionHeader.message}</PreWrapStyled>
          </Alert>
        )}
      </Grid>
      <Grid container alignItems={'center'} wrap={'nowrap'}>
        <Grid item className={'icon-container'}>
          <FileComment />
        </Grid>
        <Grid item className={'icon-container'}>
          <FileAudit />
        </Grid>
        <Grid item className={'right'}>
          {data?.actions_contr_perm?.map((button, index) => {
            return (
              <Button
                key={index}
                onClick={() => actionButton(button.action)}
                style={{
                  backgroundColor: button.bg_color,
                  color: button.font_color,
                }}
              >
                {button.btn_lib}
              </Button>
            );
          })}
          {data?.actions?.map((action, index) => {
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
                    message={trans('cancelClosure')}
                    actionLabel={trans('yes')}
                    cancelLabel={trans('no')}
                    successMessage={trans('closureFileCancelled')}
                    successCloseLabel={trans('close')}
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
                    message={trans('cancelNoActionStatus')}
                    actionLabel={trans('yes')}
                    cancelLabel={trans('no')}
                    successMessage={trans('statusFileCancelled')}
                    successCloseLabel={trans('close')}
                    postRouteName="actionUnnoncase"
                  />
                );
            }
          })}
        </Grid>
      </Grid>
      {isModalOpen && modal ? (
        <ModalDynamic
          open={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          data={modal}
        />
      ) : null}
    </ContentHeaderStyled>
  );
};
