import styled from 'styled-components/macro';

export const ManageStyled = styled.div`
  margin: auto;
  max-width: ${({ theme }) => theme.breakpoint.sm};

  .search-container {
    align-items: center;
    border-radius: 50px;
    display: flex;
    margin-bottom: ${({ theme }) => theme.spacing.normal};

    .divider {
      height: 28px;
      margin: 4px;
    }

    .filter-icon,
    .sort-icon,
    .divider {
      margin-left: ${({ theme }) => theme.spacing.normal};
    }

    .filter-icon.active {
      color: ${({ theme }) => theme.color.primary.main};
    }
  }

  .buttons-container {
    margin-bottom: ${({ theme }) => theme.spacing.xLarge};
    text-align: right;
    text-transform: none;
    vertical-align: middle;

    .MuiSvgIcon-root,
    .MuiButton-root {
      margin-left: ${({ theme }) => theme.spacing.normal};
      vertical-align: middle;
    }
  }
`;
