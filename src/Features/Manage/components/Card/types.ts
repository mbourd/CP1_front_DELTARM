export const cardHeight = 170;
export const stateHeight = 10;
export const actionsWidth = 80;

export interface IData {
  label: string;
  value: string;
}

export interface ICard {
  id: string;
  color: string;
  comments?: number;
  data: IData[];
}
