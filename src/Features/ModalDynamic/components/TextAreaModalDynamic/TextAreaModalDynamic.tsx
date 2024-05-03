import React, { useCallback, useEffect, useState } from 'react';
import { InputBase } from '../../../../Packages/Design/components/Input/InputBase/InputBase';
import TextareaAutosize from '@mui/material/TextareaAutosize';

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
      const dialogModalHeight =
        modalRef.current?.querySelector('[role="dialog"]')?.clientHeight ?? 0;

      // if (dialogModalHeight === 444) setNumRows(15);
      // else if (dialogModalHeight === 720) setNumRows(31);
      // else
      setNumRows(dialogModalHeight / 17 - 12);
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
      fontSize={'11px'}
      style={{ height: '100%', padding: '3px' }}
    />
  );
};

export { TextAreaModalDynamic };
