import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Grid } from '@mui/material';
import { IApiComplianceFields } from 'Features/Edit/types';
import { FormError } from 'Shared/components';
import { RadioComplianceStyled } from './RadioCompliance.style';
import { storage, useApi, useRouter, useTrans } from 'Services';
import { ComplianceLabel } from '../ComplianceLabel';
import { ComplianceFooter } from '../ComplianceFooter';
import { CheckboxWrapper } from '../../../../../../../../Packages/Design/components/Checkbox/CheckboxWrapper';

interface IProps {
  compliance: IApiComplianceFields;
  fileId: string;
  controlId: string;
}

export const RadioCompliance: React.FC<React.PropsWithChildren<IProps>> = ({
  compliance,
  fileId,
  controlId,
}): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { currentRoute } = useRouter();
  const [trans] = useTrans('Edit');
  const value = storage.getData<string>(
    fileId +
      controlId +
      '.edit.compliance.' +
      compliance.compliance_id +
      '.value',
  );
  const selectedValue: Record<string, true> = useMemo(
    () => ({
      [value || compliance.compliance_elm_value || '']: true,
    }),
    [compliance.compliance_elm_value, value],
  );
  const [isMandatory] = useState(compliance.compliance_elm_mandatory);

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
      controlId,
      compliance.compliance_elm_family,
      currentRoute,
      compliance.compliance_elm_regex,
      compliance.compliance_id,
      compliance.compliance_elm_regex_msg,
      isMandatory,
    ],
  );

  useEffect(() => {
    if (error) {
      setErrorMessage(trans('errorRecording'));
    }
  }, [error, trans]);

  const modified_data = compliance?.control_answer_choices
    ?.map((choice: any) => {
      return {
        label: choice.choice_lib,
        value: choice.choice_lib,
        id: choice.choice_id,
      };
    })
    .reduce((obj: any, cur: any) => {
      return { ...obj, [cur?.id]: cur };
    }, {});

  useEffect(() => {
    if (isMandatory && Object.keys(selectedValue)[0] === '') {
      setErrorMessage('Valeur obligatoire');
    }
  }, [isMandatory, selectedValue, trans]);

  //expose for Cypress API
  if (window?.['Cypress']) {
    window['Features_Edit_Control_Form_Compliance_RadioCompliance'] = {
      setErrorMessage,
    };
  }

  return (
    <Grid item xs={6}>
      <RadioComplianceStyled>
        <ComplianceLabel compliance={compliance} />
        <CheckboxWrapper
          name={'checkbox' + compliance.compliance_id}
          data={modified_data || {}}
          selectedValues={selectedValue}
          multiple={false}
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
      </RadioComplianceStyled>
    </Grid>
  );
};
