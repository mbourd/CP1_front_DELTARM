import styled from 'styled-components/macro';

export const CustomDateStringRendererStyled = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.font.text.main};
  text-align: center;
  border-bottom: none;
  display: block;
  padding: 2px;
  white-space: pre-line;
  word-wrap: break-word;
`;
