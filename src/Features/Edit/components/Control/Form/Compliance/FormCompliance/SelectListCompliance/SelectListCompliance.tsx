import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { IComplianceData } from 'Features/Edit/types';
import { FormError, Select } from 'Shared/components';
import { storage, useApi, useRouter } from 'Services';
import { SelectListComplianceStyled } from './SelectListCompliance.style';
import { ComplianceLabel } from '../ComplianceLabel';
import { ComplianceFooter } from '../ComplianceFooter';

interface IProps {
  compliance: IComplianceData;
  fileId: string;
  controlId: string;
}

export const SelectListCompliance: React.FC<IProps> = ({ compliance, fileId, controlId }): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { currentRoute } = useRouter();

  const value = storage.getData<string>(controlId + '.edit.compliance.' + compliance.id + '.value');
  const selectedValue: Record<string, true> = { [value || compliance.value || '']: true };

  const saveValue = useCallback(
    (value: string) => {
      if (compliance.regex && !value.match(compliance.regex)) {
        setErrorMessage(compliance.regexMsg);

        return;
      }
      setErrorMessage(null);
      storage.setData(controlId + '.edit.compliance.' + compliance.id + '.value', value);
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
    [send, fileId, controlId, compliance.family, currentRoute, compliance.regex, compliance.id, compliance.regexMsg],
  );

  useEffect(() => {
    if (error) {
      setErrorMessage("Une erreur s'est produite, veuillez re-sélectionner une valeur");
    }
  }, [error]);

  return (
    <Grid item xs={6}>
      <SelectListComplianceStyled className={'compliance-container'}>
        <ComplianceLabel compliance={compliance} />
        <Select
          closeOnSelect
          name={'selectList' + compliance.id}
          data={compliance.answerChoices || {}}
          selectedValues={selectedValue}
          multiple={false}
          onChange={(selectedValues) => {
            const first = Object.keys(selectedValues)[0];
            saveValue('' + first);
          }}
          error={!!error}
        >
          {'Sélectionner une valeur'}
        </Select>
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ComplianceFooter compliance={compliance} />
      </SelectListComplianceStyled>
    </Grid>
  );
};
