import styled from 'styled-components';

export const GenericActionModalStyled = styled.div`
  padding: ${({ theme }) => theme.spacing.normal};

  ._Button:first-child {
    margin-right: ${({ theme }) => theme.spacing.medium};
  }

  ._Button:last-child {
    margin-right: 0;
  }
`;

export const GenericActionCommentModalStyled = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
`;
