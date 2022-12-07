import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { IApiComplianceFields } from 'Features/Edit/types';
import { FormError, Select } from 'Shared/components';
import { storage, useApi, useRouter } from 'Services';
import { SelectListComplianceStyled } from './SelectListCompliance.style';
import { ComplianceLabel } from '../ComplianceLabel';
import { ComplianceFooter } from '../ComplianceFooter';

interface IProps {
  compliance: IApiComplianceFields;
  fileId: string;
  controlId: string;
}

export const SelectListCompliance: React.FC<IProps> = ({
  compliance,
  fileId,
  controlId,
}): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { currentRoute } = useRouter();

  const value = storage.getData<string>(
    fileId +
      controlId +
      '.edit.compliance.' +
      compliance.compliance_id +
      '.value',
  );
  const selectedValue: Record<string, true> = {
    [value || compliance.compliance_elm_value || '']: true,
  };

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
      storage.setData(
        fileId +
          controlId +
          '.edit.compliance.' +
          compliance.compliance_id +
          '.value',
        value,
      );
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
      setErrorMessage(
        "Une erreur s'est produite, veuillez re-sélectionner une valeur",
      );
    }
  }, [error]);

  const modified_data = compliance?.control_answer_choices
    ?.map((choice: any) => {
      return {
        label: choice.choice_lib,
        value: choice.choice_lib,
        id: choice.choice_id,
      };
    })
    .reduce((obj: any, cur: any, i: any) => {
      return { ...obj, [i]: cur };
    }, {});

  return (
    <Grid item xs={6}>
      <SelectListComplianceStyled className={'compliance-container'}>
        <ComplianceLabel compliance={compliance} />
        <Select
          labelColor={'text'}
          labelBdc={'text'}
          closeOnSelect
          name={'select_list' + compliance.compliance_id}
          data={modified_data || {}}
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
