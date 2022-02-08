import styled from 'styled-components/macro';

export const DashboardSearchStyled = styled.div`
  margin: auto;
  position: relative;
  width: ${({ theme }) => theme.breakpoint.sm};

  .search-container {
    align-items: center;
    border-radius: ${({ theme }) => theme.sizing.radius};
    display: flex;
    margin-bottom: ${({ theme }) => theme.spacing.normal};
    padding: ${({ theme }) =>
      '0 ' + theme.spacing.normal + ' 0 ' + theme.spacing.small};
  }

  .buttons-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.small};
    text-transform: none;

    .search-mode-toggle {
      flex-grow: 1;
      padding-left: 10px;
    }
  }

  ._FormError {
    padding-left: 0;
    position: absolute;
    top: -22px;
  }
`;
