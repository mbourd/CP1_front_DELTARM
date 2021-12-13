import React, { FC, useCallback, useRef } from 'react';
import {
  Button,
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

export const ModalDynamic: FC<IDataModalProps> = ({
  open,
  setIsModalOpen,
  data,
}): React.ReactElement => {
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const { actionButton } = useActionButton(jwt, setIsModalOpen);
  const buttons = useRef<any>(data?.btn);

  const handleChangeValue = useCallback((e) => {
    console.log(e.currentTarget.id); // key
    console.log(e.currentTarget.value); // value
    // on veut mapper ça dans les actions
  }, []);

  const handleCLickActionsBeforeSendToActionButtons = useCallback(() => {
    // taitement des données avec réconciliations des parametres
    // envoie au trigger
  }, []);

  const footer = (
    <ModalDynamicFooterStyled>
      {data?.btn?.map((btn, index) => {
        return (
          <Button
            key={index}
            onClick={() => actionButton(btn.action)}
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
                  <InputBase
                    key={index}
                    type={element.attribute?.type}
                    placeholder={element.attribute?.placeholder}
                    id={element.attribute?.id}
                    multiline={element.attribute?.multiline}
                    multilineRows={
                      element.attribute?.multilineRows
                        ? element.attribute.multilineRows
                        : undefined
                    }
                    required={element.attribute?.mandatory}
                    value={element?.value || undefined}
                    onChange={(e) => handleChangeValue(e)}
                  />
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
