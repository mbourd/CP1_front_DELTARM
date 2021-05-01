import styled from 'styled-components/macro';

export const ContentHeaderStyled = styled.div`
  .right {
    text-align: right;
    width: 100%;

    .action {
      margin-right: ${({ theme }) => theme.spacing.medium};

      &:last-child {
        margin-right: ${({ theme }) => theme.spacing.none};
      }
    }
  }

  .icon-container {
    margin: 10px;
  }

  .audit-icon {
    font-size: 2.49rem;
  }

  .comment-icon,
  .audit-icon {
    &.active {
      color: ${({ theme }) => theme.color.active.main};
    }
  }

  ._Button {
    margin-right: ${({ theme }) => theme.spacing.medium};
  }

  ._Button:last-child {
    margin-right: 0;
  }
`;
