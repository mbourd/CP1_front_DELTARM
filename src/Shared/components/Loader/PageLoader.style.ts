import styled from 'styled-components';

export const PageLoaderStyled = styled.div`
  font-family: ${({ theme }) => theme.font.medium.italic};
  font-size: ${({ theme }) => theme.sizing.xLarge};
  text-align: center;

  .text-container {
    margin-top: ${({ theme }) => theme.sizing.normal};
  }
`;
