import styled from 'styled-components/macro';

export const DisplayControlStyled = styled.div`
  .MuiGrid-item {
    padding: ${({ theme }) => theme.spacing.normal};
    position: relative;
  }
  ._FormError {
    padding: 0;
    position: absolute;
  }

  ._FormLabel {
    width: 100%;

    .MuiGrid-item {
      margin: 0;
      padding: 0;

      &:last-child {
        height: 20px;
      }
    }
  }
`;
