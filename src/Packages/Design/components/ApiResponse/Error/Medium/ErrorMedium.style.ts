import styled from 'styled-components/macro';

export const ErrorMediumStyled = styled.div`
  ._ErrorTitle {
    color: ${({ theme }) => theme.color.heading.main};
    font-family: ${({ theme }) => theme.font.heading.main};
    font-size: ${({ theme }) => theme.sizing.xLarge};
    margin: ${({ theme }) => theme.spacing.normal} 0;
  }

  ._ErrorIcon {
    margin-bottom: ${({ theme }) => theme.spacing.normal};
  }

  ._ErrorPicture {
    display: block;
    margin: auto;
    width: 22%;
  }

  ._ErrorMessage {
    font-size: ${({ theme }) => theme.sizing.normal};
    line-height: 23px;
    margin-bottom: ${({ theme }) => theme.spacing.normal};
    white-space: pre-wrap;
  }

  @media only screen and (min-width: 1800px) {
    .MuiCard-root {
      border: 1px solid ${({ theme }) => theme.color.success.main};
      height: 500px;
      align-self: center !important;
      width: 750px;
      position: relative;

      ._SelectLabelButton {
        border-bottom-color: ${({ theme }) => theme.color.success.main};
        border-width: 0 0 1px;
        cursor: default;

        .MuiSvgIcon-root {
          color: ${({ theme }) => theme.color.success.main};
        }
      }

      ._SelectItem {
        border-bottom: 1px dotted ${({ theme }) => theme.color.success.main};
      }

      ._SelectItem:last-child {
        border-bottom: none;
      }

      .footer {
        bottom: 0;
        left: 0;
        padding: ${({ theme }) => theme.spacing.normal};
        position: absolute;
        text-align: right;
        width: 100%;
      }
    }

    .card-items { margin: 20px, height: 400px, overflow-y: auto }
  }
`;
