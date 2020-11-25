import styled from 'styled-components/macro';
import { makeStyles, Theme } from '@material-ui/core';

interface IProps {
  borderSize: number;
  bgc: string;
  fontColor: string;
  radiusSize: number;
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
  border-radius: ${({ radiusSize }) => radiusSize + 'px'};
  display: flex;
  padding: ${({ theme }) => theme.spacing.xSmall};

  .MuiSvgIcon-root {
    color: ${({ fontColor }) => fontColor};
    cursor: pointer;
  }

  .MuiInputBase-root {
    width: 100%;
  }

  .MuiInputBase-root,
  .MuiInputBase-input {
    background-color: transparent};
    color: ${({ fontColor }) => fontColor};
    margin-left: ${({ theme }) => theme.spacing.xSmall};
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
