import { MenuItem, Select } from '@mui/material';
import styled from 'styled-components/macro';

export const CustomSelectRendererStyled = styled.div`
  /* select::-ms-expand {
    display: none;
  } */
`;

// export const CustomSelectStyled = styled.select.attrs(
//   (props: { fontSize: any }) => props,
// )`
//   /* -webkit-appearance: none;
//   -moz-appearance: none; */
//   text-indent: 1px;
//   text-overflow: '';
//   width: 100%;
//   width: auto;
//   height: auto;
//   font-size: ${({ fontSize }) =>
//     fontSize ? `${fontSize}px` : '13px'} !important;
//   border: none !important;
//   outline: none !important;
//   /* padding: 10px 10px 0 0 !important; */
//   min-width: 150px;
//   min-height: 30px;
// `;
export const CustomSelectStyled = styled(Select).attrs((props: any) => {
  console.log('H#llo', props.fontSize);

  return {
    style: {
      // fontSize: `${props.fontSize}px`,
    },
  };
})`
  .MuiOutlinedInput-notchedOutline {
    border: 0;
  }
  ,
  .MuiSvgIcon-root {
  }
  ,
  .MuiSelect-select {
    padding-right: 0 !important;
  }
  /* -webkit-appearance: none;
  -moz-appearance: none; */
  text-indent: 1px;
  text-overflow: '';
  width: 100%;
  height: auto;
  border: none !important;
  outline: none !important;
  /* padding: 10px 10px 0 0 !important; */
  min-width: 150px;
  min-height: 30px;
`;

// export const OptionStyled = styled.option`
//   padding: 10px !important;
//   font-size: 13px !important;
// `;

export const OptionStyled = styled(MenuItem)`
  padding: 10px !important;
  font-size: 13px !important;
`;
