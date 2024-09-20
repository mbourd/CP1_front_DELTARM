import React from 'react';
import { Grid } from '@mui/material';
import { IApiControl, IChapter } from 'Features/Edit/types';
import { FormError, Select } from 'Shared/components';
import { useApi, useRouter, useTrans } from 'Services';
import { SelectListControlStyled } from './SelectListControl.style';
import { ControlLabel } from '../ControlLabel';
import { ControlFooter } from '../ControlFooter';
import { Compliance } from '../Compliance/Compliance';
import { updateFormState } from 'Packages/Helpers/src/updateFormState';
import { RejectControl } from '../RejectByPointControl/RejectControl';
import { useAuth } from 'hooks';

interface IProps {
  fileId: string;
  multiple: boolean;
  control: IApiControl;
  formState: IChapter[];
  get_value_response?: any;
  context: 'edit' | 'validate';
  setFormState: React.Dispatch<React.SetStateAction<IChapter[]>>;
}

export const SelectListControl: React.FC<React.PropsWithChildren<IProps>> = ({
  fileId,
  control,
  context,
  multiple,
  formState,
  setFormState,
}): React.ReactElement => {
  /**
   * -----------------------------------------------------------
   * HOOKS
   * -----------------------------------------------------------
   */
  const [trans] = useTrans('Edit');
  const { currentRoute } = useRouter();
  const { send, error } = useApi<void>();
  const { currentUser } = useAuth();

  /**
   * -----------------------------------------------------------
   * STATES
   * -----------------------------------------------------------
   */
  const [currentValue, setCurrentValue] = React.useState(control.control_value);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const [choiceIsKo, setChoiceIsKo] = React.useState(
    Boolean(control?.compliance?.compliance_checkbox_resolved),
  );
  const [isResolved, setIsResolved] = React.useState(
    Boolean(control?.compliance?.compliance_resolved),
  );

  const [isRejected, setIsRejected] = React.useState(
    Boolean(control?.control_rejectable?.is_rejected),
  );

  const [apiRouteName, setApiRouteName] = React.useState<string>(
    currentRoute?.props?.apiSaveControlRouteName,
  );

  /**
   * -----------------------------------------------------------
   * VARIABLES
   * -----------------------------------------------------------
   */
  const selectedValue: Record<string, true> = {
    [currentValue || control.control_value || '']: true,
  };

  const isAuthoriseToCheck = React.useMemo(() => {
    const isSameProfile =
      currentUser?.user_profile_id ===
      control?.compliance?.compliance_profil_restrict;

    return !control?.compliance?.compliance_profil_restrict
      ? true
      : isSameProfile;
  }, [
    control?.compliance?.compliance_profil_restrict,
    currentUser?.user_profile_id,
  ]);

  const checkIsLocked = React.useMemo(() => {
    const isLock =
      control?.compliance?.compliance_locked_after_check === true &&
      control?.compliance?.compliance_resolved === true;

    return !isAuthoriseToCheck || isLock;
  }, [
    control?.compliance?.compliance_locked_after_check,
    control?.compliance?.compliance_resolved,
    isAuthoriseToCheck,
  ]);

  /**
   * -----------------------------------------------------------
   * FUNCTIONS
   * -----------------------------------------------------------
   */
  const saveValue = React.useCallback(
    (value: string) => {
      if (control.control_regex && !value.match(control.control_regex)) {
        setErrorMessage(control.control_regex_msg);
      } else {
        setErrorMessage(null);
        setCurrentValue(value);
        send(
          apiRouteName,
          {},
          {
            elm_val: value,
            file_id: fileId,
            elm_id: control.control_id,
            control_family: control.control_family,
          },
        );
      }
    },
    [
      send,
      fileId,
      apiRouteName,
      control.control_id,
      control.control_regex,
      control.control_family,
      control.control_regex_msg,
    ],
  );

  /**
   * -----------------------------------------------------------
   * CYCLE LIFE
   * -----------------------------------------------------------
   */
  React.useEffect(() => {
    if (control.mandatory && control.editable && !currentValue) {
      setErrorMessage(trans('mandatoryValue'));
    }
    if (!control.mandatory) {
      setErrorMessage(null);
    }
  }, [
    control.control_id,
    control.mandatory,
    control.editable,
    currentValue,
    trans,
  ]);

  React.useEffect(() => {
    setCurrentValue(control.control_value);
  }, [control.control_value]);

  React.useEffect(() => {
    updateFormState(formState, control.control_id, currentValue, setFormState);
  }, [formState, control.control_id, currentValue, setFormState]);

  React.useEffect(() => {
    if (error) {
      setErrorMessage(trans('errorReselect'));
    }
  }, [error, trans]);

  /**
   * -----------------------------------------------------------
   * TESTING
   * -----------------------------------------------------------
   */
  if (window?.['Cypress']) {
    window['Features_Edit_Control_SelectListControl'] = {
      setErrorMessage,
      setApiRouteName,
    };
  }

  /**
   * -----------------------------------------------------------
   * RENDER
   * -----------------------------------------------------------
   */
  return (
    <Grid item xs={6}>
      <SelectListControlStyled className={'control-container'}>
        <ControlLabel control={control} />
        <Select
          closeOnSelect
          error={!!error}
          multiple={multiple}
          choiceIsKo={choiceIsKo}
          disabled={!control.editable}
          setChoiceIsKo={setChoiceIsKo}
          selectedValues={selectedValue}
          data={control.answerChoices || {}}
          name={'select_list' + control.control_id}
          labelBdc={control.editable ? 'text' : 'disabled'}
          colour_data={control.control_answer_choices || {}}
          labelColor={control.editable ? 'text' : 'disabled'}
          onChange={(selectedValues) => {
            const value =
              Object.keys(selectedValues).length >= 2
                ? Object.keys(selectedValues).join(';')
                : Object.keys(selectedValues)[0];
            const val = value ? value : '';
            saveValue('' + val);
          }}
        >
          {trans('selectValue')}
        </Select>
        <ControlFooter control={control} />
        {errorMessage ? <FormError>{errorMessage}</FormError> : null}
      </SelectListControlStyled>
      {control.useCompliance && control.compliance && (
        <Compliance
          fileId={fileId}
          checked={isResolved}
          choiceIsKo={choiceIsKo}
          isDisabled={checkIsLocked}
          setIsResolved={setIsResolved}
          controlId={control.control_id}
          compliance={control.useCompliance}
          label={control.compliance.compliance_lib}
          profilRestrictCode={control.compliance.compliance_profil_restrict}
        />
      )}
      {control.useRejection && control.control_rejectable && (
        <RejectControl
          context={context}
          isRejected={isRejected}
          setIsRejected={setIsRejected}
          controlId={control.control_id}
          controlRejectable={control.useRejection}
        />
      )}
    </Grid>
  );
};
