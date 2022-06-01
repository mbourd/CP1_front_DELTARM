import React, { useCallback, useEffect, useState } from 'react';
import { DateComplianceStyled } from './DateCompliance.style';
import { Grid } from '@material-ui/core';
import { IApiComplianceFields } from 'Features/Edit/types';
import { FormError, InputBase } from 'Shared/components';
import { useApi, useRouter } from 'Services';
import { ComplianceLabel } from '../ComplianceLabel';
import { ComplianceFooter } from '../ComplianceFooter';

interface IProps {
  compliance: IApiComplianceFields;
  fileId: string;
  controlId: string;
}

export const DateCompliance: React.FC<IProps> = ({
  compliance,
  fileId,
  controlId,
}): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { currentRoute } = useRouter();

  const saveValue = useCallback(
    (value: string) => {
      if (
        compliance.compliance_elm_regex &&
        !value.match(compliance.compliance_elm_regex)
      ) {
        setErrorMessage(compliance.compliance_elm_regex_msg);

        return;
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
      controlId,
      compliance.compliance_elm_family,
      currentRoute,
      compliance.compliance_elm_regex,
      compliance.compliance_id,
      compliance.compliance_elm_regex_msg,
    ],
  );

  useEffect(() => {
    if (error) {
      setErrorMessage("Une erreur s'est produite durant l'enregistrement");
    }
  }, [error]);

  return (
    <Grid item xs={6}>
      <DateComplianceStyled>
        <ComplianceLabel compliance={compliance} />
        <InputBase
          placeholder={
            compliance.compliance_elm_lib
              ? compliance.compliance_elm_lib
              : compliance.compliance_elm_value
          }
          disabled={!compliance.compliance_elm_lib}
          color={compliance.compliance_elm_lib ? 'text' : 'disabled'}
          defaultValue={compliance.compliance_elm_value}
          onBlur={(e) => saveValue(e.currentTarget.value)}
          type={'date'}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ComplianceFooter compliance={compliance} />
      </DateComplianceStyled>
    </Grid>
  );
};
