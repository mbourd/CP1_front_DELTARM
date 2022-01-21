import React, { SetStateAction, useCallback, useEffect, useState } from 'react';
import { SliderControlStyled } from './SliderControl.style';
import { Grid } from '@material-ui/core';
import { IApiControl } from 'Features/Edit/types';
import { FormError } from 'Shared/components';
import { useApi, useRouter } from 'Services';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { updateFormState } from '../../../../../../Packages/Helpers/src/updateFormState';
import { Slider } from '@mui/material';

interface IProps {
  control: IApiControl;
  fileId: string;
  formState: IApiControl[];
  setFormState: React.Dispatch<SetStateAction<IApiControl[]>>;
}

export const SliderControl: React.FC<IProps> = ({
  control,
  fileId,
  formState,
  setFormState,
}): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentValue, setCurrentValue] = useState(control.control_value);
  const { currentRoute } = useRouter();

  useEffect(() => {
    updateFormState(formState, control.control_id, currentValue, setFormState);
  }, [formState, control.control_id, currentValue, setFormState]);

  const handleChange = useCallback((value: string) => {
    setCurrentValue(value);
  }, []);

  const saveValue = useCallback(() => {
    if (!currentValue && control.control_mandatory) {
      setErrorMessage('Valeur obligatoire');

      return;
    }

    if (!currentValue) {
      return;
    }

    const q: Record<string, string> = {
      file_id: fileId,
      elm_id: control.control_id,
      control_family: control.control_family,
      elm_val: currentValue,
    };

    send(currentRoute?.props?.apiSaveControlRouteName, {}, q);
  }, [
    send,
    fileId,
    control.control_id,
    currentRoute,
    control.control_family,
    currentValue,
    control.control_mandatory,
  ]);

  useEffect(() => {
    if (
      control.control_mandatory &&
      control.control_editable &&
      !currentValue
    ) {
      setErrorMessage('Valeur obligatoire');
    }
  }, [control.control_mandatory, control.control_editable, currentValue]);

  useEffect(() => {
    if (error) {
      setErrorMessage("Une erreur s'est produite durant l'enregistrement");
    }
  }, [error]);

  return (
    <Grid item xs={6}>
      <SliderControlStyled>
        <ControlLabel control={control} />
        <Slider
          key={`slider-${control.control_id}`}
          value={currentValue ? parseInt(currentValue) : control.slider?.min}
          step={control.slider?.step}
          marks={control.slider?.marks}
          min={control.slider?.min}
          max={control.slider?.max}
          disabled={control.slider?.disabled}
          valueLabelDisplay="auto"
          onChangeCommitted={saveValue}
          onChange={(_, newValue) => handleChange(newValue.toString())}
          disableSwap={control.slider?.disable_swap}
          style={{
            color: control.slider?.color,
          }}
        />
        <ControlFooter control={control} />
      </SliderControlStyled>
      {errorMessage ? <FormError>{errorMessage}</FormError> : null}
    </Grid>
  );
};
