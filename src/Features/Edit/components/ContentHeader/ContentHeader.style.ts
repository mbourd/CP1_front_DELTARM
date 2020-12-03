import styled from 'styled-components/macro';

export const ContentHeaderStyled = styled.div`
  .right {
    text-align: right;
    width: 100%;

    .action {
      margin-right: ${({ theme }) => theme.spacing.medium};

      &:last-child {
        margin-right: ${({ theme }) => theme.spacing.none};
      }
    }
  }
`;
