import styled from 'styled-components/macro';

export const ErrorStyled = styled.div`
  text-align: center;

  ._ErrorTitle {
    color: ${({ theme }) => theme.color.heading.main};
    font-family: ${({ theme }) => theme.font.heading.main};
    font-size: ${({ theme }) => theme.sizing.heading.one};
    margin: ${({ theme }) => theme.spacing.xLarge} 0;
  }

  ._ErrorPicture {
    display: block;
    margin: auto;
    width: 40%;
  }

  ._ErrorText {
    margin-bottom: ${({ theme }) => theme.spacing.xLarge};
  }

  ._ErrorMessage {
    font-size: ${({ theme }) => theme.sizing.large};
    line-height: 35px;
  }
`;
