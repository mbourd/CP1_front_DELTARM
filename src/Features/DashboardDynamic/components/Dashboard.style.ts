import styled from 'styled-components/macro';

export const DashboardStyled = styled.div`
  .MuiGrid-item {
    padding: ${({ theme }) => theme.sizing.xxLarge};
  }
`;

export const ButtonContainerStyled = styled.div`
  width: 960px;
  margin: auto;
  display: flex;
  gap: 15px;
`;

export const MetricsContainerStyled = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;
