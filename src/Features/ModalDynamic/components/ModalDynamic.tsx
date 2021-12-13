import React, { FC, useCallback, useState } from 'react';
import {
  Button,
  FormError,
  Heading,
  HeadingTwo,
  InputBase,
  ISelectData,
  Modal,
  Select,
} from 'Shared/components';
import { ModalDynamicFooterStyled } from './ModalDynamic.style';
import { IDataModalProps } from './types';
import { useActionButton } from '../../../Packages/Helpers/src/useActionButton';
import { useSecurity } from '../../../Packages/Security';
import { Grid } from '@mui/material';
import { IActionButton } from '../../DashboardDynamic/components/types';
import { useForm, Controller } from 'react-hook-form';

export const ModalDynamic: FC<IDataModalProps> = ({
  open,
  setIsModalOpen,
  data,
}): React.ReactElement => {
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { actionButton } = useActionButton(jwt, setIsModalOpen);
  const { register, getValues, setValue, control } = useForm();

  const handleChangeValue = useCallback(
    (e) => {
      const name = e.currentTarget.id;
      const value = e.currentTarget.value;
      setValue(name, value);
    },
    [setValue],
  );

  const handleCLickActionsBeforeSendToActionButtons = useCallback(
    (action: IActionButton) => {
      if (action.params) {
        const keys = Object.keys(action.params);
        const params = getValues(keys);
        const modifiedAction: IActionButton = {
          ...action,
          params,
        };
        actionButton(modifiedAction);

        return;
      }

      actionButton(action);

      // mapper les valeurs qui ont une valeur par défaut
      // champs mandatory
      // don't forget the values of select list
    },
    [getValues, actionButton],
  );

  const footer = (
    <ModalDynamicFooterStyled>
      {data?.btn?.map((btn, index) => {
        return (
          <Button
            key={index}
            onClick={() =>
              handleCLickActionsBeforeSendToActionButtons(btn.action)
            }
            style={{ backgroundColor: btn.bg_color }}
          >
            {btn.btn_lib}
          </Button>
        );
      })}
    </ModalDynamicFooterStyled>
  );

  return (
    <Modal
      open={open}
      onClose={() => setIsModalOpen(false)}
      footer={footer}
      maxHeight={'610px'}
    >
      <Heading>{data?.title}</Heading>
      <HeadingTwo>{data?.subtitle}</HeadingTwo>
      <Grid container spacing={1}>
        {data?.content?.map((element, index) => {
          switch (element.element) {
            case 'p':
              return (
                <Grid key={index} item xs={12}>
                  <p>{element.value}</p>
                </Grid>
              );
            case 'input':
              return (
                <Grid key={index} item xs={8}>
                  <Controller
                    defaultValue={element?.value}
                    control={control}
                    name={element.attribute.id}
                    render={() => (
                      <InputBase
                        key={index}
                        type={element.attribute?.type}
                        placeholder={element.attribute?.placeholder}
                        id={element.attribute?.id}
                        name={element.attribute?.id}
                        multiline={element.attribute?.multiline}
                        multilineRows={
                          element.attribute?.multilineRows
                            ? element.attribute.multilineRows
                            : undefined
                        }
                        required={element.attribute?.mandatory}
                        defaultValue={element?.value || undefined}
                        onChange={(e) => handleChangeValue(e)}
                        {...register(`${element.attribute?.id}`, {
                          required: element.attribute?.mandatory,
                        })}
                      />
                    )}
                  />
                  {errorMessage ? <FormError>{errorMessage}</FormError> : null}
                </Grid>
              );
            case 'select':
              const selectedValue: Record<string, true> = {
                [element?.value || '']: true,
              };

              const options: Record<string, ISelectData> = {};
              element.attribute?.option?.map((option) => {
                options[option.id] = {
                  id: '' + option.id,
                  label: option.label,
                  value: option.value,
                };

                return option;
              });

              return (
                <Grid key={index} item xs={8}>
                  <Select
                    closeOnSelect
                    name={'selectList' + element.attribute?.id}
                    data={options || {}}
                    selectedValues={selectedValue}
                    onChange={(selectedValues) => {
                      const value =
                        Object.keys(selectedValues).length >= 2
                          ? Object.keys(selectedValues).join(';')
                          : Object.keys(selectedValues)[0];
                      const val = value ? value : '';
                    }}
                    {...register(`${element.attribute?.id}`, {
                      required: element.attribute?.mandatory,
                    })}
                  >
                    {'Sélectionner une valeur'}
                  </Select>
                </Grid>
              );
          }
        })}
      </Grid>
    </Modal>
  );
};
