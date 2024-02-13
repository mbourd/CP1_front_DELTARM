import styled from 'styled-components';

export const ErrorSmallStyled = styled.div`
  text-align: center;

  ._ErrorTitle {
    color: ${({ theme }) => theme.color.heading.main};
    font-family: ${({ theme }) => theme.font.heading.main};
    font-size: ${({ theme }) => theme.sizing.medium};
    margin: ${({ theme }) => theme.spacing.small} 0;
  }

  ._ErrorIcon {
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }

  ._ErrorPicture {
    display: block;
    margin: auto;
    width: 18%;
  }

  ._ErrorMessage {
    font-size: ${({ theme }) => theme.sizing.normal};
    line-height: 23px;
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
`;
