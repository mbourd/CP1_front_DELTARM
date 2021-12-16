import React, { FC, useCallback, useMemo } from 'react';
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
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableRow,
} from '@mui/material';
import { IActionButton } from '../../DashboardDynamic/components/types';
import { useForm, Controller } from 'react-hook-form';
import { StyledTableCell } from '../../DashboardDynamic/components/Card/Card.style';

export const ModalDynamic: FC<IDataModalProps> = ({
  open,
  setIsModalOpen,
  data,
}): React.ReactElement => {
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const { actionButton } = useActionButton(jwt, setIsModalOpen);
  const queries = useMemo<Record<string, string>>(() => {
    return {};
  }, []);

  const footer = (
    <ModalDynamicFooterStyled>
      {data?.btn?.map((btn, index) => {
        if (btn.action.params) {
          Object.assign(queries, btn.action.params);
        }

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
    defaultValues: queries,
  });

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
        // The default values are for the moment unchanging
        const keys = Object.keys(action.params);
        const params = { ...getValues(keys), ...queries };
        const modifiedAction: IActionButton = {
          ...action,
          params,
        };
        actionButton(modifiedAction);

        return;
      }

      actionButton(action);
    },
    [getValues, actionButton, queries],
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
      {data?.img && (
        <Container style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={data.img} alt={'modal-image'} />
        </Container>
      )}
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
                        autofocus
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
            case 'table':
              return (
                <Grid key={index} item xs={12}>
                  <TableContainer style={{ maxHeight: '300px' }}>
                    <Table>
                      <TableBody>
                        {element.value.row.value.map((row, index) => (
                          <TableRow key={index}>
                            {row.cell.value.map((cell, index) => {
                              switch (cell.type) {
                                case 'btn':
                                  return (
                                    <StyledTableCell scope="row" key={index}>
                                      <Button
                                        key={index}
                                        onClick={() =>
                                          actionButton(cell.action)
                                        }
                                      >
                                        {cell.value}
                                      </Button>
                                    </StyledTableCell>
                                  );
                                case 'text':
                                  return (
                                    <StyledTableCell scope="row" key={index}>
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
        })}
      </Grid>
    </Modal>
  );
};
