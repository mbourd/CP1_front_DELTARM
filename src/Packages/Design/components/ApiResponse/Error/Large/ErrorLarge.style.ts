import styled from 'styled-components';

export const ErrorLargeStyled = styled.div`
  text-align: center;

  ._ErrorTitle {
    margin: ${({ theme }) => theme.spacing.xLarge} 0;
    color: ${({ theme }) => theme.color.heading.main};
    font-family: ${({ theme }) => theme.font.heading.main};
    font-size: ${({ theme }) => theme.sizing.heading.one};
  }

  ._ErrorIcon {
    margin-bottom: ${({ theme }) => theme.spacing.xLarge};
  }

  ._ErrorPicture {
    display: block;
    width: 40%;
    margin: auto;
  }

  ._ErrorMessage {
    margin-bottom: ${({ theme }) => theme.spacing.xLarge};
    font-size: ${({ theme }) => theme.sizing.large};
    line-height: 35px;
  }
`;
