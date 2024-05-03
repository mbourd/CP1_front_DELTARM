import styled from 'styled-components';

export const ContentTitleStyled = styled.h2`
  padding: ${({ theme }) => theme.spacing.small} 0;
  margin: ${({ theme }) => theme.spacing.medium} 0;
  background-color: ${({ theme }) => theme.color.primary.main};
  font-family: ${({ theme }) => theme.font.medium.main};
  text-align: center;
  text-transform: uppercase;
`;
