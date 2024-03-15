import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
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
import { DatePickerModalDynamic } from './DatePickerModalDynamic/DatePickerModalDynamic';
import { security } from '../../../Services';
import { UploadFileModalDynamic } from './UploadFileModalDynamic/UploadFileModalDynamic';
import { CircularMetric } from 'Features/DashboardDynamic/components/Metrics/CircularMetric/CircularMetric';
import { InputBase } from '../../../Packages/Design/components/Input/InputBase/InputBase';

export const ModalDynamic: FC<React.PropsWithChildren<IDataModalProps>> = ({
  open,
  setIsModalOpen,
  data,
}): React.ReactElement => {
  // const [trans] = useTrans('Manage');
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const defaultQueries = useMemo<Record<string, string>>(() => {
    return {};
  }, []);
  const user_language: any = security.decodeJwtToken(jwt ? jwt : '');
  const canClose = useMemo(
    () => data?.target !== 'fixed_modal',
    [data?.target],
  );
  const [isDisabledModalBtns, setIsDisabledModalBtns] = useState(false);
  const { actionButton } = useActionButton({
    jwt,
    setIsModalOpen,
    setErrorMessage,
    setIsDisabledModalBtns,
  });
  // const [callbackResponseConfirmation, setCallbackResponseConfirmation] =
  //   useState((...p) => undefined);

  // useEffect(() => {
  //   if (data?.callbackResponseConfirmation)
  //     setCallbackResponseConfirmation(data.callbackResponseConfirmation);
  // }, [data?.callbackResponseConfirmation]);

  const footer = (
    <ModalDynamicFooterStyled>
      <Grid container spacing={0.5}>
        <Grid item xs={12}>
          <FormError className={'_Message'}>
            {errorMessage ? errorMessage : ' '}
          </FormError>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          {data?.btn?.map((btn, index) => {
            const callback: any = data?.callbackResponseConfirmation;

            return (
              <Button
                key={index}
                disabled={isDisabledModalBtns}
                onClick={() => {
                  handleCLickActionsBeforeSendToActionButtons(
                    btn.action,
                    data?.__extraData,
                    callback,
                  );
                }}
                style={{ backgroundColor: btn.bg_color }}
              >
                {data?.target === 'fixed_modal' &&
                isDisabledModalBtns &&
                (btn.action.method === 'POST' ||
                  btn.action.method === 'GET') ? (
                  <CircularMetric
                    variant="indeterminate"
                    value={0}
                    hint={''}
                    style={{ color: 'white' }}
                    size={23}
                  />
                ) : (
                  btn.btn_lib
                )}
              </Button>
            );
          })}
        </Grid>
      </Grid>
    </ModalDynamicFooterStyled>
  );

  const { register, getValues, setValue, control } = useForm({
    defaultValues: defaultQueries,
  });

  const handleChangeValue = useCallback(
    (id: any, value: any) => {
      setValue(id, value);
    },
    [setValue],
  );

  const handleCLickActionsBeforeSendToActionButtons = useCallback(
    (
      action: any,
      extraData?: Record<any, any>,
      callbackResponseConfirmation?: () => undefined,
    ) => {
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
        actionButton(modifiedAction, extraData, callbackResponseConfirmation);

        return;
      }

      actionButton(action, extraData, callbackResponseConfirmation);
    },
    [getValues, actionButton, data?.content, user_language?.lang],
  );

  return (
    <Modal
      open={open}
      onClose={() => (canClose ? setIsModalOpen(false) : null)}
      footer={footer}
      maxHeight={'720px'}
      height={'66%'}
      closable={canClose}
    >
      <Heading>{data?.title}</Heading>
      <HeadingTwo>{data?.subtitle}</HeadingTwo>
      {data?.img && (
        <Container
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '130px',
            marginBottom: '20px',
            marginTop: '10px',
          }}
        >
          <img src={data.img} alt={'modal-image'} />
        </Container>
      )}
      <Grid
        container
        spacing={1}
        {...(data?.target === 'fixed_modal'
          ? {
              style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            }
          : {})}
      >
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
                      {...(data?.target === 'fixed_modal'
                        ? { style: { textAlign: 'center' } }
                        : {})}
                    ></p>
                  </Grid>
                );
              case 'input': {
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
              }
              case 'select': {
                const selectedValue: Record<string, true> = {
                  [(element?.value as string) ?? '']: true,
                };

                const keySelectField: Record<string, string> = {
                  [element.attribute.id]: (element?.value as string) ?? '',
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
              }
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
              case 'date_picker': {
                const defaultDate = `${new Date().getFullYear()}-${(
                  '0' +
                  (new Date().getMonth() + 1)
                ).slice(-2)}-${('0' + new Date().getDate()).slice(-2)}`;
                Object.assign(defaultQueries, {
                  [element.attribute.id]:
                    (element?.value as string) ?? defaultDate,
                });

                return (
                  <Grid key={index} item xs={8}>
                    <Controller
                      defaultValue={!element?.value}
                      control={control}
                      name={element.attribute.id}
                      rules={{ required: element?.attribute?.mandatory }}
                      render={() => (
                        <DatePickerModalDynamic
                          defaultDate={defaultDate}
                          element={element}
                          index={index}
                          handleChangeValue={handleChangeValue}
                          register={register}
                        />
                      )}
                    />
                  </Grid>
                );
              }
              case 'upload': {
                const keyField: Record<string, string> = {
                  [element.attribute.id]: element?.value
                    ? (element.value as string)
                    : '',
                };
                Object.assign(defaultQueries, keyField);

                return (
                  <Grid item xs={6} md={6}>
                    <Controller
                      defaultValue={!element?.value}
                      control={control}
                      name={element.attribute.id}
                      rules={{ required: element?.attribute?.mandatory }}
                      render={() => (
                        <UploadFileModalDynamic
                          element={{ ...element, editable: true }}
                          index={index}
                          handleChangeValue={handleChangeValue}
                          register={register}
                        />
                      )}
                    />
                  </Grid>
                );
              }
              case 'json_array': {
                const format = element.format;
                const items = (element as IElementModal).items;
                let contentStr = '';

                items.forEach((item, i) => {
                  contentStr +=
                    format?.replace(/{([^}]*)}/g, (match, key) => {
                      return item?.[key] || '';
                    }) + (i < items.length - 1 ? '\r\n\r\n' : '');
                });

                return (
                  <Grid item xs={12} md={12} style={{ marginTop: 10 }}>
                    <InputBase
                      disabled={false}
                      multiline
                      multilineRows={20}
                      fullWidth
                      selectAllOnClick
                      defaultValue={contentStr}
                      onChange={(e) => {
                        e.currentTarget.value = contentStr;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.value = contentStr;
                      }}
                      onKeyPress={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </Grid>
                );
              }
              default:
                return <></>;
            }
          },
        )}
      </Grid>
    </Modal>
  );
};
