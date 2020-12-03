import styled from 'styled-components/macro';

export const NoDataStyled = styled.div`
  font-family: ${({ theme }) => theme.font.text.italic};
  font-size: ${({ theme }) => theme.sizing.large};
  text-align: center;
`;
