import React, { useCallback, useEffect, useState } from 'react';
import { BooleanComplianceStyled } from './BooleanCompliance.style';
import { Grid } from '@mui/material';
import { IApiComplianceFields } from 'Features/Edit/types';
import { FormError } from 'Shared/components';
import { useApi, useRouter, useTrans } from 'Services';
import { ComplianceLabel } from '../ComplianceLabel';
import { ComplianceFooter } from '../ComplianceFooter';
import { Checkbox } from '@mui/material';
import { stringToBoolean } from '../../../../../../../../Packages/Helpers/src/stringToBoolean';

interface IProps {
  compliance: IApiComplianceFields;
  fileId: string;
  controlId: string;
}

export const BooleanCompliance: React.FC<React.PropsWithChildren<IProps>> = ({
  compliance,
  fileId,
  controlId,
}): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [trans] = useTrans('Edit');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { currentRoute } = useRouter();
  const [currentValue, setCurrentValue] = useState<string | null>(
    compliance.compliance_elm_value,
  );
  const [isMandatory] = useState(compliance.compliance_elm_mandatory);

  const toggleAndSaveValue = useCallback(() => {
    const booleanValue = !stringToBoolean(currentValue);

    const regexCompliance = new RegExp(compliance.compliance_elm_regex, 'i');
    if (
      compliance.compliance_elm_regex &&
      !currentValue?.match(regexCompliance)
    ) {
      setErrorMessage(compliance.compliance_elm_regex_msg);

      return;
    }

    setErrorMessage(null);
    setCurrentValue(booleanValue.toString());

    const q: Record<string, string> = {
      file_id: fileId,
      elm_id: controlId,
      control_family: compliance.compliance_elm_family,
      compliance_id: compliance.compliance_id,
      elm_val: booleanValue.toString(),
    };

    send(currentRoute?.props?.apiSaveControlRouteName, {}, q);
  }, [
    currentValue,
    compliance.compliance_elm_regex,
    compliance.compliance_elm_family,
    compliance.compliance_id,
    compliance.compliance_elm_regex_msg,
    fileId,
    controlId,
    send,
    currentRoute?.props?.apiSaveControlRouteName,
  ]);

  useEffect(() => {
    if (error) {
      setErrorMessage(trans('errorRecording'));
    }
  }, [error, trans]);

  useEffect(() => {
    setCurrentValue(compliance.compliance_elm_value);
  }, [compliance.compliance_elm_value]);

  const booleanValue = stringToBoolean(currentValue);

  useEffect(() => {
    if (isMandatory && !booleanValue) setErrorMessage('Valeur obligatoire');
  }, [booleanValue, isMandatory, trans]);

  // expose for Cypress
  if (window?.['Cypress']) {
    window['Features_Edit_Control_Form_Compliance_BooleanCompliance'] = {
      setErrorMessage,
    };
  }

  return (
    <Grid item xs={6}>
      <BooleanComplianceStyled>
        <ComplianceLabel compliance={compliance} />
        <Checkbox
          id={`checkbox-boolean${compliance.compliance_id}`}
          style={{ display: 'block', paddingLeft: '0' }}
          disableRipple
          // @ts-ignore
          placeholder={compliance.compliance_elm_lib}
          checked={booleanValue ? booleanValue : false}
          onClick={() => toggleAndSaveValue()}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ComplianceFooter compliance={compliance} />
      </BooleanComplianceStyled>
    </Grid>
  );
};
