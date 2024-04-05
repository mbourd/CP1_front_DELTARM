import styled from 'styled-components';

export const ErrorSmallStyled = styled.div`
  text-align: center;

  ._ErrorTitle {
    margin: ${({ theme }) => theme.spacing.small} 0;
    color: ${({ theme }) => theme.color.heading.main};
    font-family: ${({ theme }) => theme.font.heading.main};
    font-size: ${({ theme }) => theme.sizing.medium};
  }

  ._ErrorIcon {
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }

  ._ErrorPicture {
    display: block;
    width: 18%;
    margin: auto;
  }

  ._ErrorMessage {
    margin-bottom: ${({ theme }) => theme.spacing.small};
    font-size: ${({ theme }) => theme.sizing.normal};
    line-height: 23px;
  }
`;
