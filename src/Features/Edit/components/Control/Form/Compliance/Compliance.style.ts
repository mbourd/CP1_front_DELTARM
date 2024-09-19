import styled from 'styled-components';

export const ActionsComplianceContainer = styled.div`
  margin-top: 10px;

  & span {
    margin-top: 5px;
  }

  .resolved-complianceŒ {
    margin: 5px;
  }

  .resolved-compliance-disabled {
    margin: 5px;
    opacity: 0.5;
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
