import React from 'react';
import { AppActionContextType } from 'Shared/types';

export const cardHeight = 450;
export const headerHeight = 50;
export const footerHeight = 30;

export interface ICardHeader {
  color: string;
}

export interface ICardBodyRow {
  count: number;
  text: string;
  stage: number;
  state: number;
  role: number;
  stageName: string;
  color: string;
}

export interface ICardBody {
  data: ICardBodyRow[];
}

export interface ICardFooter {
  color: string;
  state: number;
  role: number;
}

export interface ICard {
  header: ICardHeader;
  body: ICardBody;
  footer: ICardFooter;
  context: AppActionContextType;
}
