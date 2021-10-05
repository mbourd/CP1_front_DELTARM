import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { IControl } from 'Features/Edit/types';
import { FormError, Select } from 'Shared/components';
import { storage, useApi, useRouter } from 'Services';
import { SelectListControlStyled } from './SelectListControl.style';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { Compliance } from '../Compliance/Compliance';

interface IProps {
  control: IControl;
  fileId: string;
  multiple: boolean;
}

export const SelectListControl: React.FC<IProps> = ({ control, fileId, multiple }): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { currentRoute } = useRouter();
  const [choiceIsKo, setChoiceIsKo] = useState(
    control.compliance?.complianceCheckboxResolved ? control.compliance.complianceCheckboxResolved : false,
  );
  const [isResolved, setIsResolved] = useState(control.compliance?.resolved ? control.compliance.resolved : false);

  const value = storage.getData<string>('edit.control.' + control.id + '.value');
  const selectedValue: Record<string, true> = { [value || control.value || '']: true };

  const saveValue = useCallback(
    (value: string) => {
      if (control.regex && !value.match(control.regex)) {
        setErrorMessage(control.regexMsg);

        return;
      }
      setErrorMessage(null);
      storage.setData('edit.control.' + control.id + '.value', value);
      send(
        currentRoute?.props?.apiSaveControlRouteName,
        {},
        { file_id: fileId, elm_id: control.id, elm_val: value, control_family: control.family },
      );
    },
    [send, fileId, control.id, control.family, currentRoute, control.regex, control.regexMsg],
  );

  useEffect(() => {
    const val = storage.getData<string>('edit.control.' + control.id + '.value');

    if (control.mandatory && control.editable && !val && !control.value) {
      setErrorMessage('Valeur obligatoire');
    }
  }, [control.id, control.mandatory, control.value, control.editable]);

  useEffect(() => {
    if (error) {
      setErrorMessage("Une erreur s'est produite, veuillez re-sélectionner une valeur");
    }
  }, [error]);

  return (
    <Grid item xs={6}>
      <SelectListControlStyled className={'control-container'}>
        <ControlLabel control={control} />
        <Select
          closeOnSelect
          name={'selectList' + control.id}
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
            saveValue('' + value);
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
