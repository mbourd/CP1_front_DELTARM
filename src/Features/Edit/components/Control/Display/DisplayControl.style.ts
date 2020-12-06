import styled from 'styled-components/macro';

export const DisplayControlStyled = styled.div`
  .MuiGrid-item {
    padding: ${({ theme }) => theme.spacing.normal};
  }
  ._FormError {
    padding: 0;
    position: absolute;
  }
`;
