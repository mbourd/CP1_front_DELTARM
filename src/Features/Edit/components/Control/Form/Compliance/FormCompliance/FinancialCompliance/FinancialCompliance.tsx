import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { IComplianceData } from 'Features/Edit/types';
import { FormError, InputBase } from 'Shared/components';
import { FinancialComplianceStyled } from './FinancialCompliance.style';
import { EuroIcon } from 'Styles';
import { useApi, useRouter } from 'Services';
import { ComplianceLabel } from '../ComplianceLabel';
import { ComplianceFooter } from '../ComplianceFooter';
import { numberWithSpaces } from '../../../../../../../../Packages/Helpers/src/numberWithSpaces';

interface IProps {
  compliance: IComplianceData;
  fileId: string;
  controlId: string;
}

export const FinancialCompliance: React.FC<IProps> = ({
  compliance,
  fileId,
  controlId,
}): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { currentRoute } = useRouter();

  const saveValue = useCallback(
    (value: string) => {
      if (compliance.regex && !value.match(compliance.regex)) {
        setErrorMessage(compliance.regexMsg);

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
          control_family: compliance.family,
          compliance_id: compliance.id,
        },
      );
    },
    [
      send,
      fileId,
      compliance.id,
      controlId,
      compliance.family,
      currentRoute,
      compliance.regex,
      compliance.regexMsg,
    ],
  );

  useEffect(() => {
    if (error) {
      setErrorMessage("Une erreur s'est produite durant l'enregistrement");
    }
  }, [error]);

  const complianceValue = compliance.value
    ? numberWithSpaces(compliance.value)
    : compliance.value;

  return (
    <Grid item xs={6}>
      <FinancialComplianceStyled>
        <ComplianceLabel compliance={compliance} />
        <InputBase
          placeholder={compliance.lib ? compliance.lib : compliance.value}
          defaultValue={complianceValue}
          icon={<EuroIcon />}
          onBlur={(e) => saveValue(e.currentTarget.value)}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ComplianceFooter compliance={compliance} />
      </FinancialComplianceStyled>
    </Grid>
  );
};
