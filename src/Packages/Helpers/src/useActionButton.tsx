import { useCallback } from 'react';
import { IActionButton } from '../../../Features/DashboardDynamic/components/types';
import axios from 'axios';
import { getEnv } from './getEnv';
import { useSetRecoilState, atom } from 'recoil';
import { router } from '../../Router';
const data = atom({
  key: 'pageData',
  default: null,
});

export const useActionButton = (jwt: string | null) => {
  const setPageData = useSetRecoilState(data);

  const dispatchActionButton = (data: any) => {
    switch (data?.target) {
      case 'blank':
        return window.open(data.route_front, '_blank');
      case 'main':
        return router.redirectToUrl(data.route_front);
      // case 'modal':
      //   // setIsModalOpen(true);
      //   // setCurrentModalRoute(action.route);
      //   // return;
    }
  };

  const actionButton = useCallback(
    (action: IActionButton | null) => {
      let queryString = '';
      if (action?.params) {
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
            .then(async function (response) {
              await setPageData(response.data);
              dispatchActionButton(response.data);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });

          return;
        case 'POST':
          axios
            .post(
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
            .then(async function (response) {
              await setPageData(response.data.data);
              dispatchActionButton(response.data);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
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
            .then(async function (response) {
              await setPageData(response.data.data);
              dispatchActionButton(response.data);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });

          return;
        case 'CANCEL':
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
            .then(async function (response) {
              await setPageData(response.data.data);
              dispatchActionButton(response.data);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
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
            .then(async function (response) {
              await setPageData(response.data.data);
              dispatchActionButton(response.data);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });

          return;
      }
    },
    [jwt, setPageData],
  );

  return { actionButton, data };
};
