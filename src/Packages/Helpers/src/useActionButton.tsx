import React, { SetStateAction, useCallback } from 'react';
import { IActionButton } from '../../../Features/DashboardDynamic/components/types';
import axios from 'axios';
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

export const useActionButton = (
  jwt: string | null,
  setIsModalOpen?: React.Dispatch<SetStateAction<boolean>>,
) => {
  const setPageData = useSetRecoilState(data);
  const setModalData = useSetRecoilState(modalData);
  const actionButton = useCallback(
    (action: IActionButton | null) => {
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
    [jwt, setPageData, setModalData, setIsModalOpen],
  );

  return { actionButton, data, modalData };
};
