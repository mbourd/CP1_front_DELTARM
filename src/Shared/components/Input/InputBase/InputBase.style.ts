import styled from 'styled-components/macro';

interface IProps {
  border: number;
  background: string;

  color: string;
  spacing: string;
  font: string;
  radius: string | boolean;
}

export const InputBaseStyled = styled.label<IProps>`
  align-items: center;
  background-color: ${({ background }) => background};
  border: ${({ border }) => border}px solid ${({ color }) => color};
  border-radius: ${({ radius }) => radius as string};
  display: flex;
  padding: ${({ spacing }) => spacing};

  .MuiSvgIcon-root {
    color: ${({ color }) => color};
    cursor: pointer;
  }

  .MuiInputBase-root {
    color: ${({ color }) => color};
    width: 100%;
  }

  .MuiInputBase-input {
    background-color: transparent;
    border-radius: ${({ radius }) => radius as string};
    color: ${({ color }) => color};
    flex: 1;
    font-family: ${({ font }) => font};
    margin-left: ${({ spacing }) => spacing};
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
