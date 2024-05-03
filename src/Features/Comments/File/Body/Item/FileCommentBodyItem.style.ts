import styled from 'styled-components';

interface IProps {
  $bgc: string;
}

export const FileCommentBodyItemStyled = styled.div<IProps>`
  .MuiGrid-item:first-child {
    padding-right: ${({ theme }) => theme.spacing.small};
  }

  .MuiAvatar-root {
    width: 40px;
    height: 40px;
    background-color: ${({ $bgc }) => $bgc};
    font-family: ${({ theme }) => theme.font.medium.main};
    line-height: 1px;
  }

  .author {
    font-family: ${({ theme }) => theme.font.medium.main};
  }

  .date {
    color: #5e514d;
    font-family: ${({ theme }) => theme.font.light.main};
  }
`;
