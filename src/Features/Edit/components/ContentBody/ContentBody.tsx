import React, { useContext } from 'react';
import { ContentBodyStyled } from './ContentBody.styled';
import { EditValidationContext } from 'Features';
import { ContentHeader } from '../ContentHeader/ContentHeader';
import { FormControls } from '../Control';
export const ContentBody: React.FC<
  React.PropsWithChildren<unknown>
> = (): React.ReactElement | null => {
  const { data } = useContext(EditValidationContext);

  if (!data) {
    return null;
  }

  return (
    <>
      <ContentHeader />
      <ContentBodyStyled>
        <FormControls
          chapters={data?.currentSection.chapters}
          context={data.context}
        />
      </ContentBodyStyled>
    </>
  );
};
