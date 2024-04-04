import styled from 'styled-components';

export const AgGridDashboardStyled = styled.div`
  .MuiGrid-item {
    padding: ${({ theme }) => theme.sizing.xxLarge};
  }

  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: auto;
`;

export const HeaderDashDynamicFixedStyled = styled.div`
  position: sticky;
  z-index: 98;
  top: 60px;
  width: 100%;
  padding-top: 35px;
  background: ${({ theme }) => {
    const color = theme.color.background.main;

    return `linear-gradient(to bottom, ${color} 0%, ${color} 97%, transparent 100%)`;
  }};
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  width: 960px;
  margin: 1em auto;
  gap: 15px;
`;

export const MetricsContainerStyled = styled.div`
  display: flex;
  max-width: 1000px;
  flex-direction: column;
  align-items: center;
  margin: auto;

  & > span > span {
    flex-grow: 1;
  }
`;
