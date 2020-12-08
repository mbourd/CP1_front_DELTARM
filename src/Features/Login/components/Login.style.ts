import styled from 'styled-components/macro';

export const LoginStyled = styled.div`
  height: calc(100vh - ${({ theme }) => theme.data.header.height});
  position: relative;
`;
