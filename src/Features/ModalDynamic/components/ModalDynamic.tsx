import React, { FC } from 'react';
import { Button, Modal } from 'Shared/components';
import { ModalDynamicFooterStyled } from './ModalDynamic.style';
import { IDataModalProps } from './types';
import { useActionButton } from '../../../Packages/Helpers/src/useActionButton';
import { useSecurity } from '../../../Packages/Security';

export const ModalDynamic: FC<IDataModalProps> = ({
  open,
  onClose,
  data,
}): React.ReactElement => {
  const { user } = useSecurity();
  const jwt = user.getJwt();
  const { actionButton } = useActionButton(jwt);
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
      <p>{data?.subtitle}</p>
      {data?.content?.map((element, index) => {
        const CustomTag = `${element.element}` as keyof JSX.IntrinsicElements;

        return <CustomTag key={index}>{element.value}</CustomTag>;
      })}
    </Modal>
  );
};
