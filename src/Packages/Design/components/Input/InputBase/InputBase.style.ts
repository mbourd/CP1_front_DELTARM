import styled from 'styled-components/macro';
import { makeStyles, Theme } from '@material-ui/core';

interface IProps {
  borderSize: number;
  bgc: string;
  fontColor: string;
  bdr: string;
}

interface IUseStylesProps {
  fontFamily: string;
  fontColor: string;
}

export const useStyles = makeStyles<Theme, IUseStylesProps>({
  input: {
    fontFamily: ({ fontFamily }) => fontFamily,
    color: ({ fontColor }) => fontColor,
  },
});

export const InputBaseStyled = styled.label<IProps>`
  align-items: center;
  background-color: ${({ bgc }) => bgc};
  border: ${({ borderSize }) => borderSize}px solid ${({ fontColor }) => fontColor};
  border-radius: ${({ bdr }) => bdr};
  display: flex;

  .MuiSvgIcon-root {
    color: ${({ fontColor }) => fontColor};
    cursor: pointer;
  }

  .MuiInputBase-root,
  .MuiTextField-root {
    .MuiInput-underline:hover:not(.Mui-disabled):before {
      border: none;
    }

    .MuiInput-underline.Mui-disabled:before,
    .MuiInput-underline:before {
      border: none;
    }

    .MuiInputBase-root,
    .MuiInputBase-input {
      background-color: transparent;
    }

    color: ${({ fontColor }) => fontColor};
    padding: 0 ${({ theme }) => theme.spacing.xSmall};
    width: 100%;
  }

  &._Input-success {
    border: 1px solid ${({ theme }) => theme.color.success.main};

    .MuiSvgIcon-root {
      color: ${({ theme }) => theme.color.success.main};
    }
  }

  &._Input-warning {
    border: 1px solid ${({ theme }) => theme.color.warning.main};

    .MuiSvgIcon-root {
      color: ${({ theme }) => theme.color.warning.main};
    }
  }

  &._Input-info {
    border: 1px solid ${({ theme }) => theme.color.info.main};

    .MuiSvgIcon-root {
      color: ${({ theme }) => theme.color.info.main};
    }
  }

  &._Input-error {
    border: 1px solid ${({ theme }) => theme.color.error.main};

    .MuiSvgIcon-root {
      color: ${({ theme }) => theme.color.error.main};
    }
  }
`;
