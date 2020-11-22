import styled from 'styled-components/macro';

export const SearchStyled = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xLarge};

  .search {
    padding-right: ${({ theme }) => theme.sizing.small};
  }

  .filter span {
    display: inline-block;
    margin: 0 ${({ theme }) => theme.sizing.small};
  }
`;
