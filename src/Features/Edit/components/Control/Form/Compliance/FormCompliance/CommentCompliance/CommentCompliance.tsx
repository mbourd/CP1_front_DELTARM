import React, { useCallback, useEffect, useState } from 'react';
import { CommentComplianceStyled } from './CommentCompliance.style';
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

export const CommentCompliance: React.FC<IProps> = ({
  compliance,
  fileId,
  controlId,
}): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [trans] = useTrans('Edit');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { currentRoute } = useRouter();
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

      if (isMandatory && value == '') {
        setErrorMessage('Valeur obligatoire');
      }

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
      currentRoute,
      compliance.compliance_elm_family,
      compliance.compliance_elm_regex,
      compliance.compliance_id,
      controlId,
      compliance.compliance_elm_regex_msg,
      isMandatory,
    ],
  );

  useEffect(() => {
    if (error) {
      setErrorMessage("Une erreur s'est produite durant l'enregistrement");
    }
  }, [error]);

  useEffect(() => {
    if (isMandatory && !currentValue) {
      setErrorMessage('Valeur obligatoire');
    }
  }, [isMandatory, currentValue, trans]);

  if (window?.['Cypress']) {
    window['Features_Edit_Control_Form_Compliance_CommentCompliance'] = {
      setErrorMessage,
    };
  }

  return (
    <Grid item xs={6}>
      <CommentComplianceStyled>
        <ComplianceLabel compliance={compliance} />
        <InputBase
          multiline
          multilineRows={10}
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
      </CommentComplianceStyled>
    </Grid>
  );
};
