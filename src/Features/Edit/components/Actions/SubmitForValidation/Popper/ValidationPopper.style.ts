import styled from 'styled-components';

export const ValidationPopperStyled = styled.div`
  .MuiCard-root {
    border: 1px solid ${({ theme }) => theme.color.success.main};
    height: 400px;
    align-self: center !important;
    width: 650px;
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

  input[type='checkbox'] {
    position: relative;
    cursor: pointer;
    margin: 10px;
    width: 1rem;
    height: 1rem;
  }

  input[type='checkbox']::before {
    content: '';
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    border: 2px solid #555555;
    border-radius: 3px;
    background-color: white;
  }

  input[type='checkbox']:checked::after {
    content: '';
    display: block;
    width: 5px;
    height: 10px;
    border: solid black;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 6px;
  }

  .font {
    font-family: ${({ theme }) => theme.font.regular.main};
  }

  .card-items {
    margin: 20px;
    height: 300px;
    overflow-y: auto;
  }

  @media only screen and (width >= 1800px) {
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

    .card-items {
      margin: 20px;
      height: 400px;
      overflow-y: auto;
    }
  }
`;
