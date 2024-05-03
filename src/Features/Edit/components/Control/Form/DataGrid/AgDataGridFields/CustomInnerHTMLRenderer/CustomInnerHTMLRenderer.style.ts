import styled from 'styled-components';

// export const CustomInnerHTMLRendererStyled = styled(TableCell)((cardColor) => ({
//   [`&.${tableCellClasses.body}`]: {
//     borderRight: `1px solid ${cardColor}`,
//     borderLeft: `1px solid ${cardColor}`,
//     textAlign: 'center',
//   },
// }));
// export const CustomInnerHTMLRendererStyled = styled(TableCell)`
//   width: 100% !important;
//   font-family: ${({ theme }) => theme.font.text.main} !important;
//   text-align: center !important;
//   border-bottom: none !important;
//   display: block !important;
//   padding: 2px !important;
//   white-space: pre-line !important;
//   word-wrap: break-word !important;
// `;
export const CustomInnerHTMLRendererStyled = styled.div`
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
