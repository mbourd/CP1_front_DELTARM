import styled from 'styled-components';
import { footerHeight, ICardFooter } from '../types';

export const FooterStyled = styled.footer<Pick<ICardFooter, 'color'>>`
  position: absolute;
  right: 0;
  bottom: 0;
  height: ${footerHeight}px;
  padding: 0 ${({ theme }) => theme.sizing.normal};
  text-align: right;
  text-transform: lowercase;

  .MuiSvgIcon-root,
  a {
    display: inline-block;
    margin-right: ${({ theme }) => theme.sizing.xSmall};
    font-family: ${({ theme }) => theme.font.text.italic};
    vertical-align: middle;
  }

  .MuiSvgIcon-root {
    margin: 0;
    color: ${({ color }) => color};
  }
`;
