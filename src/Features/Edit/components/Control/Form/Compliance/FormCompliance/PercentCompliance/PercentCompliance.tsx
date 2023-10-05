import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { IApiComplianceFields } from 'Features/Edit/types';
import { FormError, InputBase } from 'Shared/components';
import { PercentComplianceStyled } from './PercentCompliance.style';
import { useApi, useRouter, useTrans } from 'Services';
import { ComplianceLabel } from '../ComplianceLabel';
import { ComplianceFooter } from '../ComplianceFooter';

interface IProps {
  compliance: IApiComplianceFields;
  fileId: string;
  controlId: string;
}

export const PercentCompliance: React.FC<IProps> = ({
  compliance,
  fileId,
  controlId,
}): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { currentRoute } = useRouter();
  const [trans] = useTrans('Edit');
  const [isMandatory] = useState(compliance.compliance_elm_mandatory);
  const [currentValue] = useState<string | null>(
    compliance.compliance_elm_value,
  );

  const saveValue = useCallback(
    (value: string) => {
      if (
        compliance.compliance_elm_regex &&
        !value.match(compliance.compliance_elm_regex)
      ) {
        setErrorMessage(compliance.compliance_elm_regex_msg);

        return;
      }

      setErrorMessage(null);
      send(
        currentRoute?.props?.apiSaveControlRouteName,
        {},
        {
          file_id: fileId,
          elm_id: controlId,
          elm_val: value,
          control_family: compliance.compliance_elm_family,
          compliance_id: compliance.compliance_id,
        },
      );
    },
    [
      send,
      fileId,
      compliance.compliance_id,
      controlId,
      compliance.compliance_elm_family,
      currentRoute,
      compliance.compliance_elm_regex,
      compliance.compliance_elm_regex_msg,
    ],
  );

  useEffect(() => {
    if (error) {
      setErrorMessage(trans('errorRecording'));
    }
  }, [error, trans]);
  useEffect(() => {
    if (isMandatory && !currentValue) {
      setErrorMessage(trans('mandatoryValue'));
    }
  }, [isMandatory, currentValue, trans]);

  //expose for Cypress API
  if (window?.['Cypress']) {
    window['Features_Edit_Control_Form_Compliance_PercentCompliance'] = {
      setErrorMessage,
    };
  }

  return (
    <Grid item xs={6}>
      <PercentComplianceStyled>
        <ComplianceLabel compliance={compliance} />
        <InputBase
          placeholder={
            compliance.compliance_elm_lib
              ? compliance.compliance_elm_lib
              : compliance.compliance_elm_value
          }
          defaultValue={currentValue ?? ''}
          onBlur={(e) => saveValue(e.currentTarget.value)}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ComplianceFooter compliance={compliance} />
      </PercentComplianceStyled>
    </Grid>
  );
};
