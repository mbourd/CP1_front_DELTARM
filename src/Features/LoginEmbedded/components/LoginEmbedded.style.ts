import styled from 'styled-components';

export const LoginEmbeddedStyled = styled.div`
  position: relative;
  height: calc(100vh - ${({ theme }) => theme.data.header.height});
`;
