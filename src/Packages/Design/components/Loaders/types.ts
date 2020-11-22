export interface IStairsLoader {
  barsColor: string;
  ballColor?: string;
  /**
   * Animation speed in second.
   * @default 4
   */
  speed?: number;
}

export interface ITextShineLoader {
  text: string;
  /**
   * Gradient colors. Provide a least two colors.
   * @default ['#000000', '#FFFFFF']
   */
  colors?: string[];
  /**
   * Animation speed in second.
   * @default 4
   */
  speed?: number;
}
