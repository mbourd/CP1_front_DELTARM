import styled from 'styled-components/macro';

export const FileCommentStyled = styled.div`
  .MuiCard-root {
    width: ${({ theme }) => theme.breakpoint.xs};
  }
`;

export const FileCommentHeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.color.primary.main};
  color: ${({ theme }) => theme.color.white.main};
  font-family: ${({ theme }) => theme.font.medium.main};
  padding: ${({ theme }) => theme.spacing.small};
  text-align: center;
`;
