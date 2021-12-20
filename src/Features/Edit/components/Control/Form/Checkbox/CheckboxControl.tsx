import React, { SetStateAction, useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { IControl } from 'Features/Edit/types';
import { FormError } from 'Shared/components';
import { useApi, useRouter } from 'Services';
import { CheckboxControlStyled } from './CheckboxControl.style';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { Compliance } from '../Compliance/Compliance';
import { CheckboxWrapper } from '../../../../../../Packages/Design/components/Checkbox/CheckboxWrapper';
import { updateFormState } from '../../../../../../Packages/Helpers/src/updateFormState';

interface IProps {
  control: IControl;
  fileId: string;
  multiple: boolean;
  formState: IControl[];
  setFormState: React.Dispatch<SetStateAction<IControl[]>>;
}

export const CheckboxControl: React.FC<IProps> = ({
  control,
  fileId,
  multiple,
  formState,
  setFormState,
}): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentValue, setCurrentValue] = useState(control.value);
  const { currentRoute } = useRouter();
  const [choiceIsKo, setChoiceIsKo] = useState(
    control.compliance?.complianceCheckboxResolved
      ? control.compliance.complianceCheckboxResolved
      : false,
  );
  const [isResolved, setIsResolved] = useState(
    control.compliance?.resolved ? control.compliance.resolved : false,
  );
  const selectedValue: Record<string, true> = {
    [currentValue || control.value || '']: true,
  };

  useEffect(() => {
    updateFormState(formState, control.id, currentValue, setFormState);
  }, [formState, control.id, currentValue, setFormState]);

  useEffect(() => {
    if (!choiceIsKo) {
      setIsResolved(false);
    }
  }, [choiceIsKo]);

  const saveValue = useCallback(
    (value: string) => {
      if (control.regex && !value.match(control.regex)) {
        setErrorMessage("Le format attendu n'est pas valide");

        return;
      }
      setErrorMessage(null);
      setCurrentValue(value);
      send(
        currentRoute?.props?.apiSaveControlRouteName,
        {},
        {
          file_id: fileId,
          elm_id: control.id,
          elm_val: value,
          control_family: control.family,
        },
      );
    },
    [send, fileId, control.id, control.family, currentRoute, control.regex],
  );

  useEffect(() => {
    if (control.mandatory && control.editable && !currentValue) {
      setErrorMessage('Valeur obligatoire');
    }
  }, [control.id, control.mandatory, currentValue, control.editable]);

  useEffect(() => {
    if (error) {
      setErrorMessage(
        "Une erreur s'est produite, veuillez re-sélectionner une valeur",
      );
    }
  }, [error]);

  return (
    <Grid item xs={6}>
      <CheckboxControlStyled className={'control-container'}>
        <ControlLabel control={control} />
        <CheckboxWrapper
          name={'checkbox' + control.id}
          data={control.answerChoices || {}}
          selectedValues={selectedValue}
          multiple={multiple}
          onChange={(selectedValues) => {
            const value =
              Object.keys(selectedValues).length >= 2
                ? Object.keys(selectedValues).join(';')
                : Object.keys(selectedValues)[0];
            const val = value ? value : '';
            saveValue('' + val);
          }}
          choiceIsKo={choiceIsKo}
          setChoiceIsKo={setChoiceIsKo}
          disabled={!control.editable}
          error={!!error}
        />
        {errorMessage ? (
          <FormError style={{ display: 'block' }}>{errorMessage}</FormError>
        ) : null}
        <ControlFooter control={control} />
      </CheckboxControlStyled>
      {control.compliance && (
        <Compliance
          label={control.compliance.complianceLib}
          checked={isResolved}
          setIsResolved={setIsResolved}
          controlId={control.id}
          fileId={fileId}
          choiceIsKo={choiceIsKo}
          control={control}
          compliance={control.compliance}
        />
      )}
    </Grid>
  );
};
