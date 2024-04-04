import styled from 'styled-components';

export const MainHeaderStyled = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.data.header.height};
  background-color: ${({ theme }) => theme.color.white.main};
  box-shadow: 0 3px 4px -5px #333333;

  .brand {
    position: relative;
    top: 0;
    bottom: 0;
    left: ${({ theme }) => theme.spacing.normal};
    display: inline-block;
    width: 180px;
    height: 100%;
    margin: auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .app-name {
    position: relative;
    bottom: ${({ theme }) => theme.spacing.xNormal};
    left: ${({ theme }) => theme.spacing.xxLarge};
    display: inline-block;
    margin: auto;
  }

  .language-option {
    position: absolute;
    top: ${({ theme }) => theme.spacing.normal};
    right: ${({ theme }) => theme.spacing.xxLarge};
    bottom: ${({ theme }) => theme.spacing.normal};
    margin: auto;
    background-color: ${({ theme }) => theme.color.white.main};
  }

  .menu-icon {
    position: absolute;
    top: 0;
    right: ${({ theme }) => theme.spacing.normal};
    bottom: 0;
    margin: auto;
    color: ${({ theme }) => theme.color.text.dark};
    cursor: pointer;

    &.active {
      color: ${({ theme }) => theme.color.active.main};
    }
  }
`;
