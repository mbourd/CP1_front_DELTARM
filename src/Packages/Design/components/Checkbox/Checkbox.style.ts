import styled from 'styled-components';

export const CheckboxStyled = styled.div`
  position: relative;

  ._CheckboxContainer {
    background-color: ${({ theme }) => theme.color.white.main};
    border-top: none;
    position: absolute;
    width: 100%;
    z-index: 10;
  }
`;
