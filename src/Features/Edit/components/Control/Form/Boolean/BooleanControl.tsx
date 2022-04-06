import React, { SetStateAction, useCallback, useEffect, useState } from 'react';
import { BooleanControlStyled } from './BooleanControl.style';
import { Grid } from '@material-ui/core';
import { IApiControl, IChapter } from 'Features/Edit/types';
import { FormError } from 'Shared/components';
import { useApi, useRouter } from 'Services';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { updateFormState } from '../../../../../../Packages/Helpers/src/updateFormState';
import { Checkbox } from '@mui/material';
import { stringToBoolean } from '../../../../../../Packages/Helpers/src/stringToBoolean';
import { RejectControl } from '../RejectByPointControl/RejectControl';

interface IProps {
  control: IApiControl;
  fileId: string;
  formState: IChapter[];
  setFormState: React.Dispatch<SetStateAction<IChapter[]>>;
  context: 'edit' | 'validate';
}

export const BooleanControl: React.FC<IProps> = ({
  control,
  fileId,
  formState,
  setFormState,
  context,
}): React.ReactElement => {
  const { send, error } = useApi<void>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentValue, setCurrentValue] = useState(control.control_value);
  const [isRejected, setIsRejected] = useState(
    control.control_rejectable?.is_rejected
      ? control.control_rejectable.is_rejected
      : false,
  );

  const { currentRoute } = useRouter();
  useEffect(() => {
    setCurrentValue(control.control_value);
  }, [control.control_value]);

  useEffect(() => {
    updateFormState(formState, control.control_id, currentValue, setFormState);
  }, [formState, control.control_id, currentValue, setFormState]);

  const toogleAndSaveValue = useCallback(() => {
    const booleanValue = !stringToBoolean(currentValue);

    setErrorMessage(null);

    if (control.mandatory && currentValue !== null) {
      setErrorMessage('Valeur obligatoire');
    }

    setCurrentValue(booleanValue.toString());
    const q: Record<string, string> = {
      file_id: fileId,
      elm_id: control.control_id,
      control_family: control.control_family,
      elm_val: booleanValue.toString(),
    };

    send(currentRoute?.props?.apiSaveControlRouteName, {}, q);
  }, [
    currentValue,
    send,
    fileId,
    control.control_id,
    currentRoute,
    control.control_family,
    setCurrentValue,
    control.mandatory,
  ]);

  useEffect(() => {
    if (control.mandatory && control.editable && !currentValue) {
      setErrorMessage('Valeur obligatoire');
    }
    if (!control.mandatory) {
      setErrorMessage(null);
    }
  }, [control.mandatory, control.editable, currentValue]);

  useEffect(() => {
    if (!isRejected) {
      setIsRejected(false);
    }
  }, [isRejected]);

  useEffect(() => {
    if (error) {
      setErrorMessage("Une erreur s'est produite durant l'enregistrement");
    }
  }, [error]);

  const booleanValue = stringToBoolean(currentValue);

  return (
    <Grid item xs={6}>
      <BooleanControlStyled>
        <ControlLabel control={control} />
        <Checkbox
          id={`checkbox-boolean${control.control_id}`}
          style={{ display: 'block', paddingLeft: '0' }}
          disableRipple
          placeholder={
            control.editable
              ? control.control_title
              : currentValue
              ? currentValue
              : ''
          }
          disabled={!control.editable}
          checked={booleanValue ? booleanValue : false}
          onClick={() => toogleAndSaveValue()}
        />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
        <ControlFooter control={control} />
      </BooleanControlStyled>
      {control.useRejection && control.control_rejectable && (
        <RejectControl
          isRejected={isRejected}
          setIsRejected={setIsRejected}
          controlId={control.control_id}
          context={context}
          controlRejectable={control.useRejection}
        />
      )}
    </Grid>
  );
};
