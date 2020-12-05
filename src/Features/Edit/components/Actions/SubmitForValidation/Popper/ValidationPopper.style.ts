import styled from 'styled-components/macro';

export const ValidationPopperStyled = styled.div`
  .MuiCard-root {
    border: 1px solid ${({ theme }) => theme.color.success.main};
    height: 365px;
    position: relative;
    width: ${({ theme }) => theme.breakpoint.xs};

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
`;
