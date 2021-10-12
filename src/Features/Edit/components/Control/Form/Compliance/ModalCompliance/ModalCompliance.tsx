import React from 'react';
import { Button, Modal } from '../../../../../../../Packages/Design/components';
import { ICompliance, IComplianceData } from '../../../../../types';
import { SwitchControlCompliance } from '../SwitchControlCompliance';
import { Grid } from '@material-ui/core';
import { DisplayControlStyled } from '../../../Display/DisplayControl.style';
import { SearchModalFooterStyled } from '../../../../../../Manage/components/Search/Modal/SearchModal.style';
import { HeadingTwo } from '../../../../../../../Shared/components';

interface IProps {
  compliance: ICompliance;
  open: boolean;
  onClose: () => void;
  controlId: string;
  fileId: string;
}

export const ModalCompliance: React.FC<IProps> = ({ compliance, open, onClose, controlId }): React.ReactElement => {
  const footer = (
    <SearchModalFooterStyled>
      <Button color={'success'} onClick={onClose}>
        OK
      </Button>
    </SearchModalFooterStyled>
  );

  return (
    <Modal open={open} height={'618px'} onClose={onClose} footer={footer}>
      <HeadingTwo>{compliance.modaleTitle}</HeadingTwo>
      <DisplayControlStyled>
        <Grid container className={'control-container'}>
          {compliance.complianceElms.map((compliance: IComplianceData, index) => {
            return <SwitchControlCompliance compliance={compliance} controlId={controlId} key={index} />;
          })}
        </Grid>
      </DisplayControlStyled>
    </Modal>
  );
};
