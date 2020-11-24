import styled from 'styled-components/macro';

export const ErrorStyled = styled.div`
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.color.heading.main};
    font-family: ${({ theme }) => theme.font.heading.main};
    font-size: ${({ theme }) => theme.sizing.heading.one};
    margin: ${({ theme }) => theme.spacing.xLarge} 0;
  }

  img {
    display: block;
    margin: auto;
    width: 40%;
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.xLarge};
  }

  .message {
    font-size: ${({ theme }) => theme.sizing.large};
    line-height: 35px;
  }
`;
