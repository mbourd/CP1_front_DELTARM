import React, { useEffect } from 'react';
import './apiRoutes';
import { Button, Popper } from 'Shared/components';
import { UserCheckedIcon } from 'Styles';
import { useTrans } from 'Services';
import { SubmitForValidationStyled } from './SubmitForValidation.style';
import { ValidationPopper } from './Popper/ValidationPopper';

export const SubmitForValidation: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Edit');
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);

  //   useEffect(() => {
  //     console.log(anchorEl);
  //   }, []);

  return (
    <SubmitForValidationStyled className={'action'}>
      <Button
        color={'success'}
        type={'alt'}
        startIcon={<UserCheckedIcon />}
        onClick={(e) => {
          setAnchorEl(anchorEl ? null : e.currentTarget);
        }}
      >
        {trans('submitForValidation')}
      </Button>

      <Popper
        element={anchorEl}
        placement={'bottom-end'}
        onClickAway={() => setAnchorEl(null)}
        zIndex={2}
      >
        <ValidationPopper onClose={() => setAnchorEl(null)} />
      </Popper>
    </SubmitForValidationStyled>
  );
};
