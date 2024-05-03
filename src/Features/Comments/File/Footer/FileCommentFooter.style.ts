import styled from 'styled-components';

export const FileCommentFooterStyled = styled.div`
  padding: ${({ theme }) => theme.spacing.normal};
  box-shadow: 0 -2px 4px -5px #333333;

  .MuiInputBase-input {
    padding-right: ${({ theme }) => theme.spacing.small};
    padding-left: ${({ theme }) => theme.spacing.small};
    color: ${({ theme }) => theme.color.text.main};
  }
`;
