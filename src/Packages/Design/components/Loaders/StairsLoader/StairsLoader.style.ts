import styled from 'styled-components';
import { IStairsLoader } from '../types';

export const StairsLoaderStyled = styled.div<IStairsLoader>`
  position: relative;
  width: 75px;
  height: 100px;
  margin: auto;
  transform: ${({ $size }) => {
    switch ($size) {
      case 'sm':
        return 'scale(0.6)';
      case 'md':
        return 'scale(0.8)';
    }

    return 'scale(1)';
  }};

  ._LoaderStairsBar {
    position: absolute;
    bottom: 0;
    width: 10px;
    height: 50%;
    background: ${({ $barsColor }) => $barsColor};
    transform-origin: center bottom;
  }

  ._LoaderStairsBar:nth-child(1) {
    left: 0;
    animation: barUp1 ${({ $speed }) => $speed}s infinite;
    transform: scale(1, 0.2);
  }

  ._LoaderStairsBar:nth-child(2) {
    left: 15px;
    animation: barUp2 ${({ $speed }) => $speed}s infinite;
    transform: scale(1, 0.4);
  }

  ._LoaderStairsBar:nth-child(3) {
    left: 30px;
    animation: barUp3 ${({ $speed }) => $speed}s infinite;
    transform: scale(1, 0.6);
  }

  ._LoaderStairsBar:nth-child(4) {
    left: 45px;
    animation: barUp4 ${({ $speed }) => $speed}s infinite;
    transform: scale(1, 0.8);
  }

  ._LoaderStairsBar:nth-child(5) {
    left: 60px;
    animation: barUp5 ${({ $speed }) => $speed}s infinite;
    transform: scale(1, 1);
  }

  ._LoaderStairsBall {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    animation: ball ${({ $speed }) => $speed}s infinite;
    background: ${({ $ballColor }) => $ballColor};
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
