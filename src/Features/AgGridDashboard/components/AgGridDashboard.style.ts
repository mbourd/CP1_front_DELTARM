import styled from 'styled-components/macro';

export const AgGridDashboardStyled = styled.div`
  .MuiGrid-item {
    padding: ${({ theme }) => theme.sizing.xxLarge};
  }
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: auto;
`;

export const HeaderDashDynamicFixedStyled = styled.div`
  background: ${({ theme }) => {
    const color = theme.color.background.main;

    return `linear-gradient(to bottom, ${color} 0%, ${color} 97%, transparent 100%)`;
  }};
  position: sticky;
  top: 60px;
  z-index: 98;
  width: 100%;
  padding-top: 35px;
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
