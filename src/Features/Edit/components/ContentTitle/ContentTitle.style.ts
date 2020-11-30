import styled from 'styled-components/macro';

export const ContentTitleStyled = styled.h2`
  background-color: ${({ theme }) => theme.color.primary.main};
  font-family: ${({ theme }) => theme.font.medium.main};
  margin: ${({ theme }) => theme.spacing.large} 0;
  padding: ${({ theme }) => theme.spacing.small} 0;
  text-align: center;
  text-transform: uppercase;
`;
