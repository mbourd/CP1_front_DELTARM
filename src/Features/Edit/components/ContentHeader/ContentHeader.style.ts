import styled from 'styled-components';

export const ContentHeaderStyled = styled.div`
  position: sticky;
  z-index: 6;
  top: 170px;
  display: flex;
  width: inherit;
  height: auto;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 10px;
  background: ${({ theme }) => {
    const color = theme.color.white.main;

    return `linear-gradient(to bottom, ${color} 0%, ${color} 85%, transparent 100%)`;
  }};

  .right {
    width: 100%;
    text-align: right;

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
