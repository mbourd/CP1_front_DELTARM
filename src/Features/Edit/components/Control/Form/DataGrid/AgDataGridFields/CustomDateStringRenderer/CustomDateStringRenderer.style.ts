import styled from 'styled-components';

export const CustomDateStringRendererStyled = styled.div`
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
