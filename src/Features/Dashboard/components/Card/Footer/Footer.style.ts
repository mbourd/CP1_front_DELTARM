import styled from 'styled-components';
import { footerHeight, ICardFooter } from '../types';

export const FooterStyled = styled.footer<Pick<ICardFooter, 'color'>>`
  bottom: 0;
  height: ${footerHeight}px;
  padding: 0 ${({ theme }) => theme.sizing.normal};
  position: absolute;
  right: 0;
  text-align: right;
  text-transform: lowercase;

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
