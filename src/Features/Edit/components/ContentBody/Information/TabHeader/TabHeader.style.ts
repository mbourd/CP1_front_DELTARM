import styled from 'styled-components';

export const TabHeaderStyled = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};

  .MuiGrid-item {
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.medium.main};
    padding: ${({ theme }) => theme.spacing.medium} 0;
    text-align: center;
    text-transform: uppercase;
    transition: background-color ${({ theme }) => theme.transition.time};

    &:hover {
      background-color: ${({ theme }) => theme.color.hover.light};
    }

    &.active {
      border: 1px solid ${({ theme }) => theme.color.primary.main};
      border-bottom: none;
      color: ${({ theme }) => theme.color.active.main};
      cursor: default;
      position: relative;

      &:hover {
        background-color: transparent;
      }

      &:after {
        background-color: #fff;
        bottom: -1px;
        content: '';
        height: 1px;
        left: 0;
        position: absolute;
        width: 100%;
      }
    }
  }
`;
