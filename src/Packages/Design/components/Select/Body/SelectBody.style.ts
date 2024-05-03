import styled from 'styled-components';

export const SelectBodyStyled = styled.ul`
  max-height: 250px;
  background-color: ${({ theme }) => theme.color.white.main};
  overflow-y: auto;

  ._SelectItem {
    padding: 0;
    border-bottom: 1px dotted ${({ theme }) => theme.color.primary.main};

    &:last-child {
      border-bottom: none;
    }
  }

  ._CheckboxRadio {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.normal};
    transition: all ${({ theme }) => theme.transition.time};

    &:hover {
      background-color: ${({ theme }) => theme.color.hover.light};
    }
  }
`;
