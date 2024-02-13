import styled from 'styled-components';

export const MainContentStyled = styled.main`
  margin: auto;
  min-height: calc(100vh - ${({ theme }) => theme.data.header.height});
  padding-bottom: ${({ theme }) => theme.sizing.xxLarge};
  width: 90%;
`;
