import styled from 'styled-components/macro';

export const ErrorMediumStyled = styled.div`
  text-align: center;

  ._ErrorTitle {
    color: ${({ theme }) => theme.color.heading.main};
    font-family: ${({ theme }) => theme.font.heading.main};
    font-size: ${({ theme }) => theme.sizing.xLarge};
    margin: ${({ theme }) => theme.spacing.normal} 0;
  }

  ._ErrorIcon {
    margin-bottom: ${({ theme }) => theme.spacing.normal};
  }

  ._ErrorPicture {
    display: block;
    margin: auto;
    width: 22%;
  }

  ._ErrorMessage {
    font-size: ${({ theme }) => theme.sizing.normal};
    line-height: 23px;
    margin-bottom: ${({ theme }) => theme.spacing.normal};
  }
`;
