import { TableCell } from '@mui/material';
import styled from 'styled-components';

// export const CustomTextAltRendererStyled = styled(TableCell)`
//   width: 100%;
//   /* font-family: ${({ theme }) => theme.font.text.main} !important; */
//   font-size: inherit;
//   text-align: center !important;
//   border-bottom: none !important;
//   padding: 2px !important;
//   white-space: pre-line !important;
//   word-wrap: break-word !important;
//   display: flex !important;
//   flex-direction: row !important;
//   align-items: center !important;
//   justify-content: center !important;
// `;
export const CustomTextAltRendererStyled = styled.div`
  display: block;
  width: 100%;
  padding: 2px;
  border-bottom: none;
  font-family: ${({ theme }) => theme.font.text.main};
  line-height: 17px;
  text-align: center;
  white-space: pre-line;
  word-wrap: break-word;
`;
