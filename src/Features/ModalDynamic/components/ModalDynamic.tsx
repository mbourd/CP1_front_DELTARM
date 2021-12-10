import React, { FC, useCallback, useRef } from 'react';
import { Button, HeadingTwo, InputBase, Modal } from 'Shared/components';
import { ModalDynamicFooterStyled } from './ModalDynamic.style';
import { IDataModalProps } from './types';
import { useActionButton } from '../../../Packages/Helpers/src/useActionButton';
import { useSecurity } from '../../../Packages/Security';
import { Grid } from '@mui/material';

export const ModalDynamic: FC<IDataModalProps> = ({
  open,
  onClose,
  data,
}): React.ReactElement => {
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const { actionButton } = useActionButton(jwt);

  const handleChangeValue = useCallback((e) => {
    console.log(e.currentTarget.id); // key
    console.log(e.currentTarget.value); // value
    // on veut mapper ça dans les actions
  }, []);

  const footer = (
    <ModalDynamicFooterStyled>
      {data?.btn?.map((btn, index) => {
        return (
          <Button
            key={index}
            onClick={() => actionButton(btn.action)}
            style={{ backgroundColor: btn.bg_color }}
          >
            {btn.btn_lib}
          </Button>
        );
      })}
    </ModalDynamicFooterStyled>
  );

  return (
    <Modal open={open} onClose={onClose} header={data?.title} footer={footer}>
      <HeadingTwo>{data?.subtitle}</HeadingTwo>
      <Grid container>
        {data?.content?.map((element, index) => {
          switch (element.element) {
            case 'p':
              return <p>{element.value}</p>;
            case 'input':
              return (
                <InputBase
                  type={element.attribute?.type}
                  placeholder={element.attribute?.placeholder}
                  id={element.attribute?.id}
                  required={element.attribute?.mandatory}
                  value={element.attribute?.value}
                  onChange={(e) => handleChangeValue(e)}
                />
              );
          }
        })}
      </Grid>
    </Modal>
  );
};
