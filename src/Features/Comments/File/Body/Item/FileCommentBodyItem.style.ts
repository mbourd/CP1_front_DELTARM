import styled from 'styled-components/macro';

export const FileCommentBodyItemStyled = styled.div`
  .MuiGrid-item:first-child {
    padding-right: ${({ theme }) => theme.spacing.small};
  }

  .MuiAvatar-root {
    width: 40px;
    height: 40px;
    font-family: ${({ theme }) => theme.font.medium.main};
    line-height: 1px;
  }

  .author {
    font-family: ${({ theme }) => theme.font.medium.main};
  }

  .date {
    font-family: ${({ theme }) => theme.font.light.main};
    color: ${({ theme }) => theme.color.disabled.main};
  }
`;
