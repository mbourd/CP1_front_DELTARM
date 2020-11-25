import styled from 'styled-components/macro';

export const ErrorStyled = styled.div`
  text-align: center;

  ._Error-title {
    color: ${({ theme }) => theme.color.heading.main};
    font-family: ${({ theme }) => theme.font.heading.main};
    font-size: ${({ theme }) => theme.sizing.heading.one};
    margin: ${({ theme }) => theme.spacing.xLarge} 0;
  }

  ._Error-picture {
    display: block;
    margin: auto;
    width: 40%;
  }

  ._Error-text {
    margin-bottom: ${({ theme }) => theme.spacing.xLarge};
  }

  ._Error-message {
    font-size: ${({ theme }) => theme.sizing.large};
    line-height: 35px;
  }
`;
