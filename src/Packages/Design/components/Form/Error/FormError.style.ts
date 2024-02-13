import styled from 'styled-components';

export const FormErrorStyled = styled.span`
  color: ${({ theme }) => theme.color.error.main};
  font-family: ${({ theme }) => theme.font.medium.italic};
  font-size: ${({ theme }) => theme.sizing.small};
  margin-bottom: ${({ theme }) => theme.spacing.xSmall};
`;
