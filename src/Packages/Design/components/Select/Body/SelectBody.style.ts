import styled from 'styled-components';

export const SelectBodyStyled = styled.ul`
  background-color: ${({ theme }) => theme.color.white.main};
  max-height: 250px;
  overflow-y: auto;

  ._SelectItem {
    border-bottom: 1px dotted ${({ theme }) => theme.color.primary.main};
    padding: 0;

    &:last-child {
      border-bottom: none;
    }
  }

  ._CheckboxRadio {
    padding: ${({ theme }) => theme.spacing.normal};
    transition: all ${({ theme }) => theme.transition.time};
    width: 100%;

    &:hover {
      background-color: ${({ theme }) => theme.color.hover.light};
    }
  }
`;
