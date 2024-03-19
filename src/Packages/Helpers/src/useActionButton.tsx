import React, { SetStateAction, useCallback } from 'react';
import { IActionButton } from '../../../Features/DashboardDynamic/components/types';
import axios, { AxiosError } from 'axios';
import { getEnv } from './getEnv';
import { useSetRecoilState, atom } from 'recoil';
import { router } from '../../Router';
import { genericErrorsData } from '../../../Features/ModalDynamic/generic';

const data = atom({
  key: 'pageData',
  default: null,
});

const modalData = atom({
  key: 'modalData',
  default: null,
});

type useActionButtonPropsType = {
  jwt: string;
  setIsModalOpen?: React.Dispatch<SetStateAction<boolean>>;
  setErrorMessage?: React.Dispatch<SetStateAction<string | null>>;
  setIsDisabledModalBtns?: React.Dispatch<SetStateAction<boolean>>;
};

export const useActionButton = ({
  jwt,
  setIsModalOpen,
  setErrorMessage,
  setIsDisabledModalBtns,
}: useActionButtonPropsType) => {
  const setPageData = useSetRecoilState(data);
  const setModalData = useSetRecoilState(modalData);
  const actionButton = useCallback(
    (
      action: IActionButton | null,
      extraData: Record<any, any> = {},
      callbackResponseConfirmation?: (...p) => undefined,
    ) => {
      const dispatchActionButton = (data: any) => {
        // create a dispatcher function outside of actionButtonTrigger
        switch (data?.target) {
          case 'blank':
            return window.open(data.route_front, '_blank');
          case 'main':
            setPageData(data);
            if (setIsModalOpen) {
              setIsModalOpen(false);
            }

            if (data.route_front === '/') {
              window.open(data.route_front, '_self');
            }

            return router.redirectToUrl(data.route_front);
          case 'modal':
            setModalData(data);
            if (setIsModalOpen) {
              setIsModalOpen(true);
            }

            return;
          case 'fixed_modal':
            setModalData(data);
            if (setIsModalOpen) setIsModalOpen(true);
        }
        switch (data?.origin_fonction_callback) {
          case 'delete_row':
            if (setErrorMessage && data?.row_error && data.row_error?.length) {
              setErrorMessage(
                (data.row_error as any[]).reduce(
                  (acc, curr) => `${acc} ${curr.error}`,
                  '',
                ),
              );
            }
            if (callbackResponseConfirmation)
              callbackResponseConfirmation(data);
            break;
        }
      };
      let queryString = '';
      if (action?.params) {
        // create a function that transform params into query string
        queryString =
          '?' +
          Object.keys(action.params)
            .map((key) => {
              if (action?.params) {
                return (
                  encodeURIComponent(key) +
                  '=' +
                  encodeURIComponent(action.params[key])
                );
              }

              return;
            })
            .join('&');
      }
      switch (action?.method) {
        case 'GET':
          axios
            .get(
              `${getEnv('API_PROTOCOL')}://${getEnv('API_HOST')}${
                action?.endpoint
              }${queryString}`,
              {
                headers: {
                  Authorization: jwt,
                  'Content-type': 'multipart/form-data',
                },
              },
            )
            .then(async (response) => {
              dispatchActionButton(response.data);
            })
            .catch((error) => {
              if (error.response) {
                dispatchActionButton(error.response.data);

                return;
              }
              if (error) {
                dispatchActionButton(genericErrorsData);
              }
            });

          return;
        case 'POST':
          setIsDisabledModalBtns && setIsDisabledModalBtns(false);
          if (
            action?.params?.file &&
            (action?.params?.file as any as any[]).every(
              (f) => f instanceof File,
            )
          ) {
            const files = action?.params?.file as any as File[];
            let errMsg = '';

            files.forEach((f) => {
              setIsDisabledModalBtns && setIsDisabledModalBtns(true);
              const qS =
                '?' +
                // @ts-ignore
                Object.keys(action.params)
                  .map((key) => {
                    if (action?.params) {
                      const isStr = typeof action.params[key] === 'string';

                      return (
                        encodeURIComponent(key) +
                        '=' +
                        encodeURIComponent(
                          isStr
                            ? action.params[key]
                            : (action.params[key] as any as any[])?.every(
                                  (ff) => ff instanceof File,
                                )
                              ? f.name.replace('#', ' ')
                              : action.params[key],
                        )
                      );
                    }

                    return;
                  })
                  .join('&');
              const formData = new FormData();

              formData.append('file', f);
              formData.append('file_name', f.name);
              axios
                .post(
                  `${getEnv('API_PROTOCOL')}://${getEnv('API_HOST')}${
                    action?.endpoint
                  }${qS}`,
                  formData,
                  {
                    headers: {
                      Authorization: jwt,
                      'Content-type': 'multipart/form-data',
                    },
                  },
                )
                .then((response) => {
                  if (callbackResponseConfirmation)
                    callbackResponseConfirmation();
                  setModalData(response.data);
                  setIsDisabledModalBtns && setIsDisabledModalBtns(false);
                })
                .catch((err: AxiosError<any>) => {
                  if (callbackResponseConfirmation)
                    callbackResponseConfirmation();
                  setIsDisabledModalBtns && setIsDisabledModalBtns(false);

                  if (err?.response?.status === 400) {
                    if (setErrorMessage)
                      setErrorMessage(
                        err?.response?.data?.error_msg +
                          ' code: ' +
                          err?.response?.data?.error_code,
                      );

                    return;
                  }
                  if (err?.response?.status === 409) {
                    setModalData(err?.response?.data);

                    return;
                  }
                  if (setErrorMessage) {
                    errMsg =
                      ' ' +
                      (err?.response?.data?.error_msg ??
                        'Erreur lords de la requête');
                    setErrorMessage(errMsg);
                  }
                });
            });
          } else
            axios
              .post(
                `${getEnv('API_PROTOCOL')}://${getEnv('API_HOST')}${
                  action?.endpoint
                }${queryString}`,
                { ...action?.params, ...extraData },
                {
                  headers: {
                    Authorization: jwt,
                    'Content-type': 'multipart/form-data',
                  },
                },
              )
              .then(async (response) => {
                // console.dir(response);
                dispatchActionButton(response.data);
              })
              .catch(async (error: AxiosError<any>) => {
                if (error.response) {
                  if (setErrorMessage && error.response.status >= 300)
                    setErrorMessage(error.response.data?.error_msg);

                  dispatchActionButton(error.response.data);

                  return;
                }
                if (error) {
                  if (setErrorMessage)
                    setErrorMessage(
                      typeof error === 'string'
                        ? error
                        : 'Erreur lors de la requête',
                    );

                  dispatchActionButton(genericErrorsData);
                }
              });

          return;
        case 'DELETE':
          axios
            .delete(
              `${getEnv('API_PROTOCOL')}://${getEnv('API_HOST')}${
                action?.endpoint
              }`,
              {
                headers: {
                  Authorization: jwt,
                  'Content-type': 'multipart/form-data',
                },
              },
            )
            .then(async (response) => {
              dispatchActionButton(response.data);
            })
            .catch(async (error) => {
              if (error.response) {
                dispatchActionButton(error.response.data);

                return;
              }
              if (error) {
                dispatchActionButton(genericErrorsData);
              }
            });

          return;
        case 'PUT':
          axios
            .put(
              `${getEnv('API_PROTOCOL')}://${getEnv('API_HOST')}${
                action?.endpoint
              }`,
              action?.params,
              {
                headers: {
                  Authorization: jwt,
                  'Content-type': 'multipart/form-data',
                },
              },
            )
            .then(async (response) => {
              dispatchActionButton(response.data);
            })
            .catch((error) => {
              if (error.response) {
                dispatchActionButton(error.response.data);

                return;
              }
              if (error) {
                dispatchActionButton(genericErrorsData);
              }
            });

          return;
        case 'CANCEL':
          if (setIsModalOpen) {
            setIsModalOpen(false);
          }

          return;
      }
    },
    [
      setPageData,
      setIsModalOpen,
      setModalData,
      setErrorMessage,
      jwt,
      setIsDisabledModalBtns,
    ],
  );

  return { actionButton, data, modalData };
};
