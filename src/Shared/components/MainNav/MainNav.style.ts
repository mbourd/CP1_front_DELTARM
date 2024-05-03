import styled from 'styled-components';

export const MainNavStyled = styled.div`
  padding: 2px;

  .MuiList-root {
    padding: 0;
    margin: 0;

    .MuiListItem-root {
      border-bottom: 1px dotted ${({ theme }) => theme.color.primary.main};
      text-decoration: none;

      .MuiListItemText-root {
        margin-left: ${({ theme }) => theme.spacing.small};
      }

      .MuiSvgIcon-root,
      .MuiTypography-root {
        color: ${({ theme }) => theme.color.text.main};
        font-family: ${({ theme }) => theme.font.medium.main};
      }

      &:hover {
        background-color: rgb(255 205 0 / 10%);
      }

      &:first-child {
        border-bottom: none;
        background-color: ${({ theme }) => theme.color.secondary.main};
        color: ${({ theme }) => theme.color.white.main};

        .MuiSvgIcon-root,
        .MuiTypography-root {
          color: ${({ theme }) => theme.color.white.main};
          cursor: default;
          text-transform: uppercase;
        }
      }

      &:last-child {
        .MuiSvgIcon-root,
        .MuiTypography-root {
          color: #e11d74;
        }
      }
    }
  }
`;
