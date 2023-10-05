import React, { useCallback, useEffect, useState } from 'react';
import { LongTextComplianceStyled } from './LongTextCompliance.style';
import { Grid } from '@material-ui/core';
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

export const LongTextCompliance: React.FC<IProps> = ({
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
      const regexCompliance = new RegExp(compliance.compliance_elm_regex, 'i');
      if (compliance.compliance_elm_regex && !value.match(regexCompliance)) {
        setErrorMessage(compliance.compliance_elm_regex_msg);

        return;
      }

      setErrorMessage(null);

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
      setErrorMessage("Une erreur s'est produite durant l'enregistrement");
    }
  }, [error, trans]);
  useEffect(() => {
    if (isMandatory && !currentValue) {
      setErrorMessage('Valeur obligatoire');
    }
  }, [isMandatory, currentValue, trans]);

  //expose for Cypress API
  if (window?.['Cypress']) {
    window['Features_Edit_Control_Form_Compliance_LongTextCompliance'] = {
      setErrorMessage,
    };
  }

  return (
    <Grid item xs={6}>
      <LongTextComplianceStyled>
        <ComplianceLabel compliance={compliance} />
        <InputBase
          multiline
          multilineRows={3}
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
      </LongTextComplianceStyled>
    </Grid>
  );
};
