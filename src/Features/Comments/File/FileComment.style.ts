import styled from 'styled-components';

export const FileCommentStyled = styled.div`
  .MuiCard-root {
    width: ${({ theme }) => theme.breakpoint.xs};
  }
`;

export const FileCommentHeaderStyled = styled.header`
  padding: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.color.primary.main};
  color: ${({ theme }) => theme.color.white.main};
  font-family: ${({ theme }) => theme.font.medium.main};
  text-align: center;
`;

export const FileCommentFooterStyled = styled.div`
  padding: ${({ theme }) => theme.spacing.normal};
  box-shadow: 0 -2px 4px -5px #333333;

  .MuiInputBase-input {
    padding-right: ${({ theme }) => theme.spacing.small};
    padding-left: ${({ theme }) => theme.spacing.small};
    color: ${({ theme }) => theme.color.text.main};
  }
`;
