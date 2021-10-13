import React, { useCallback, useEffect, useState } from 'react';
import { CommentComplianceStyled } from './CommentCompliance.style';
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

export const CommentCompliance: React.FC<IProps> = ({ compliance, fileId, controlId }): React.ReactElement => {
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
    [send, fileId, currentRoute, compliance.family, compliance.regex, compliance.id, controlId, compliance.regexMsg],
  );

  useEffect(() => {
    if (error) {
      setErrorMessage("Une erreur s'est produite durant l'enregistrement");
    }
  }, [error]);

  return (
    <Grid item xs={6}>
      <CommentComplianceStyled>
        <ComplianceLabel compliance={compliance} />
        <InputBase
          multiline
          multilineRows={10}
          placeholder={compliance.lib ? compliance.lib : compliance.value}
          defaultValue={compliance.value}
          onBlur={(e) => saveValue(e.currentTarget.value)}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ComplianceFooter compliance={compliance} />
      </CommentComplianceStyled>
    </Grid>
  );
};
