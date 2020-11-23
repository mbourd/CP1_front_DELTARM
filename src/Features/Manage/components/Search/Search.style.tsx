import React from 'react';
import styled from 'styled-components/macro';

export const SearchStyled = styled(({ children }) => <>{children}</>)`
  margin-bottom: ${({ theme }) => theme.spacing.xLarge};
`;
