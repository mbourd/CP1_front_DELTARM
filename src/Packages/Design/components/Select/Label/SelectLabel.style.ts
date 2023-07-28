import styled from 'styled-components/macro';
import { IColor } from '../../../types';

interface IProps {
  $bdc: keyof IColor;
  $labelColor: keyof IColor;
  $bgc: keyof IColor;
  $bdr: string;
  $isOpen: boolean;
  $containerBdc: keyof IColor;
  $font_style?: any;
  $font_color?: any;
  $background?: any;
}

export const SelectLabelStyled = styled.div<IProps>`
  ._SelectLabelButton {
    border: 1px solid
      ${({ theme, $bdc, $isOpen, $containerBdc }) =>
        $isOpen ? theme.color[$containerBdc].main : theme.color[$bdc].main};
    border-bottom: 1px solid ${({ theme, $bdc }) => theme.color[$bdc].main};
    border-radius: ${({ $bdr, $isOpen }) =>
      $isOpen ? $bdr + ' ' + $bdr + ' 0 0' : $bdr};
    color: ${({ theme, $labelColor, $font_color }) =>
      $font_color ? `#${$font_color}` : theme.color[$labelColor].main};
    font-weight: ${({ $font_style }) => ($font_style ? `${$font_style}` : 0)};
    text-decoration: ${({ $font_style }) =>
      $font_style ? `${$font_style}` : 'none'};
    font-style: ${({ $font_style }) =>
      $font_style ? `${$font_style}` : 'normal'};
    background-color: ${({ $background }) =>
      $background ? `#${$background}` : 'transparent'};
    cursor: pointer;
    display: block;
    font-family: ${({ theme, $isOpen }) =>
      theme.font[$isOpen ? 'medium' : 'text'].main};
    font-size: ${({ theme }) => theme.sizing.normal};
    height: 38px;
    line-height: 29px;
    overflow: hidden;
    padding: 4px 8px;
    text-align: left;
    text-transform: none;
    width: 100%;

    .container {
      align-items: center;
      display: inline-flex;
      flex-wrap: nowrap;
      width: 100%;

      .left {
        height: 20px;
        margin-left: 8px;
        width: 20px;
      }

      .right {
        width: calc(100% - 28px);
      }
    }

    .MuiSvgIcon-root {
      color: ${({ theme, $bdc, $isOpen }) =>
        theme.color[$isOpen ? 'active' : $bdc].main};
    }
    &:hover {
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.color.hover.main};
      font-weight: ${({ $font_style }) => ($font_style ? `${$font_style}` : 0)};
      text-decoration: ${({ $font_style }) =>
        $font_style ? `${$font_style}` : 'none'};
      font-style: ${({ $font_style }) =>
        $font_style ? `${$font_style}` : 'normal'};
      background-color: ${({ $background }) =>
        $background ? `#${$background}` : '#fff'};
    }
  }
`;
