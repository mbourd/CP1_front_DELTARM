import styled from 'styled-components';
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
    display: block;
    overflow: hidden;
    width: 100%;
    height: 38px;
    padding: 4px 8px;
    border: 1px solid
      ${({ theme, $bdc, $isOpen, $containerBdc }) =>
        $isOpen ? theme.color[$containerBdc].main : theme.color[$bdc].main};
    border-radius: ${({ $bdr, $isOpen }) =>
      $isOpen ? $bdr + ' ' + $bdr + ' 0 0' : $bdr};
    border-bottom: 1px solid ${({ theme, $bdc }) => theme.color[$bdc].main};
    background-color: ${({ $background }) =>
      $background ? `#${$background}` : 'transparent'};
    color: ${({ theme, $labelColor, $font_color }) =>
      $font_color ? `#${$font_color}` : theme.color[$labelColor].main};
    cursor: pointer;
    font-family: ${({ theme, $isOpen }) =>
      theme.font[$isOpen ? 'medium' : 'text'].main};
    font-size: ${({ theme }) => theme.sizing.normal};
    font-style: ${({ $font_style }) =>
      $font_style ? `${$font_style}` : 'normal'};
    font-weight: ${({ $font_style }) => ($font_style ? `${$font_style}` : 0)};
    line-height: 29px;
    text-align: left;
    text-decoration: ${({ $font_style }) =>
      $font_style ? `${$font_style}` : 'none'};
    text-transform: none;

    .container {
      display: inline-flex;
      width: 100%;
      flex-wrap: nowrap;
      align-items: center;

      .left {
        width: 20px;
        height: 20px;
        margin-left: 8px;
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
      border: 1px solid ${({ theme }) => theme.color.hover.main};
      background-color: ${({ $background }) =>
        $background ? `#${$background}` : '#fff'};
      font-style: ${({ $font_style }) =>
        $font_style ? `${$font_style}` : 'normal'};
      font-weight: ${({ $font_style }) => ($font_style ? `${$font_style}` : 0)};
      text-decoration: ${({ $font_style }) =>
        $font_style ? `${$font_style}` : 'none'};
    }
  }
`;
