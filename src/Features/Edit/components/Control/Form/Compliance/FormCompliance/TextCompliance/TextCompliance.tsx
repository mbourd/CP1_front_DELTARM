import React, { useCallback, useEffect, useState } from 'react';
import { TextComplianceStyled } from './TextCompliance.style';
import { Grid } from '@mui/material';
import { IApiComplianceFields } from 'Features/Edit/types';
import { FormError, InputBase } from 'Shared/components';
import { useApi, useRouter, useTrans } from 'Services';
import { ComplianceLabel } from '../ComplianceLabel';
import { ComplianceFooter } from '../ComplianceFooter';

interface IProps {
  compliance: IApiComplianceFields;
  fileId: string;
  controlId: string;
}

export const TextCompliance: React.FC<React.PropsWithChildren<IProps>> = ({
  compliance,
  fileId,
  controlId,
}): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { currentRoute } = useRouter();
  const [trans] = useTrans('Edit');
  const [isMandatory] = useState(compliance.compliance_elm_mandatory);
  const [currentValue, setCurrentValue] = useState<string | null>(
    compliance.compliance_elm_value,
  );

  const saveValue = useCallback(
    (value: string) => {
      const regexCompliance = new RegExp(compliance.compliance_elm_regex, 'i');
      if (compliance.compliance_elm_regex && !value.match(regexCompliance)) {
        setErrorMessage(compliance.compliance_elm_regex_msg);

        return;
      }

      setErrorMessage(null);
      setCurrentValue(value);

      if (isMandatory && value == '') {
        setErrorMessage('Valeur obligatoire');
      }

      const q: Record<string, string> = {
        file_id: fileId,
        elm_id: controlId,
        control_family: compliance.compliance_elm_family,
        compliance_id: compliance.compliance_id,
        elm_val: value,
      };

      send(currentRoute?.props?.apiSaveControlRouteName, {}, q);
    },
    [
      send,
      fileId,
      controlId,
      currentRoute,
      compliance.compliance_elm_family,
      compliance.compliance_elm_regex,
      compliance.compliance_id,
      compliance.compliance_elm_regex_msg,
      isMandatory,
    ],
  );

  useEffect(() => {
    if (error) {
      setErrorMessage(trans('errorRecording'));
    }
  }, [error, trans]);

  useEffect(() => {
    if (isMandatory && !currentValue) setErrorMessage('Valeur obligatoire');
  }, [isMandatory, currentValue, trans]);

  //expose for Cypress API
  if (window?.['Cypress']) {
    window['Features_Edit_Control_Form_Compliance_TextCompliance'] = {
      setErrorMessage,
    };
  }

  return (
    <Grid item xs={6}>
      <TextComplianceStyled>
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
      </TextComplianceStyled>
    </Grid>
  );
};
