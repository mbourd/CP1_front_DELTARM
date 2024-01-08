import React, { useCallback, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import {
  Button,
  Modal,
  StairsLoader,
  Error500,
  BadRequest,
  FormLabel,
  FormText,
} from 'Shared/components';
import {
  SearchModalBPIContentStyled,
  SearchModalFooterStyled,
} from './SearchModal.style';
import {
  apiRouter,
  router,
  storage,
  SwitchCallState,
  useApi,
  useTrans,
} from 'Services';
import { IFileSearchApiReturn, IKSIOPManualInput } from 'Features/Manage';
import { CreateModal } from './CreateModal';

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<IProps> = ({
  onClose,
  open,
}): React.ReactElement | null => {
  const { request, error, callState, route, send, data } =
    useApi<IFileSearchApiReturn | null>();
  const [trans] = useTrans('Manage');

  const {
    send: sendManualInput,
    data: dataManualInput,
    callState: callStateManualInput,
    route: routeManualInput,
  } = useApi<IKSIOPManualInput | null>();

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const file = (
    storage.getData('shared.component.search.value') as string
  ).split(/ *\/ */);
  const file_num = file[0];
  const file_avenant = file[1];

  useEffect(() => {
    if (data?.productList !== null && data?.productList !== undefined) {
      const move: any = data;
      const id: any = Object.values(move?.productList)[0];
      localStorage.setItem('prod', JSON.stringify(id));
    }
    // const dat: any = Object.keys(data?.productList);
    // setprod_id(dat);
  }, [data]);

  // const setProduct = useCallback((values: Record<string, true>) => {
  //   storage.setData('edit.selected.product', values);
  // }, []);

  const createFile = useCallback(() => {
    // const prod_id = Object.keys(
    //   storage.getData<Record<string, true>>('edit.selected.product') as Record<
    //     string,
    //     true
    //   >,
    // )[0];
    const decode: any = localStorage.getItem('prod');
    const pr = JSON.parse(decode);
    const prod_id: any = pr?.id;
    const queries = {
      ...storage.getData<Record<string, any>>('edit.create.queries'),
      prod_id,
    };
    send('createFile', {}, queries);
    localStorage.removeItem('prod');
  }, [send]);

  useEffect(() => {
    send('searchFile', {}, { file_num, file_avenant });

    return () => {
      request.abort();
    };
  }, [send, file_num, file_avenant, request]);

  /** to prevent warning msg while rendering this component and in the same time redirect to route */
  const isSUCCESStypeDRM =
    callState === 'SUCCESS' &&
    data &&
    (route?.type === 'DRM' || route?.type === 'DRM_CREATE');
  useEffect(() => {
    if (isSUCCESStypeDRM) {
      router.redirectTo(data.fileContext === 'VALID' ? 'validation' : 'edit', {
        id: data.fileId,
      });
    }
  }, [isSUCCESStypeDRM, data]);
  if (isSUCCESStypeDRM) return null;
  /** *** */

  if (callState === 'SUCCESS' && data && route?.type === 'KSIOP') {
    if (data.routeForFileCreation) {
      apiRouter.changeRouteUrl('searchFileKSIOP', data.routeForFileCreation);
    }
    const createQueries = { ...data.fileFields };
    storage.setData('edit.create.queries', {
      ...createQueries,
    });
  }

  // Handle different footers between call states
  // TODO find a better solution in this component
  // we don't have the time and bpi wants specific handling for each call state
  let footer: React.ReactNode | null = null;
  if (callState === 'BAD_REQUEST' && route?.type === 'DRM') {
    if (error?.response?.body.data.btn) {
      error.response.body.data.btn.map((btn: any) => {
        // case we don't find the file from search/file, we change the create url by client, ksiop is only for BPI
        if (btn.route.url) {
          apiRouter.changeRouteUrl('searchFileKSIOP', btn.route.url);
        }
      });
    }
    footer = (
      <SearchModalFooterStyled>
        {error?.response?.body.data.btn[0] !== undefined && (
          <Button color={'error'} onClick={onClose}>
            {error?.response?.body.data.btn[0].label}
          </Button>
        )}
        {error?.response?.body.data.btn[1] !== undefined ? (
          <Button
            color={'success'}
            onClick={() => {
              send('searchFileKSIOP', {}, { file_num, file_avenant });
            }}
          >
            {error?.response?.body.data.btn[1].label}
          </Button>
        ) : null}
      </SearchModalFooterStyled>
    );
  }

  if (
    (callState === 'SERVER_ERROR' || callState === 'BAD_REQUEST') &&
    route?.type === 'KSIOP'
  ) {
    footer = (
      <SearchModalFooterStyled>
        <Button color={'success'} onClick={onClose}>
          {trans('cancel')}
        </Button>
      </SearchModalFooterStyled>
    );
  }

  // Handle 503 from KSIOP, missing fields
  if (callState === 'BAD_REQUEST' && error?.status === 503) {
    if (error?.response?.body.data.btn[1]?.action) {
      apiRouter.changeRouteUrl(
        'KSIOPManualInput',
        error?.response?.body.data.btn[1].action,
      );
    }
    const params = error?.response?.body.data.btn[1].params;

    const paramsObject: Record<string, string> = {};

    params.map((param: any) => (paramsObject[param.key] = param.value));

    const fields_completed = paramsObject.fields_completed;
    const fields_missing = paramsObject.fields_missing;
    const typedossier = paramsObject.typedossier;
    footer = (
      <SearchModalFooterStyled>
        {error?.response?.body.data.btn[0] !== undefined && (
          <Button color={'error'} onClick={onClose}>
            {error?.response?.body.data.btn[0].label}
          </Button>
        )}
        {error?.response?.body.data.btn[1] !== undefined ? (
          <Button
            color={'success'}
            onClick={() =>
              sendManualInput(
                'KSIOPManualInput',
                {},
                { file_num, file_avenant, typedossier },
                { fields_missing, fields_completed },
              )
            }
          >
            {error?.response?.body.data.btn[1].label}
          </Button>
        ) : null}
      </SearchModalFooterStyled>
    );
  }

  if (callState === 'SUCCESS' && route?.type === 'KSIOP') {
    footer = (
      <SearchModalFooterStyled>
        <Button color={'error'} onClick={onClose}>
          {trans('cancelCreation')}
        </Button>
        <Button color={'success'} onClick={createFile}>
          {trans('confirmCreation')}
        </Button>
      </SearchModalFooterStyled>
    );
  }

  if (
    callStateManualInput === 'SUCCESS' &&
    routeManualInput?.type === 'KSIOP' &&
    routeManualInput.name === 'KSIOPManualInput'
  ) {
    // TODO split all cases like this ?
    return (
      <CreateModal
        open={open}
        onClose={onClose}
        dataManualInput={dataManualInput}
      />
    );
  }

  return (
    <Modal open={open} onClose={onClose} footer={footer} height={'560px'}>
      <SwitchCallState
        callState={callState}
        states={{
          IS_LOADING: <StairsLoader size={'md'} />,
          SERVER_ERROR: (
            <Error500 size={'md'} message={trans('serverNotResponding')} />
          ),
          BAD_REQUEST:
            route?.type === 'KSIOP' ? (
              <BadRequest
                size={'md'}
                message={error?.response ? error?.response.body.error_msg : ''}
                title={trans('responseFromKSIOP')}
              />
            ) : (
              <BadRequest
                size={'md'}
                message={error?.response ? error?.response.body.error_msg : ''}
                title={trans('fileNotFound')}
              />
            ),
        }}
      >
        {data ? (
          <SearchModalBPIContentStyled>
            <p className={'top-message'}>{data.topMessage}</p>
            <Grid container className={'file-info'}>
              {data.file?.map((file, index) => {
                return (
                  <Grid item key={index} xs={4}>
                    <p>
                      <FormLabel>{file.key}</FormLabel>
                    </p>
                    <p>
                      <FormText>{file.value}</FormText>
                    </p>
                  </Grid>
                );
              })}
            </Grid>
            <p className={'bottom-message'}>{data.bottomMessage}</p>
          </SearchModalBPIContentStyled>
        ) : null}
      </SwitchCallState>
    </Modal>
  );
};
