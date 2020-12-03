import React, { useState } from 'react';
import './apiRoutes';
import { Button } from 'Shared/components';
import { UserCheckedIcon } from 'Styles';
import { useTrans } from 'Services';
import { SubmitForValidationStyled } from './SubmitForValidation.style';
import { ValidationModal } from './ValidationModal';

export const SubmitForValidation: React.FC = (): React.ReactElement => {
  const [trans] = useTrans('Edit');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SubmitForValidationStyled className={'action'}>
      <Button
        color={'success'}
        type={'alt'}
        startIcon={<UserCheckedIcon />}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        {trans('submitForValidation')}
      </Button>
      {isModalOpen ? <ValidationModal open={isModalOpen} onClose={() => setIsModalOpen(false)} /> : null}
    </SubmitForValidationStyled>
  );
};
