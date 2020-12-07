import React, { useCallback, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Button, Modal, StairsLoader, Error500, BadRequest, FormLabel, FormText, Select } from 'Shared/components';
import { SearchModalBPIContentStyled, SearchModalFooterStyled } from './SearchModal.style';
import { router, storage, SwitchCallState, useApi } from 'Services';
import { IFileSearchApiReturn } from 'Features/Manage';

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<IProps> = ({ onClose, open }): React.ReactElement | null => {
  const { request, error, callState, route, send, data } = useApi<IFileSearchApiReturn | null>();

  const file = (storage.getData('manage.search.value') as string).split(/ *\/ */);
  const file_num = file[0];
  const file_avenant = file[1];

  const setProduct = useCallback((values: Record<string, true>) => {
    storage.setData('edit.selected.product', values);
  }, []);

  const createFile = useCallback(() => {
    const prod_id = Object.keys(
      storage.getData<Record<string, true>>('edit.selected.product') as Record<string, true>,
    )[0];
    const queries = { ...storage.getData<Record<string, any>>('edit.create.queries'), prod_id };
    send('createFile', {}, queries);
  }, [send]);

  useEffect(() => {
    send('searchFile', {}, { file_num, file_avenant });

    return () => {
      request.abort();
    };
  }, [send, file_num, file_avenant, request]);

  if (callState === 'SUCCESS' && data && (route?.type === 'DRM' || route?.type === 'DRM_CREATE')) {
    router.redirectTo('edit', { id: data.fileId });

    return null;
  }

  if (callState === 'SUCCESS' && data && route?.type === 'KSIOP') {
    storage.setData('edit.create.queries', {
      file_num,
      file_avenant,
      file_produit: data.fileProduit,
      file_borrower: data.fileBorrower,
      file_codecp: data.fileCodecp,
      file_manager: data.fileManager,
    });
  }

  let footer = null;
  // const content = null;

  if (callState === 'BAD_REQUEST' && route?.type === 'DRM') {
    footer = (
      <SearchModalFooterStyled>
        <Button color={'error'} onClick={onClose}>
          Annuler la recherche
        </Button>
        {route?.type === 'DRM' ? (
          <Button color={'success'} onClick={() => send('searchFileKSIOP', {}, { file_num, file_avenant })}>
            Rechercher chez KSIOP
          </Button>
        ) : null}
      </SearchModalFooterStyled>
    );
  }

  if (callState === 'SUCCESS' && route?.type === 'KSIOP') {
    footer = (
      <SearchModalFooterStyled>
        <Button color={'error'} onClick={onClose}>
          Annuler la création
        </Button>
        <Button color={'success'} onClick={createFile}>
          Confirmer la création
        </Button>
      </SearchModalFooterStyled>
    );
  }

  return (
    <Modal open={open} onClose={onClose} footer={footer}>
      <SwitchCallState
        callState={callState}
        states={{
          IS_LOADING: <StairsLoader size={'md'} />,
          SERVER_ERROR: <Error500 size={'md'} message={'Le serveur ne répond pas'} />,
          BAD_REQUEST:
            route?.type === 'KSIOP' ? (
              <BadRequest
                size={'md'}
                message={error?.response ? error?.response.body.error_msg : ''}
                title={'Réponse de KSIOP'}
              />
            ) : (
              <BadRequest
                size={'md'}
                message={error?.response ? error?.response.body.error_msg : ''}
                title={'Dossier introuvable !'}
              />
            ),
        }}
      >
        {data ? (
          <SearchModalBPIContentStyled>
            <p className={'top-message'}>{data.topMessage}</p>
            <Grid container className={'file-info'}>
              {data.file?.map((file, key) => {
                return (
                  <Grid item key={key} xs={4}>
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
            <div className={'product-list'}>
              {data.productList ? (
                <>
                  <FormLabel>Selectionner une famille de produit</FormLabel>
                  <Select
                    name={'productList'}
                    data={data.productList}
                    multiple={false}
                    closable={false}
                    open={true}
                    selectedValues={{
                      [Object.keys(data.productList)[0] || '-1']: true,
                    }}
                    onInit={setProduct}
                    onClose={setProduct}
                  >
                    Selectionner une famille de produit
                  </Select>
                </>
              ) : null}
            </div>
            <p className={'bottom-message'}>{data.bottomMessage}</p>
          </SearchModalBPIContentStyled>
        ) : null}
      </SwitchCallState>
    </Modal>
  );
};
