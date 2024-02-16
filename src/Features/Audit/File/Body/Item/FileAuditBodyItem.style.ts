import styled from 'styled-components';

export const FileAuditBodyItemStyled = styled.div`
  .MuiGrid-item:first-child {
    padding-right: ${({ theme }) => theme.spacing.small};
  }

  .MuiAvatar-root {
    font-family: ${({ theme }) => theme.font.medium.main};
    height: 40px;
    line-height: 1px;
    width: 40px;
  }

  .author {
    font-family: ${({ theme }) => theme.font.medium.main};
  }

  .date {
    color: #5e514d;
    font-family: ${({ theme }) => theme.font.light.main};
  }
`;
