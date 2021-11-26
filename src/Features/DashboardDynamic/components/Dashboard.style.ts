import styled from 'styled-components/macro';

export const DashboardStyled = styled.div`
  padding-top: 2.6rem;
  .MuiGrid-item {
    padding: ${({ theme }) => theme.sizing.xxLarge};
  }
`;

export const ButtonContainerStyled = styled.div`
  width: 960px;
  margin: 1em auto;
  display: flex;
  gap: 15px;
`;

export const MetricsContainerStyled = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  & > span > span {
    flex-grow: 1;
  }
`;
