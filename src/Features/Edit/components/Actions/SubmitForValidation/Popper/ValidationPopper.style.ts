import styled from 'styled-components';

export const ValidationPopperStyled = styled.div`
  .MuiCard-root {
    position: relative;
    width: 650px;
    height: 400px;
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

  input[type='checkbox'] {
    position: relative;
    width: 1rem;
    height: 1rem;
    margin: 10px;
    cursor: pointer;
  }

  input[type='checkbox']::before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    border: 2px solid #555555;
    border-radius: 3px;
    background-color: white;
    content: '';
  }

  input[type='checkbox']:checked::after {
    position: absolute;
    top: 2px;
    left: 6px;
    display: block;
    width: 5px;
    height: 10px;
    border: solid black;
    border-width: 0 2px 2px 0;
    content: '';
    transform: rotate(45deg);
  }

  .font {
    font-family: ${({ theme }) => theme.font.regular.main};
  }

  .card-items {
    height: 300px;
    margin: 20px;
    overflow-y: auto;
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
