import React, { FC, useCallback, useMemo, useState } from 'react';
import {
  Button,
  FormError,
  Heading,
  HeadingTwo,
  ISelectData,
  Modal,
} from 'Shared/components';
import { ModalDynamicFooterStyled } from './ModalDynamic.style';
import {
  ElementTableModalValueType,
  IDataModalProps,
  IElementModal,
  IElementPModal,
  IElementTableModal,
} from './types';
import { useActionButton } from '../../../Packages/Helpers/src/useActionButton';
import { useSecurity } from '../../../Packages/Security';
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableRow,
} from '@mui/material';
import { IActionButton } from '../../DashboardDynamic/components/types';
import { Controller, useForm } from 'react-hook-form';
import { StyledTableCell } from '../../DashboardDynamic/components/Card/Card.style';
import { InputModalDynamic } from './InputModalDynamic/InputModalDynamic';
import { SelectModalDynamic } from './SelectModalDynamic/SelectModalDynamic';
import { useTrans, security } from '../../../Services';

export const ModalDynamic: FC<IDataModalProps> = ({
  open,
  setIsModalOpen,
  data,
}): React.ReactElement => {
  const [trans] = useTrans('Manage');
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { actionButton } = useActionButton({
    jwt,
    setIsModalOpen,
    setErrorMessage,
  });
  const defaultQueries = useMemo<Record<string, string>>(() => {
    return {};
  }, []);
  const user_language: any = security.decodeJwtToken(jwt ? jwt : '');

  const footer = (
    <ModalDynamicFooterStyled>
      {errorMessage ? (
        <FormError className={'_Message'}>{errorMessage}</FormError>
      ) : null}
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

  const { register, getValues, setValue, control } = useForm({
    defaultValues: defaultQueries,
  });

  const handleChangeValue = useCallback(
    (id, value) => {
      setValue(id, value);
    },
    [setValue],
  );

  const handleCLickActionsBeforeSendToActionButtons = useCallback(
    (action: any) => {
      if (action.params) {
        const keys = Object.keys(action.params);
        const params = { ...getValues(keys) };
        let errorMandatory = false;

        data?.content.map((value) => {
          keys.map((key) => {
            if (key === value?.attribute?.id) {
              if (value.attribute.mandatory && getValues(key) === '') {
                errorMandatory = true;
              }
            }
          });
        });

        if (errorMandatory) {
          setErrorMessage(
            user_language?.lang === 'en'
              ? 'Mandatory value'
              : 'Valeur obligatoire',
          );

          return;
        }

        if (!errorMandatory) {
          setErrorMessage('');
        }

        const modifiedAction: IActionButton = {
          ...action,
          params,
        };
        actionButton(modifiedAction);

        return;
      }

      actionButton(action);
    },
    [getValues, actionButton, data?.content, user_language?.lang],
  );

  return (
    <Modal
      open={open}
      onClose={() => setIsModalOpen(false)}
      footer={footer}
      maxHeight={'720px'}
      height={'50%'}
    >
      <Heading>{data?.title}</Heading>
      <HeadingTwo>{data?.subtitle}</HeadingTwo>
      {data?.img && (
        <Container
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '130px',
            marginBottom: '15px',
          }}
        >
          <img src={data.img} alt={'modal-image'} />
        </Container>
      )}
      <Grid container spacing={1}>
        {data?.content?.map(
          (
            element: IElementModal | IElementPModal | IElementTableModal,
            index: number,
          ) => {
            switch (element.element) {
              case 'p':
                return (
                  <Grid key={index} item xs={12}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: element.value as string,
                      }}
                    ></p>
                  </Grid>
                );
              case 'input':
                // have the defaults value
                const keyField: Record<string, string> = {
                  [element.attribute.id]: element?.value
                    ? (element.value as string)
                    : '',
                };
                Object.assign(defaultQueries, keyField);

                return (
                  <Grid key={index} item xs={8}>
                    <Controller
                      defaultValue={element?.value}
                      control={control}
                      name={element.attribute.id}
                      rules={{ required: element.attribute.mandatory }}
                      render={() => (
                        <InputModalDynamic
                          element={element}
                          index={index}
                          handleChangeValue={handleChangeValue}
                          register={register}
                        />
                      )}
                    />
                  </Grid>
                );
              case 'select':
                const selectedValue: Record<string, true> = {
                  [(element.value as string) || '']: true,
                };

                const keySelectField: Record<string, string> = {
                  [element.attribute.id]: element?.value
                    ? (element.value as string)
                    : '',
                };
                Object.assign(defaultQueries, keySelectField);

                const options: Record<string, ISelectData> = {};
                element.attribute?.option?.map((option: any) => {
                  options[option.id] = {
                    id: '' + option.id,
                    label: option.label,
                    value: option.value,
                  };

                  return option;
                });

                return (
                  <Grid key={index} item xs={8}>
                    <Controller
                      defaultValue={element?.value}
                      control={control}
                      name={element.attribute.id}
                      rules={{ required: element.attribute.mandatory }}
                      render={() => (
                        <SelectModalDynamic
                          element={element}
                          options={options}
                          selectedValue={selectedValue}
                          handleChangeValue={handleChangeValue}
                          register={register}
                        />
                      )}
                    />
                  </Grid>
                );
              case 'table':
                return (
                  <Grid key={index} item xs={12}>
                    <TableContainer>
                      <Table>
                        <TableBody>
                          {(
                            element.value as ElementTableModalValueType
                          )?.row.value.map((row, index: number) => (
                            <TableRow key={index}>
                              {row.cell.value.map((cell, index: number) => {
                                switch (cell.type) {
                                  case 'btn':
                                    return (
                                      <StyledTableCell scope="row" key={index}>
                                        <Button
                                          key={index}
                                          onClick={() =>
                                            actionButton(cell.action)
                                          }
                                          style={{
                                            backgroundColor: cell.bg_color
                                              ? cell.bg_color
                                              : '#FFCD00',
                                            color: cell.font_color
                                              ? cell.font_color
                                              : '#FFFFFF',
                                          }}
                                        >
                                          {cell.value}
                                        </Button>
                                      </StyledTableCell>
                                    );
                                  case 'text':
                                    return (
                                      <StyledTableCell
                                        style={{
                                          cursor: cell.action
                                            ? 'pointer'
                                            : 'initial',
                                        }}
                                        scope="row"
                                        key={index}
                                        onClick={() =>
                                          actionButton(cell.action)
                                        }
                                      >
                                        {cell.value}
                                      </StyledTableCell>
                                    );
                                }
                              })}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                );
            }
          },
        )}
      </Grid>
    </Modal>
  );
};
