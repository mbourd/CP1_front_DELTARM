import styled from 'styled-components';

export const TabHeaderStyled = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};

  .MuiGrid-item {
    padding: ${({ theme }) => theme.spacing.medium} 0;
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.medium.main};
    text-align: center;
    text-transform: uppercase;
    transition: background-color ${({ theme }) => theme.transition.time};

    &:hover {
      background-color: ${({ theme }) => theme.color.hover.light};
    }

    &.active {
      position: relative;
      border: 1px solid ${({ theme }) => theme.color.primary.main};
      border-bottom: none;
      color: ${({ theme }) => theme.color.active.main};
      cursor: default;

      &:hover {
        background-color: transparent;
      }

      &::after {
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #ffffff;
        content: '';
      }
    }
  }
`;
