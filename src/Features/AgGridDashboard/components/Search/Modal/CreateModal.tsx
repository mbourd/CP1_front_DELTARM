import {
  apiRouter,
  SwitchCallState,
  useApi,
  router,
} from '../../../../../Services';
import { IKSIOPManualInput, IMissingField } from '../../../../Manage';
import {
  SearchModalBPIContentStyled,
  SearchModalFooterStyled,
} from './SearchModal.style';
import {
  BadRequest,
  Button,
  Error500,
  FormLabel,
  FormText,
  Modal,
  StairsLoader,
} from '../../../../../Packages/Design/components';
import { Grid } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { GenerateFieldManual } from './GenerateFieldManual';

import { useTrans } from '../../../../../Services';

interface IProps {
  open: boolean;
  onClose: () => void;
  dataManualInput: IKSIOPManualInput | null;
}

export const CreateModal: React.FC<React.PropsWithChildren<IProps>> = ({
  onClose,
  open,
  dataManualInput,
}): React.ReactElement | null => {
  const { handleSubmit, control } = useForm();
  const { error, callState, send, data } = useApi<IKSIOPManualInput | null>();
  const [missingFields, setStateMissingFields] = useState(true);
  const queries = useRef<any>({});
  const [trans] = useTrans('Dashboard');

  // Have the current filled queries in object
  useEffect(() => {
    dataManualInput?.fields.forEach((field: IMissingField) => {
      if (field.value) {
        queries.current = {
          ...queries.current,
          [field.key]: field.value,
        };
      } else {
        queries.current = {
          ...queries.current,
          [field.key]: '',
        };
      }
    });
  }, [dataManualInput]);

  const verifyValidForm = useCallback(() => {
    let errors = 0;
    Object.keys(queries.current).forEach((key: any) => {
      if (queries.current[key] === '') {
        errors += 1;
      }
    });
    if (errors === 0) {
      setStateMissingFields(false);
    } else {
      setStateMissingFields(true);
    }
  }, []);

  const createFile = useCallback(() => {
    apiRouter.changeRouteUrl(
      'searchFileKSIOP',
      dataManualInput?.buttons[1].action
        ? dataManualInput?.buttons[1].action
        : '',
    );
    const file_num = dataManualInput?.manualFile.file_num;
    const file_avenant = dataManualInput?.manualFile.file_avenant;
    const typedossier = dataManualInput?.manualFile.typedossier;
    queries.current = {
      ...queries.current,
      file_num,
      file_avenant,
      typedossier,
    };
    send('createFile', {}, queries.current);
  }, [send, dataManualInput]);

  const handleLeaveField = useCallback(
    (event: any) => {
      queries.current = {
        ...queries.current,
        [event.currentTarget.name]: event.currentTarget.value,
      };
      // verify before unlock send buttons, react hook form ?
      verifyValidForm();
    },
    [verifyValidForm],
  );

  const setListMissingField = useCallback(
    (values: Record<string, true>, key: any) => {
      const newValue = Object.keys(values).toString();
      queries.current = {
        ...queries.current,
        [key]: newValue,
      };
      // verify before unlock send buttons, react hook form ?
      verifyValidForm();
    },
    [verifyValidForm],
  );
  if (callState === 'SUCCESS' && data) {
    router.redirectTo(data.fileContext === 'VALID' ? 'validation' : 'edit', {
      id: data.fileId,
    });

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
          SERVER_ERROR: (
            <Error500 size={'md'} message={trans('noServerResponding')} />
          ),
          BAD_REQUEST: (
            <BadRequest
              size={'md'}
              message={error?.response ? error?.response.body.error_msg : ''}
              title={trans('responseFromKSIOP')}
            />
          ),
        }}
      >
        {dataManualInput ? (
          <SearchModalBPIContentStyled>
            <p className={'top-message'}>{dataManualInput.title}</p>
            <p className={'top-message'}>{dataManualInput.header}</p>
            <Grid container className={'file-info'}>
              {dataManualInput.fields?.map((field: IMissingField, index) => {
                return field.value_to_display ? (
                  <Grid item key={index} xs={4}>
                    <p>
                      <FormLabel>{field.label}</FormLabel>
                    </p>
                    <p>
                      <FormText>{field.value_to_display}</FormText>
                    </p>
                  </Grid>
                ) : null;
              })}
            </Grid>
            <form
              className={'missing-fields-form'}
              onSubmit={handleSubmit(createFile)}
            >
              {dataManualInput.fields.map((field: IMissingField) => {
                // if you want to return and use the order key : return field.order === index ? (...) : null
                return (
                  <GenerateFieldManual
                    field={field}
                    key={field.order}
                    handleLeaveField={handleLeaveField}
                    setListMissingField={setListMissingField}
                    control={control}
                  />
                );
              })}
            </form>
          </SearchModalBPIContentStyled>
        ) : null}
      </SwitchCallState>
    </Modal>
  );
};
