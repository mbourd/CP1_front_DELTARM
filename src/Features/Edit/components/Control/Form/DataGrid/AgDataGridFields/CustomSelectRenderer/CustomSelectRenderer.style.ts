import { MenuItem, Select } from '@mui/material';
import styled from 'styled-components';

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
export const CustomSelectStyled = styled(Select).attrs(() => {
  // console.log('H#llo', props.fontSize);

  return {
    style: {
      // fontSize: `${props.fontSize}px`,
    },
  };
})`
  margin-top: -40px !important;
  .MuiOutlinedInput-notchedOutline {
    border: 0;
  }
  .MuiSvgIcon-root {
    /* margin-top: -15px !important; */
    padding-left: 10px !important;
    padding-right: -20px !important;
  }
  .MuiSelect-select {
    padding-right: 0 !important;
    margin-left: -20px !important;
    /* margin-top: -40px !important; */
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
  min-width: 120px;
  min-height: 30px;
`;

// export const OptionStyled = styled.option`
//   padding: 10px !important;
//   font-size: 13px !important;
// `;

export const OptionStyled = styled(MenuItem)`
  padding: 10px !important;
  font-size: 13px !important;
  /* background-color: green !important; */
  /* color: white !important; */
`;
