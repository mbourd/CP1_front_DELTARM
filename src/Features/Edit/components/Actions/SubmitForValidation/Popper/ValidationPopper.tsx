import React, { useCallback, useContext, useEffect } from 'react';
import { ValidationPopperStyled } from './ValidationPopper.style';
import { Card } from '@material-ui/core';
import { IData } from '../apiRoutes';
import { BadRequest, Button, Error500, RequestSuccess, Select, StairsLoader } from 'Shared/components';
import { storage, SwitchCallState, useApi } from 'Services';
import { EditContext } from 'Features/Edit';

export const ValidationPopper: React.FC = (): React.ReactElement => {
  const { request, error, callState, send, data } = useApi<IData>();
  const { fileId } = useContext(EditContext);

  useEffect(() => {
    send('getValidators', {}, { file_id: fileId });

    return () => {
      request.abort();
    };
  }, [send, fileId, request]);

  const handleSubmit = useCallback(() => {
    const selectedValues = storage.getData<Record<string, true>>('edit.selected.validators');
    const selectedValue = Object.keys(selectedValues as Record<string, true>)[0];
    send('askValidation', {}, { file_id: fileId, ask_to_user_id: selectedValue });
  }, [send, fileId]);

  const storeSelectedValues = useCallback((selectedValues: Record<string, true>) => {
    storage.setData('edit.selected.validators', selectedValues);
  }, []);

  return (
    <ValidationPopperStyled>
      <Card elevation={0}>
        <SwitchCallState
          callState={callState}
          states={{
            IS_LOADING: <StairsLoader size={'md'} />,
            ERROR: <Error500 size={'md'} message={'Le serveur ne répond pas'} />,
            SERVER_ERROR: <Error500 size={'md'} message={'Le serveur ne répond pas'} />,
            BAD_REQUEST: (
              <BadRequest
                size={'md'}
                message={error?.response ? error?.response.body.error_msg : ''}
                title={'Echec !'}
              />
            ),
          }}
        >
          {callState === 'SUCCESS' && data?.type === 'GET_VALIDATORS' ? (
            <>
              <Select
                open={true}
                closable={false}
                multiple={false}
                bdc={'transparent'}
                name={'validators'}
                data={data.validators}
                selectedValues={{ [Object.keys(data.validators)[0]]: true }}
                onInit={storeSelectedValues}
                onChange={storeSelectedValues}
              >
                Sélectionez un valideur
              </Select>

              <div className={'footer'}>
                <Button color={'success'} onClick={handleSubmit}>
                  Soumettre
                </Button>
              </div>
            </>
          ) : (
            <RequestSuccess size={'md'} message={'Le dossier a bien été classé'} title={'Opération réussie'} />
          )}
        </SwitchCallState>
      </Card>
    </ValidationPopperStyled>
  );
};
