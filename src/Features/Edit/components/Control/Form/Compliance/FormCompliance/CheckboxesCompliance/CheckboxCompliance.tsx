import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { IApiComplianceFields } from 'Features/Edit/types';
import { FormError } from 'Shared/components';
import { CheckboxesComplianceStyled } from './CheckboxesCompliance.style';
import { useApi, useRouter } from 'Services';
import { ComplianceLabel } from '../ComplianceLabel';
import { ComplianceFooter } from '../ComplianceFooter';
import { CheckboxWrapper } from '../../../../../../../../Packages/Design/components/Checkbox/CheckboxWrapper';

interface IProps {
  compliance: IApiComplianceFields;
  fileId: string;
  controlId: string;
}

export const ChexboxesCompliance: React.FC<IProps> = ({
  compliance,
  fileId,
  controlId,
}): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentValue, setCurrentValue] = useState(
    compliance.compliance_elm_value,
  );
  const { currentRoute } = useRouter();
  const selectedValue: Record<string, true> = {
    [currentValue || compliance.compliance_elm_value || '']: true,
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
      setCurrentValue(value);

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

  useEffect(() => {
    setCurrentValue(compliance.compliance_elm_value);
  }, [compliance.compliance_elm_value]);

  const modified_data = compliance?.control_answer_choices
    ?.map((choice: any) => {
      return {
        label: choice.choice_lib,
        value: choice.choice_lib,
        id: choice.choice_id,
      };
    })
    .reduce((obj: any, cur: any, i: any) => {
      return { ...obj, [cur?.id]: cur };
    }, {});

  return (
    <Grid item xs={6}>
      <CheckboxesComplianceStyled>
        <ComplianceLabel compliance={compliance} />
        <CheckboxWrapper
          name={'checkbox' + compliance.compliance_id}
          data={modified_data || {}}
          selectedValues={selectedValue}
          multiple={true}
          onChange={(selectedValues) => {
            const value =
              Object.keys(selectedValues).length >= 2
                ? Object.keys(selectedValues).join(';')
                : Object.keys(selectedValues)[0];
            const val = value ? value : '';
            saveValue('' + val);
          }}
          error={!!error}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ComplianceFooter compliance={compliance} />
      </CheckboxesComplianceStyled>
    </Grid>
  );
};
