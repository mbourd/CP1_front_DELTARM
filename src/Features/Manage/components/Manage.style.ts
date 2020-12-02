import styled from 'styled-components/macro';

export const ManageStyled = styled.div`
  margin: auto;
  max-width: ${({ theme }) => theme.breakpoint.sm};

  .search-container {
    align-items: center;
    border-radius: ${({ theme }) => theme.sizing.radius};
    display: flex;
    margin-bottom: ${({ theme }) => theme.spacing.normal};
    padding: ${({ theme }) => '0 ' + theme.spacing.normal + ' 0 ' + theme.spacing.small};

    .divider {
      height: 28px;
      margin: 4px;
    }

    .filter-icon.active {
      color: ${({ theme }) => theme.color.active.main};
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
