import styled from 'styled-components/macro';

export const ManageStyled = styled.div`
  margin: auto;
  max-width: ${({ theme }) => theme.breakpoint.sm};

  .search-container {
    margin-bottom: ${({ theme }) => theme.spacing.normal};
  }

  .filter-and-sort-container {
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
