import styled from 'styled-components/macro';

export const ContentHeaderStyled = styled.div`
  //border: 1px solid red;

  .right {
    width: 100%;
    text-align: right;

    ._Button {
      margin-right: ${({ theme }) => theme.spacing.medium};

      &:last-child {
        margin-right: ${({ theme }) => theme.spacing.none};
      }
    }
  }
`;
