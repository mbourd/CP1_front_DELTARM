import React from 'react';
import { Modal } from '../../../../../../../Packages/Design/components';
import { ICompliance, IComplianceData } from '../../../../../types';
import { SwitchControlCompliance } from '../SwitchControlCompliance';
import { Grid } from '@material-ui/core';
import { DisplayControlStyled } from '../../../Display/DisplayControl.style';

interface IProps {
  compliance: ICompliance;
  open: boolean;
  onClose: () => void;
  controlId: string;
  fileId: string;
}

export const ModalCompliance: React.FC<IProps> = ({ compliance, open, onClose, controlId }): React.ReactElement => {
  return (
    <Modal open={open} height={'618px'} onClose={onClose}>
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
