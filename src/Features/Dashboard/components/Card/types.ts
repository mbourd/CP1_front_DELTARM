import React from 'react';

export const cardHeight = 360;
export const headerHeight = 50;
export const footerHeight = 30;

export interface ICardHeader {
  children: React.ReactNode;
  color: string;
}

export interface ICardBodyRow {
  count: number;
  text: string;
  stage: number;
  stageName: string;
  color: string;
}

export interface ICardBody {
  data: ICardBodyRow[];
}

export interface ICardFooter {
  children: React.ReactNode;
  color: string;
  state: number;
  role: number;
}

export interface ICard {
  header: ICardHeader;
  body: ICardBody;
  footer: ICardFooter;
}
