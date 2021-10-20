import styled from 'styled-components/macro';

export const MainNavStyled = styled.div`
  padding: 2px;

  .MuiList-root {
    margin: 0;
    padding: 0;

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
        background-color: rgba(255, 205, 0, 0.1);
      }

      &:first-child {
        background-color: ${({ theme }) => theme.color.secondary.main};
        border-bottom: none;
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
