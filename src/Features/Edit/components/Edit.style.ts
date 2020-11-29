import styled from 'styled-components/macro';

export const EditStyled = styled.div`
  .nav {
    padding-top: ${({ theme }) => theme.spacing.medium};
    width: 400px;

    .MuiListItem-root {
      padding: 0;

      &:first-child {
        .item {
          border-top-width: 1px;
        }
      }
    }
  }

  .content {
    background-color: ${({ theme }) => theme.color.white.main};
    min-height: 600px;
    padding: ${({ theme }) => theme.spacing.medium};
    width: 100%;
  }
`;

export const EditTitleFileStyled = styled.p`
  align-items: center;
  display: inline-flex;
  font-size: ${({ theme }) => theme.sizing.normal};

  .MuiSvgIcon-root,
  span {
    color: ${({ theme }) => theme.color.heading.main};
    cursor: default;
    margin: 0 ${({ theme }) => theme.spacing.xSmall};

    &:hover {
      color: ${({ theme }) => theme.color.heading.main};
    }
  }
`;
