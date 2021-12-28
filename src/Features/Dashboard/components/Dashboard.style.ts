import styled from 'styled-components/macro';

export const DashboardStyled = styled.div`
  .MuiGrid-item {
    padding: ${({ theme }) => theme.sizing.xxLarge};
  }
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: auto;
`;
