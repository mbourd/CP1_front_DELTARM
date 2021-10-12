import React, { useCallback, useEffect, useState } from 'react';
import { DateComplianceStyled } from './DateCompliance.style';
import { Grid } from '@material-ui/core';
import { IComplianceData } from 'Features/Edit/types';
import { FormError, InputBase } from 'Shared/components';
import { storage, useApi, useRouter } from 'Services';
import { ComplianceLabel } from '../ComplianceLabel';
import { ComplianceFooter } from '../ComplianceFooter';

interface IProps {
  compliance: IComplianceData;
  fileId: string;
  controlId: string;
}

export const DateCompliance: React.FC<IProps> = ({ compliance, fileId, controlId }): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { currentRoute } = useRouter();

  const value = storage.getData<string>('edit.compliance.' + compliance.id + '.value');

  const saveValue = useCallback(
    (value: string) => {
      if (compliance.regex && !value.match(compliance.regex)) {
        setErrorMessage("Le format attendu n'est pas valide");

        return;
      }
      storage.setData('edit.compliance.' + compliance.id + '.value', value);
      send(
        currentRoute?.props?.apiSaveControlRouteName,
        {},
        {
          file_id: fileId,
          elm_id: controlId,
          elm_val: value,
          control_family: compliance.family,
          compliance_id: compliance.id,
        },
      );
    },
    [send, fileId, controlId, compliance.family, currentRoute, compliance.regex, compliance.id],
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
          placeholder={compliance.lib ? compliance.lib : compliance.value}
          disabled={!compliance.lib}
          color={compliance.lib ? 'text' : 'disabled'}
          defaultValue={value || compliance.value}
          onBlur={(e) => saveValue(e.currentTarget.value)}
          type={'date'}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ComplianceFooter compliance={compliance} />
      </DateComplianceStyled>
    </Grid>
  );
};
