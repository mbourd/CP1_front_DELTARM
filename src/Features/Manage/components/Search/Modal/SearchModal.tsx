import React, { useCallback, useEffect, useState } from 'react';
import { Button, Error, FormLabel, Modal, PageLoader, FormText, Select } from 'Shared/components';
import { SearchModalStyled, SearchModalFooterStyled, SearchModalBPIContentStyled } from './SearchModal.style';
import { router, storage, useApi, useTrans } from 'Services';
import { IFileSearchApiReturn } from 'Shared/apiRoutes';
import { Grid } from '@material-ui/core';

export const SearchModal: React.FC = (): React.ReactElement | null => {
  const [isOpen, setIsOpen] = useState(true);
  const [trans] = useTrans('Manage');
  const { error, isLoading, send, data } = useApi<IFileSearchApiReturn>();

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
  }, [send, file_num, file_avenant]);

  if (error) {
    const label = trans('serverErrorLabel', { ns: 'Default' });

    return (
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Error title={'Oops!'} redirect={{ label: label, link: '/' }}>
          {trans('serverErrorMessage', { ns: 'Default' })}
        </Error>
      </Modal>
    );
  }

  if (isLoading) {
    return (
      <Modal open={isOpen} closable={false}>
        <PageLoader text={'Traitement en cours ...'} />
      </Modal>
    );
  }

  if (data && !data.error && data.fileId) {
    router.redirectTo('edit', { id: file_num });

    return null;
  }

  if (data && data.error && !data.fileId && data.type === 'DRM_CREATE') {
    return (
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <SearchModalStyled>{data.errorMessage}</SearchModalStyled>
      </Modal>
    );
  }

  if (data && data.error && !data.fileId && data.type === 'DRM') {
    const footer = (
      <SearchModalFooterStyled>
        <Button color={'error'} onClick={() => setIsOpen(false)}>
          {'Annuler la recherche'}
        </Button>
        <Button color={'success'} onClick={() => send('searchFileKSIOP', {}, { file_num, file_avenant })}>
          {'Rechercher chez KSIOP'}
        </Button>
      </SearchModalFooterStyled>
    );

    return (
      <Modal open={isOpen} footer={footer} onClose={() => setIsOpen(false)}>
        <SearchModalStyled>{data.errorMessage}</SearchModalStyled>
      </Modal>
    );
  }

  if (data && data.error && !data.file && data.type === 'KSIOP') {
    return (
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <SearchModalStyled>{"Le dossier rechercher n'existe pas"}</SearchModalStyled>
      </Modal>
    );
  }

  if (data && !data.error && data.file && data.productList && data.type === 'KSIOP') {
    const firstItem: Record<string, true> = {
      [Object.keys(data.productList)[0]]: true,
    };

    storage.setData('edit.create.queries', {
      file_num,
      file_avenant,
      file_produit: data.fileProduit,
      file_borrower: data.fileBorrower,
      file_codecp: data.fileCodecp,
      file_manager: data.fileManager,
    });

    const footer = (
      <SearchModalFooterStyled>
        <Button color={'error'} onClick={() => setIsOpen(false)}>
          {'Annuler la création'}
        </Button>
        <Button color={'success'} onClick={createFile}>
          {'Confirmer la création'}
        </Button>
      </SearchModalFooterStyled>
    );

    return (
      <Modal open={isOpen} onClose={() => setIsOpen(false)} footer={footer}>
        <SearchModalBPIContentStyled>
          <p className={'top-message'}>{data.topMessage}</p>
          <Grid container className={'file-info'}>
            {data.file.map((file, key) => {
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
            <FormLabel>Selectionner une famille de produit</FormLabel>
            <Select
              name={'productList'}
              data={data.productList}
              multiple={false}
              selectedValues={firstItem}
              onInit={setProduct}
              onClose={setProduct}
            >
              Selectionner une famille de produit
            </Select>
          </div>
          <p className={'bottom-message'}>{data.bottomMessage}</p>
        </SearchModalBPIContentStyled>
      </Modal>
    );
  }

  return null;
};
