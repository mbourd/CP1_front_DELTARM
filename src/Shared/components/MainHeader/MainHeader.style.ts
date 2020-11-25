import styled from 'styled-components/macro';

export const MainHeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.color.white.main};
  box-shadow: 0 3px 4px -5px #333333;
  height: ${({ theme }) => theme.data.header.height};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  .brand {
    bottom: 0;
    display: block;
    height: ${({ theme }) => theme.spacing.large};
    left: ${({ theme }) => theme.spacing.normal};
    margin: auto;
    position: absolute;
    top: 0;
    width: 180px;

    img {
      height: 100%;
      object-fit: contain;
      width: 100%;
    }
  }

  .menu {
    bottom: 0;
    color: ${({ theme }) => theme.color.text.dark};
    cursor: pointer;
    margin: auto;
    position: absolute;
    right: ${({ theme }) => theme.spacing.normal};
    top: 0;

    &.active {
      color: ${({ theme }) => theme.color.active.main};
    }
  }
`;
