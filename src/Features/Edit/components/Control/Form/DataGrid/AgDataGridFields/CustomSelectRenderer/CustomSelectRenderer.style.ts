import styled from 'styled-components/macro';

export const CustomSelectRendererStyled = styled.div`
  select::-ms-expand {
    display: none;
  }
`;

export const CustomSelectStyled = styled.select.attrs(
  (props: { fontWeight: any }) => props,
)`
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
  width: 100%;
  font-size: 13px !important;
  width: auto;
  height: auto;
  border: none !important;
  outline: none !important;
`;

export const OptionStyled = styled.option``;
