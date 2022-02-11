import styled from 'styled-components/macro';

export const ManageStyled = styled.div`
  margin: auto;
  max-width: ${({ theme }) => theme.breakpoint.sm};

  .search-container {
    align-items: center;
    border-radius: ${({ theme }) => theme.sizing.radius};
    display: flex;
    margin-bottom: ${({ theme }) => theme.spacing.normal};
    padding: ${({ theme }) =>
      '0 ' + theme.spacing.normal + ' 0 ' + theme.spacing.small};

    .divider {
      height: 28px;
      margin: 4px;
    }

    .filter-icon.active {
      color: ${({ theme }) => theme.color.active.main};
    }
  }

  .buttons-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.xLarge};
    text-transform: none;

    .search-mode-toggle {
      flex-grow: 1;
      padding-left: 10px;
    }

    .MuiButton-root {
      margin-left: ${({ theme }) => theme.spacing.normal};
    }
  }
`;
