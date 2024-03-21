import React, { useCallback, useEffect, useState } from 'react';
import { InputBase } from '../../../../Packages/Design/components/Input/InputBase/InputBase';

type TextAreaModalDynamicType = {
  modalRef: React.RefObject<HTMLDivElement>;
  defaultValue?: string;
  fitHeightAuto?: boolean;
  selectAllOnClick?: boolean;
  keepContentFixed?: boolean;
  anyData?: Record<any, any>;
};

const TextAreaModalDynamic: React.FC<TextAreaModalDynamicType> = ({
  modalRef,
  defaultValue = '',
  fitHeightAuto,
  selectAllOnClick,
  keepContentFixed,
}) => {
  const [numRows, setNumRows] = useState(20);
  const listenerWindowResized = useCallback(() => {
    if (modalRef?.current) {
      const modalContent = modalRef.current?.querySelector('._ModalContent');
      const modalContentHeight = modalContent?.clientHeight ?? 0;

      setNumRows(Math.floor(modalContentHeight / 10) - 15);
    }
  }, [modalRef]);
  useEffect(() => {
    if (fitHeightAuto) {
      setTimeout(() => {
        listenerWindowResized();
      }, 10);
      window.addEventListener('resize', listenerWindowResized);
    }

    return () => {
      if (fitHeightAuto)
        window.removeEventListener('resize', listenerWindowResized);
    };
  }, [fitHeightAuto, listenerWindowResized]);

  return (
    <InputBase
      disabled={false}
      multiline
      multilineRows={numRows}
      fullWidth
      selectAllOnClick={selectAllOnClick}
      defaultValue={defaultValue}
      onChange={(e) => {
        if (keepContentFixed) e.currentTarget.value = defaultValue;
      }}
      onBlur={(e) => {
        if (keepContentFixed) e.currentTarget.value = defaultValue;
      }}
      onKeyPress={(e) => {
        if (keepContentFixed) e.preventDefault();
      }}
      fontFamily={'Courier'}
      fontSize={'10px'}
      style={{ height: '100%' }}
    />
  );
};

export { TextAreaModalDynamic };
