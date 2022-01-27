import React, { SetStateAction, useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { IApiControl } from 'Features/Edit/types';
import { FormError, Select } from 'Shared/components';
import { useApi, useRouter } from 'Services';
import { SelectListControlStyled } from './SelectListControl.style';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { Compliance } from '../Compliance/Compliance';
import { updateFormState } from '../../../../../../Packages/Helpers/src/updateFormState';

interface IProps {
  control: IApiControl;
  fileId: string;
  formState: IApiControl[];
  multiple: boolean;
  setFormState: React.Dispatch<SetStateAction<IApiControl[]>>;
}

export const SelectListControl: React.FC<IProps> = ({
  control,
  fileId,
  multiple,
  formState,
  setFormState,
}): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentValue, setCurrentValue] = useState(control.control_value);
  const { currentRoute } = useRouter();
  const [choiceIsKo, setChoiceIsKo] = useState(
    control.compliance?.compliance_checkbox_resolved
      ? control.compliance.compliance_checkbox_resolved
      : false,
  );
  const [isResolved, setIsResolved] = useState(
    control.compliance?.compliance_resolved
      ? control.compliance.compliance_resolved
      : false,
  );

  const selectedValue: Record<string, true> = {
    [currentValue || control.control_value || '']: true,
  };

  useEffect(() => {
    setCurrentValue(control.control_value);
  }, [control.control_value]);

  useEffect(() => {
    updateFormState(formState, control.control_id, currentValue, setFormState);
  }, [formState, control.control_id, currentValue, setFormState]);

  useEffect(() => {
    if (!choiceIsKo) {
      setIsResolved(false);
    }
  }, [choiceIsKo]);

  const saveValue = useCallback(
    (value: string) => {
      if (control.control_regex && !value.match(control.control_regex)) {
        setErrorMessage(control.control_regex_msg);

        return;
      }
      setErrorMessage(null);
      setCurrentValue(value);
      send(
        currentRoute?.props?.apiSaveControlRouteName,
        {},
        {
          file_id: fileId,
          elm_id: control.control_id,
          elm_val: value,
          control_family: control.control_family,
        },
      );
    },
    [
      send,
      fileId,
      control.control_id,
      control.control_family,
      currentRoute,
      control.control_regex,
      control.control_regex_msg,
    ],
  );

  useEffect(() => {
    if (control.mandatory && control.control_editable && !currentValue) {
      setErrorMessage('Valeur obligatoire');
    }
    if (!control.mandatory) {
      setErrorMessage(null);
    }
  }, [
    control.control_id,
    control.mandatory,
    currentValue,
    control.control_editable,
  ]);

  useEffect(() => {
    if (error) {
      setErrorMessage(
        "Une erreur s'est produite, veuillez re-sélectionner une valeur",
      );
    }
  }, [error]);

  return (
    <Grid item xs={6}>
      <SelectListControlStyled className={'control-container'}>
        <ControlLabel control={control} />
        <Select
          closeOnSelect
          name={'selectList' + control.control_id}
          data={control.answerChoices || {}}
          selectedValues={selectedValue}
          labelColor={control.editable ? 'text' : 'disabled'}
          labelBdc={control.editable ? 'text' : 'disabled'}
          multiple={multiple}
          disabled={!control.editable}
          onChange={(selectedValues) => {
            const value =
              Object.keys(selectedValues).length >= 2
                ? Object.keys(selectedValues).join(';')
                : Object.keys(selectedValues)[0];
            const val = value ? value : '';
            saveValue('' + val);
          }}
          error={!!error}
          choiceIsKo={choiceIsKo}
          setChoiceIsKo={setChoiceIsKo}
        >
          {'Sélectionner une valeur'}
        </Select>
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ControlFooter control={control} />
      </SelectListControlStyled>
      {control.useCompliance && control.compliance && (
        <Compliance
          label={control.compliance.compliance_lib}
          checked={isResolved}
          setIsResolved={setIsResolved}
          controlId={control.control_id}
          fileId={fileId}
          choiceIsKo={choiceIsKo}
          compliance={control.useCompliance}
        />
      )}
    </Grid>
  );
};
