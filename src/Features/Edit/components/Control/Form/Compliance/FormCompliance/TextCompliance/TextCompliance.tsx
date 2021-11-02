import React, { useCallback, useEffect, useState } from 'react';
import { TextComplianceStyled } from './TextCompliance.style';
import { Grid } from '@material-ui/core';
import { IComplianceData } from 'Features/Edit/types';
import { FormError, InputBase } from 'Shared/components';
import { useApi, useRouter } from 'Services';
import { ComplianceLabel } from '../ComplianceLabel';
import { ComplianceFooter } from '../ComplianceFooter';

interface IProps {
  compliance: IComplianceData;
  fileId: string;
  controlId: string;
}

export const TextCompliance: React.FC<IProps> = ({ compliance, fileId, controlId }): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { currentRoute } = useRouter();

  const saveValue = useCallback(
    (value: string) => {
      const regexCompliance = new RegExp(compliance.regex, 'i');
      if (compliance.regex && !value.match(regexCompliance)) {
        setErrorMessage(compliance.regexMsg);

        return;
      }

      setErrorMessage(null);
      const q: Record<string, string> = {
        file_id: fileId,
        elm_id: controlId,
        control_family: compliance.family,
        compliance_id: compliance.id,
        elm_val: value,
      };

      send(currentRoute?.props?.apiSaveControlRouteName, {}, q);
    },
    [send, fileId, controlId, currentRoute, compliance.family, compliance.regex, compliance.id, compliance.regexMsg],
  );

  useEffect(() => {
    if (error) {
      setErrorMessage("Une erreur s'est produite durant l'enregistrement");
    }
  }, [error]);

  return (
    <Grid item xs={6}>
      <TextComplianceStyled>
        <ComplianceLabel compliance={compliance} />
        <InputBase
          placeholder={compliance.lib ? compliance.lib : compliance.value}
          defaultValue={compliance.value}
          onBlur={(e) => saveValue(e.currentTarget.value)}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ComplianceFooter compliance={compliance} />
      </TextComplianceStyled>
    </Grid>
  );
};
