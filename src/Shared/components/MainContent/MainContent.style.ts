import styled from 'styled-components';

export const MainContentStyled = styled.main`
  width: 90%;
  min-height: calc(100vh - ${({ theme }) => theme.data.header.height});
  padding-bottom: ${({ theme }) => theme.sizing.xxLarge};
  margin: auto;
`;
