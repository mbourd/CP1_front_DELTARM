import styled from 'styled-components/macro';

export const MainContentStyled = styled.main`
  margin: auto;
  max-width: ${({ theme }) => theme.breakpoint.md};
  min-height: calc(100vh - ${({ theme }) => theme.data.header.height});
  padding-bottom: ${({ theme }) => theme.sizing.xxLarge};
  width: 90%;
`;
