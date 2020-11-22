import styled from 'styled-components/macro';
import { footerHeight, ICardFooter } from '../types';

export const FooterStyled = styled.footer<Pick<ICardFooter, 'color'>>`
  height: ${footerHeight}px;
  padding: 0 ${({ theme }) => theme.sizing.normal};
  text-align: right;

  .MuiSvgIcon-root,
  a {
    display: inline-block;
    font-family: ${({ theme }) => theme.font.text.italic};
    margin-right: ${({ theme }) => theme.sizing.xSmall};
    vertical-align: middle;
  }

  .MuiSvgIcon-root {
    color: ${({ color }) => color};
    margin: 0;
  }
`;
