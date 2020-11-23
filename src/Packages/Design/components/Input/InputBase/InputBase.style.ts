import styled from 'styled-components/macro';

interface IProps {
  borderSize: number;
  bgc: string;
  fontColor: string;
  radiusSize: number;
}

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
    font-family: ${({ theme }) => theme.font.text.main};
    margin-left: ${({ theme }) => theme.spacing.xSmall};
    width: 100%;
  }

  &.success {
    border: 1px solid ${({ theme }) => theme.color.success.main};

    .MuiSvgIcon-root {
      color: ${({ theme }) => theme.color.success.main};
    }
  }

  &.warning {
    border: 1px solid ${({ theme }) => theme.color.warning.main};

    .MuiSvgIcon-root {
      color: ${({ theme }) => theme.color.warning.main};
    }
  }

  &.info {
    border: 1px solid ${({ theme }) => theme.color.info.main};

    .MuiSvgIcon-root {
      color: ${({ theme }) => theme.color.info.main};
    }
  }

  &.error {
    border: 1px solid ${({ theme }) => theme.color.error.main};

    .MuiSvgIcon-root {
      color: ${({ theme }) => theme.color.error.main};
    }
  }
`;
