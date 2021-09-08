import { apiRouter, SwitchCallState, useApi, router } from '../../../../../Services';
import { IKSIOPManualInput } from '../../../apiRoutes';
import { SearchModalBPIContentStyled, SearchModalFooterStyled } from './SearchModal.style';
import {
  BadRequest,
  Button,
  Error500,
  FormLabel,
  FormText,
  Modal,
  Select,
  StairsLoader,
} from '../../../../../Packages/Design/components';
import { Grid, Input } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface IProps {
  open: boolean;
  onClose: () => void;
  dataManualInput: IKSIOPManualInput | null;
}

export const CreateModal: React.FC<IProps> = ({ onClose, open, dataManualInput }): React.ReactElement | null => {
  const { handleSubmit, control } = useForm();
  const { error, callState, send, data } = useApi<IKSIOPManualInput | null>();
  const [missingFields, setStateMissingFields] = useState(true);

  // Have the current filled queries in object
  let queries: any;
  dataManualInput?.fields.map((field: any) => {
    if (field.value) {
      queries = {
        ...queries,
        [field.key]: field.value,
      };
    } else {
      queries = {
        ...queries,
        [field.key]: '',
      };
    }
  });
  const verifyValidForm = useCallback(() => {
    let errors = 0;
    Object.keys(queries).forEach((key: any) => {
      if (queries[key] === '') {
        errors += 1;
      }
    });
    if (errors === 0) {
      setStateMissingFields(false);
    }
  }, [queries]);

  const createFile = useCallback(() => {
    apiRouter.changeRouteUrl(
      'searchFileKSIOP',
      dataManualInput?.buttons[1].action ? dataManualInput?.buttons[1].action : '',
    );
    const file_num = dataManualInput?.manualFile.file_num;
    const file_avenant = dataManualInput?.manualFile.file_avenant;
    const typedossier = dataManualInput?.manualFile.typedossier;
    queries = {
      ...queries,
      file_num,
      file_avenant,
      typedossier,
    };
    send('createFile', {}, queries);
  }, [send, dataManualInput]);

  const handleLeaveField = useCallback((event: any) => {
    queries = {
      ...queries,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    // verify before unlock send buttons, react hook form ?
    verifyValidForm();
  }, []);

  const setListMissingField = useCallback((values: Record<string, true>, key) => {
    const newValue = Object.keys(values).toString();
    queries = {
      ...queries,
      [key]: newValue,
    };
    // verify before unlock send buttons, react hook form ?
    verifyValidForm();
  }, []);

  if (callState === 'SUCCESS' && data) {
    router.redirectTo(data.fileContext === 'VALID' ? 'validation' : 'edit', { id: data.fileId });

    return null;
  }

  const footer = (
    <SearchModalFooterStyled>
      {dataManualInput?.buttons && (
        <Button color={'error'} onClick={onClose}>
          {dataManualInput?.buttons[0].label}
        </Button>
      )}
      {dataManualInput?.buttons && (
        <Button color={'success'} onClick={createFile} disabled={missingFields}>
          {dataManualInput?.buttons[1].label}
        </Button>
      )}
    </SearchModalFooterStyled>
  );

  return (
    <Modal open={open} onClose={onClose} footer={footer} height={'610px'}>
      <SwitchCallState
        callState={callState}
        states={{
          IS_LOADING: <StairsLoader size={'md'} />,
          SERVER_ERROR: <Error500 size={'md'} message={'Le serveur ne répond pas'} />,
          BAD_REQUEST: (
            <BadRequest
              size={'md'}
              message={error?.response ? error?.response.body.error_msg : ''}
              title={'Réponse de KSIOP'}
            />
          ),
        }}
      >
        {dataManualInput ? (
          <SearchModalBPIContentStyled>
            <p className={'top-message'}>{dataManualInput.title}</p>
            <p className={'top-message'}>{dataManualInput.header}</p>
            <Grid container className={'file-info'}>
              {dataManualInput.fields?.map((field: any, index) => {
                return field.value ? (
                  <Grid item key={index} xs={4}>
                    <p>
                      <FormLabel>{field.label}</FormLabel>
                    </p>
                    <p>
                      <FormText>{field.value}</FormText>
                    </p>
                  </Grid>
                ) : null;
              })}
            </Grid>
            <form className={'missing-fields-form'} onSubmit={handleSubmit(createFile)}>
              {dataManualInput.fields.map((field: any) => {
                return field.type === 'selectList' ? (
                  <Controller
                    render={() => (
                      <div className={'missing-fields'} key={field.id}>
                        <FormLabel>{field.label}</FormLabel>
                        <Select
                          name={field.key}
                          data={field.option}
                          multiple={false}
                          selectedValues={{
                            [Object.keys(field.option)[0] || '-1']: true,
                          }}
                          onInit={setListMissingField}
                          onClose={setListMissingField}
                          closeOnSelect
                        >
                          {field.label}
                        </Select>
                      </div>
                    )}
                    rules={{
                      pattern: field.format,
                    }}
                    control={control}
                    name={field.key}
                    key={field.order}
                    defaultValue={''}
                  />
                ) : null;
              })}
              {dataManualInput.fields.map((field: any) => {
                return field.type === 'float' ? (
                  <Controller
                    render={() => (
                      <div className={'missing-fields'} key={field.id}>
                        <FormLabel>{field.label}</FormLabel>
                        <div className={'missing-field'}>
                          <Input name={field.key} type={'number'} onBlur={handleLeaveField} placeholder={field.label} />
                        </div>
                      </div>
                    )}
                    rules={{
                      pattern: field.format,
                    }}
                    control={control}
                    name={field.key}
                    key={field.order}
                    defaultValue={''}
                  />
                ) : null;
              })}
              {dataManualInput.fields.map((field: any) => {
                return field.type === 'string' ? (
                  <Controller
                    render={() => (
                      <div className={'missing-fields'} key={field.id}>
                        <FormLabel>{field.label}</FormLabel>
                        <div className={'missing-field'}>
                          <Input name={field.key} type={'text'} onBlur={handleLeaveField} placeholder={field.label} />
                        </div>
                      </div>
                    )}
                    rules={{
                      pattern: field.format,
                    }}
                    control={control}
                    name={field.key}
                    key={field.order}
                    defaultValue={''}
                  />
                ) : null;
              })}
            </form>
          </SearchModalBPIContentStyled>
        ) : null}
      </SwitchCallState>
    </Modal>
  );
};
