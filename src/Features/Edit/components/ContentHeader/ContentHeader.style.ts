import styled from 'styled-components/macro';

export const ContentHeaderStyled = styled.div`
  background: ${({ theme }) => {
    const color = theme.color.white.main;

    return `linear-gradient(to bottom, ${color} 0%, ${color} 85%, transparent 100%)`;
  }};
  height: auto;
  position: sticky;
  top: 170px;
  padding-top: 10px;
  z-index: 6;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: inherit;

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
