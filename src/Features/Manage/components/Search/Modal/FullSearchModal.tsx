import { IFileSearchFullResult } from 'Features/Manage/apiRoutes';
import { router, useApi, useTrans } from 'Services';
import React, { FC, useEffect } from 'react';
import { BadRequest, Button, Modal } from 'Shared/components';
import { SearchModalFooterStyled } from './SearchModal.style';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';

export interface FullSearchModalProps {
  search?: string;
  onClose?: () => void;
}

export const FullSearchModal: FC<FullSearchModalProps> = ({
  search,
  onClose,
}): React.ReactElement => {
  const { send, data } = useApi<IFileSearchFullResult[]>();
  const [trans] = useTrans('Manage');
  useEffect(() => {
    if (search) {
      // console.log('find me');
      send('searchFileFull', {}, { search_value: search });
    }
  }, [send, search]);

  const content =
    data && data.length > 0 ? (
      <Table>
        <TableBody>
          {data.map(
            ({
              file_id,
              file_num,
              file_context,
              file_avenant,
              file_borrower,
            }) => (
              <TableRow hover key={file_id}>
                <TableCell>
                  <Typography variant="subtitle1">
                    {file_num}/{file_avenant}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1">{file_borrower}</Typography>
                </TableCell>
                <TableCell>
                  <Box display="flex" justifyContent="flex-end">
                    <Button
                      color="success"
                      type="alt"
                      onClick={() =>
                        router.redirectTo(
                          file_context === 'VALID' ? 'validation' : 'edit',
                          { id: file_id },
                        )
                      }
                    >
                      {trans('Sélectionner')}
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    ) : (
      <Box display="flex" justifyContent="center" padding={6}>
        <BadRequest>{trans('noResult')}</BadRequest>
      </Box>
    );

  const footer = (
    <SearchModalFooterStyled>
      <Button color={'error'} onClick={onClose}>
        {trans('cancelSearch')}
      </Button>
    </SearchModalFooterStyled>
  );

  return (
    <Modal
      open={!!search}
      onClose={onClose}
      header={
        <Typography variant="h6">{trans('resultOfTheSearch')}</Typography>
      }
      footer={footer}
    >
      {content}
    </Modal>
  );
};
