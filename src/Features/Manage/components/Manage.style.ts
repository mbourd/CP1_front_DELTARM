import styled from 'styled-components';

export const ManageStyled = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.sm};
  margin: auto;

  .search-container {
    display: flex;
    align-items: center;
    padding: ${({ theme }) =>
      '0 ' + theme.spacing.normal + ' 0 ' + theme.spacing.small};
    border-radius: ${({ theme }) => theme.sizing.radius};
    margin-bottom: ${({ theme }) => theme.spacing.normal};

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
    align-items: center;
    justify-content: flex-end;
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
