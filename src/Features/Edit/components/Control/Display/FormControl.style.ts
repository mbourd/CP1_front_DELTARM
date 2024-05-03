import styled from 'styled-components';

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
      padding: 0;
      margin: 0;

      &:last-child {
        height: 20px;
      }
    }
  }

  .control-footer {
    position: absolute;
    right: 0;
    width: auto;
    margin-top: 2px;

    .MuiGrid-item {
      padding: 0;
      margin: 0;
    }
  }
`;
