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
};

export const useActionButton = ({
  jwt,
  setIsModalOpen,
  setErrorMessage,
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
    [jwt, setPageData, setModalData, setIsModalOpen, setErrorMessage],
  );

  return { actionButton, data, modalData };
};
