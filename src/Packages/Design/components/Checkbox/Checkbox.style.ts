import styled from 'styled-components';

export const CheckboxStyled = styled.div`
  position: relative;

  ._CheckboxContainer {
    position: absolute;
    z-index: 10;
    width: 100%;
    border-top: none;
    background-color: ${({ theme }) => theme.color.white.main};
  }
`;
