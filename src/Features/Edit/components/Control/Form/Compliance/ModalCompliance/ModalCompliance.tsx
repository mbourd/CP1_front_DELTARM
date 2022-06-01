import React, { useEffect } from 'react';
import { Button, Modal } from '../../../../../../../Packages/Design/components';
import { IApiComplianceData, IApiComplianceFields } from '../../../../../types';
import { SwitchControlCompliance } from '../SwitchControlCompliance';
import { Grid } from '@material-ui/core';
import { FormControlStyled } from '../../../Display/FormControl.style';
import { SearchModalFooterStyled } from '../../../../../../Manage/components/Search/Modal/SearchModal.style';
import { HeadingTwo } from '../../../../../../../Shared/components';
import { useApi } from '../../../../../../../Services';

interface IProps {
  open: boolean;
  onClose: () => void;
  controlId: string;
  fileId: string;
}

export const ModalCompliance: React.FC<IProps> = ({
  open,
  onClose,
  controlId,
  fileId,
}): React.ReactElement => {
  const { send, data } = useApi<IApiComplianceData>();

  useEffect(() => {
    send(
      'getCompliance',
      {},
      {
        file_id: fileId,
        elm_id: controlId,
      },
    );
  }, [send, fileId, controlId]);

  const footer = (
    <SearchModalFooterStyled>
      <Button color={'success'} onClick={onClose}>
        OK
      </Button>
    </SearchModalFooterStyled>
  );

  return (
    <Modal open={open} height={'618px'} onClose={onClose} footer={footer}>
      <HeadingTwo>{data?.compliance_modal_title}</HeadingTwo>
      <FormControlStyled>
        <Grid container className={'control-container'}>
          {data?.compliance_fields.map(
            (compliance: IApiComplianceFields, index) => {
              return (
                <SwitchControlCompliance
                  compliance={compliance}
                  controlId={controlId}
                  key={index}
                />
              );
            },
          )}
        </Grid>
      </FormControlStyled>
    </Modal>
  );
};
