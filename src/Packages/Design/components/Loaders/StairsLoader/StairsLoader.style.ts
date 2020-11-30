import styled from 'styled-components/macro';
import { IStairsLoader } from '../types';

export const StairsLoaderStyled = styled.div<IStairsLoader>`
  height: 100px;
  margin: auto;
  position: relative;
  width: 75px;

  ._LoaderStairsBar {
    background: ${({ barsColor }) => barsColor};
    bottom: 0;
    height: 50%;
    position: absolute;
    transform-origin: center bottom;
    width: 10px;
  }
  ._LoaderStairsBar:nth-child(1) {
    animation: barUp1 ${({ speed }) => speed}s infinite;
    left: 0;
    transform: scale(1, 0.2);
  }
  ._LoaderStairsBar:nth-child(2) {
    animation: barUp2 ${({ speed }) => speed}s infinite;
    left: 15px;
    transform: scale(1, 0.4);
  }
  ._LoaderStairsBar:nth-child(3) {
    animation: barUp3 ${({ speed }) => speed}s infinite;
    left: 30px;
    transform: scale(1, 0.6);
  }
  ._LoaderStairsBar:nth-child(4) {
    animation: barUp4 ${({ speed }) => speed}s infinite;
    left: 45px;
    transform: scale(1, 0.8);
  }
  ._LoaderStairsBar:nth-child(5) {
    animation: barUp5 ${({ speed }) => speed}s infinite;
    left: 60px;
    transform: scale(1, 1);
  }
  ._LoaderStairsBall {
    animation: ball ${({ speed }) => speed}s infinite;
    background: ${({ ballColor }) => ballColor};
    border-radius: 50%;
    bottom: 10px;
    height: 10px;
    left: 0;
    position: absolute;
    width: 10px;
  }

  @keyframes ball {
    0% {
      transform: translate(0, 0);
    }
    5% {
      transform: translate(8px, -14px);
    }
    10% {
      transform: translate(15px, -10px);
    }
    17% {
      transform: translate(23px, -24px);
    }
    20% {
      transform: translate(30px, -20px);
    }
    27% {
      transform: translate(38px, -34px);
    }
    30% {
      transform: translate(45px, -30px);
    }
    37% {
      transform: translate(53px, -44px);
    }
    40% {
      transform: translate(60px, -40px);
    }
    50% {
      transform: translate(60px, 0);
    }
    57% {
      transform: translate(53px, -14px);
    }
    60% {
      transform: translate(45px, -10px);
    }
    67% {
      transform: translate(37px, -24px);
    }
    70% {
      transform: translate(30px, -20px);
    }
    77% {
      transform: translate(22px, -34px);
    }
    80% {
      transform: translate(15px, -30px);
    }
    87% {
      transform: translate(7px, -44px);
    }
    90% {
      transform: translate(0, -40px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @keyframes barUp1 {
    0% {
      transform: scale(1, 0.2);
    }
    40% {
      transform: scale(1, 0.2);
    }
    50% {
      transform: scale(1, 1);
    }
    90% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 0.2);
    }
  }
  @keyframes barUp2 {
    0% {
      transform: scale(1, 0.4);
    }
    40% {
      transform: scale(1, 0.4);
    }
    50% {
      transform: scale(1, 0.8);
    }
    90% {
      transform: scale(1, 0.8);
    }
    100% {
      transform: scale(1, 0.4);
    }
  }
  @keyframes barUp3 {
    0% {
      transform: scale(1, 0.6);
    }
    100% {
      transform: scale(1, 0.6);
    }
  }
  @keyframes barUp4 {
    0% {
      transform: scale(1, 0.8);
    }
    40% {
      transform: scale(1, 0.8);
    }
    50% {
      transform: scale(1, 0.4);
    }
    90% {
      transform: scale(1, 0.4);
    }
    100% {
      transform: scale(1, 0.8);
    }
  }
  @keyframes barUp5 {
    0% {
      transform: scale(1, 1);
    }
    40% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1, 0.2);
    }
    90% {
      transform: scale(1, 0.2);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`;
