import styled from 'styled-components/macro';

export const FormControlStyled = styled.div`
  .control-container {
    position: relative;
  }

  .MuiGrid-item {
    padding: 1.3rem;
  }
  ._FormError {
    padding: 0;
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

  .control-footer {
    margin-top: 2px;
    position: absolute;
    right: 0;
    width: auto;

    .MuiGrid-item {
      margin: 0;
      padding: 0;
    }
  }
`;
