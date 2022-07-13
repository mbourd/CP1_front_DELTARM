import styled from 'styled-components/macro';

export const ActionsComplianceContainer = styled.div`
  margin-top: 10px;
  & span {
    margin-top: 5px;
  }
  .resolved-compliance {
    margin: 5px;
  }
`;

export const FormComplianceContainer = styled.div`
  .control-container {
    position: relative;
  }

  .MuiGrid-item {
    padding: 0.5rem;
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
