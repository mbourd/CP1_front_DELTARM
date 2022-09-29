import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ValidationPopperStyled } from './ValidationPopper.style';
import { Card } from '@material-ui/core';
import { IData } from '../apiRoutes';
import {
  BadRequest,
  Button,
  Error500,
  RequestSuccess,
  Select,
  StairsLoader,
} from 'Shared/components';
import {
  router,
  storage,
  SwitchCallState,
  useApi,
  getEnv,
  IUser,
  security,
} from 'Services';
import { EditValidationContext } from 'Features/Edit';
import Checkbox from '@mui/material/Checkbox';
import { fontSize } from '@mui/system';
import axios from 'axios';

export interface ValidationPopperProps {
  onClose?: () => void;
}

export const ValidationPopper: React.FC<ValidationPopperProps> = ({
  onClose,
}): React.ReactElement => {
  const { request, error, callState, send, data } = useApi<any>();
  const context = useContext(EditValidationContext);
  const [openFileSelection, setopenFileSelection] = useState(false);
  const [displaySelectedFiles, setdisplaySelectedFiles] = useState(false);
  const [selectedFiles, setselectedFiles] = useState<any>([]);
  const [user] = useState<IUser>(security.getUser());
  const jwt = user.getJwt();

  // useEffect(() => {
  //   console.log(data);
  //   console.log(data?.response?.linkable_files);
  //   console.log('selected_files', selectedFiles);
  // }, [data, selectedFiles]);

  useEffect(() => {
    if (data?.response?.linkable_files?.length !== 0) {
      setopenFileSelection(true);
    }
  }, [data?.response?.linkable_files]);
  useEffect(() => {
    const q: Record<string, string> = { file_id: context.fileId };
    if (context.data?.validationCount) {
      q['valid_num'] = context.data?.validationCount;
    }

    send('getValidators', {}, q);

    return () => {
      request.abort();
    };
  }, [send, context.fileId, request, context.data]);

  const handleSubmit = useCallback(() => {
    const selectedValues = storage.getData<Record<string, true>>(
      'edit.selected.validators',
    );
    const selectedValue = Object.keys(
      selectedValues as Record<string, true>,
    )[0];
    send(
      'askValidation',
      {},
      { file_id: context.fileId, ask_to_user_id: selectedValue },
    );
  }, [send, context.fileId]);

  const handleFileSelection = useCallback(() => {
    setopenFileSelection(false);
    if (selectedFiles.length === 0) {
      setdisplaySelectedFiles(false);
    } else {
      setdisplaySelectedFiles(true);
    }
  }, [selectedFiles]);

  const cancelFileSelection = useCallback(() => {
    setopenFileSelection(false);
    setselectedFiles([]);
  }, []);

  const cancelDisplayFileSelection = useCallback(() => {
    setdisplaySelectedFiles(false);
    setopenFileSelection(false);
    setselectedFiles([]);
  }, []);

  const DisplayFileSelection = async () => {
    const linkable_files: any = await data?.response?.linkable_files.filter(
      function (item: any) {
        return selectedFiles.indexOf(item.file_uuid) !== -1;
      },
    );

    const response = {
      selected_files: linkable_files,
      validators: data?.response?.unmodified_validators,
    };
    // console.log(response);

    axios
      .post(
        `${getEnv('API_PROTOCOL')}://${getEnv(
          'API_HOST',
        )}/validate/validation_linked_files`,
        response,
        {
          headers: {
            Authorization: jwt,
          },
        },
      )
      .then((data: any) => {
        // console.log(data);
      })
      .catch((error: any) => {
        // console.log(error);
      });
    setdisplaySelectedFiles(false);
  };

  const handleSelectionOfFiles = (event: any) => {
    if (event.target.checked) {
      if (!selectedFiles?.includes(event.target.value)) {
        setselectedFiles((selectedFiles: any) =>
          selectedFiles.concat(event.target.value),
        );
      }
    } else {
      setselectedFiles((selectedFiles: any) =>
        selectedFiles.filter((f: string) => f !== event.target.value),
      );
    }
  };
  const storeSelectedValues = useCallback(
    (selectedValues: Record<string, true>) => {
      storage.setData('edit.selected.validators', selectedValues);
    },
    [],
  );

  if (callState === 'SUCCESS' && data?.type === 'ASK_VALIDATION') {
    router.redirectTo('manage');
  }

  return (
    <ValidationPopperStyled>
      <Card elevation={0}>
        <SwitchCallState
          callState={callState}
          states={{
            IS_LOADING: <StairsLoader size={'md'} />,
            SERVER_ERROR: (
              <Error500 size={'md'} message={'Le serveur ne répond pas'} />
            ),
            BAD_REQUEST: (
              <>
                <BadRequest
                  size={'md'}
                  message={
                    error?.response ? error?.response.body.error_msg : ''
                  }
                  title={'Echec !'}
                />
                {onClose && (
                  <div className={'footer'}>
                    <Button color={'error'} onClick={onClose}>
                      Fermer
                    </Button>
                  </div>
                )}
              </>
            ),
          }}
        >
          {callState === 'SUCCESS' &&
          data?.type === 'GET_VALIDATORS' &&
          openFileSelection === false &&
          displaySelectedFiles === false ? (
            <>
              <Select
                open={true}
                closable={false}
                multiple={false}
                bdc={'transparent'}
                name={'validators'}
                data={data?.response?.validators}
                selectedValues={{
                  [Object.keys(data?.response?.validators)[0]]: true,
                }}
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
          ) : openFileSelection &&
            data?.response?.linkable_files?.length !== 0 ? (
            <>
              <div style={{ margin: 30 }}>
                <h2
                  style={{ fontSize: 22, fontWeight: 'bold' }}
                >{`Sélectionnez les fichiers à dupliquer`}</h2>

                {data?.response?.linkable_files?.map((file: any) => {
                  return (
                    <div
                      key={file?.file_uuid}
                      style={{
                        flexDirection: 'column',
                        display: 'flex',
                        alignItems: 'start',
                        marginTop: 10,
                      }}
                    >
                      <div
                        style={{
                          flexDirection: 'row',
                          display: 'flex',
                          alignItems: 'center',
                          marginTop: 10,
                        }}
                      >
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={file?.file_uuid}
                          value={file?.file_uuid}
                          onChange={handleSelectionOfFiles}
                        />

                        <b style={{ fontSize: 16, fontWeight: 600 }}>{`${
                          file?.file_name
                        }/${file?.file_avenant} créé le  ${new Date(
                          file?.file_creation_date,
                        ).toLocaleDateString()} par ${
                          file?.file_creation_by
                        }`}</b>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={'footer'}>
                <Button color={'error'} onClick={cancelFileSelection}>
                  Annuler la demande
                </Button>{' '}
                <Button color={'success'} onClick={handleFileSelection}>
                  Valider la demande
                </Button>
              </div>
            </>
          ) : displaySelectedFiles && selectedFiles.length !== 0 ? (
            <>
              <div style={{ margin: 20 }}>
                <h2
                  style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}
                >
                  {`Vous êtes sur le point d'effectuer une duplication entre
                plusieurs fichiers. Vous avez demandé de dupliquer les
                informations du dossier :`}
                </h2>
                {selectedFiles.length > 0 &&
                  data?.response?.linkable_files
                    .filter(function (item: any) {
                      return selectedFiles.indexOf(item.file_uuid) !== -1;
                    })
                    .map((file: any, index: any) => {
                      return (
                        <>
                          <b
                            style={{
                              fontSize: 16,
                              fontWeight: 600,
                              marginTop: 5,
                              marginBottom: 5,
                            }}
                            key={file?.file_uuid}
                          >{`${index + 1}: ${file?.file_name}/${
                            file?.file_avenant
                          } créé le  ${new Date(
                            file?.file_creation_date,
                          ).toLocaleDateString()} par ${
                            file?.file_creation_by
                          }`}</b>
                          <br />
                        </>
                      );
                    })}
                <br />

                <b
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  {`Si vous confimez cette duplication, toutes les informations de la section "Mise en Place" seront dupliquées entre ces dossiers.`}
                </b>
                <p
                  style={{
                    fontSize: 19,
                    fontWeight: 500,
                    marginTop: 20,
                  }}
                >{`Souhaitez-vous confirmer cette duplication ?`}</p>
              </div>
              <div className={'footer'}>
                <Button color={'error'} onClick={cancelDisplayFileSelection}>
                  Annuler
                </Button>{' '}
                <Button color={'success'} onClick={DisplayFileSelection}>
                  Confirmer la duplication
                </Button>
              </div>
            </>
          ) : (
            <RequestSuccess
              size={'md'}
              message={'La validation a été soumise !'}
              title={'Opération réussie'}
            />
          )}
        </SwitchCallState>
      </Card>
    </ValidationPopperStyled>
  );
};
