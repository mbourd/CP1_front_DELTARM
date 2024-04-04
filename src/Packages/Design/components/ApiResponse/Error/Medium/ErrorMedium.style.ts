import styled from 'styled-components';

export const ErrorMediumStyled = styled.div`
  ._ErrorTitle {
    margin: ${({ theme }) => theme.spacing.normal} 0;
    color: ${({ theme }) => theme.color.heading.main};
    font-family: ${({ theme }) => theme.font.heading.main};
    font-size: ${({ theme }) => theme.sizing.xLarge};
  }

  ._ErrorIcon {
    margin-bottom: ${({ theme }) => theme.spacing.normal};
  }

  ._ErrorPicture {
    display: block;
    width: 22%;
    margin: auto;
  }

  ._ErrorMessage {
    margin-bottom: ${({ theme }) => theme.spacing.normal};
    font-size: ${({ theme }) => theme.sizing.normal};
    line-height: 23px;
    white-space: pre-wrap;
  }

  @media only screen and (width >= 1800px) {
    .MuiCard-root {
      position: relative;
      width: 750px;
      height: 500px;
      align-self: center !important;
      border: 1px solid ${({ theme }) => theme.color.success.main};

      ._SelectLabelButton {
        border-width: 0 0 1px;
        border-bottom-color: ${({ theme }) => theme.color.success.main};
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
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: ${({ theme }) => theme.spacing.normal};
        text-align: right;
      }
    }

    .card-items {
      height: 400px;
      margin: 20px;
      overflow-y: auto;
    }
  }
`;
