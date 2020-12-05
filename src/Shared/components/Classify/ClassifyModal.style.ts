import styled from 'styled-components/macro';

export const ModalFooterStyled = styled.div`
  padding: ${({ theme }) => theme.spacing.normal};

  ._Button:first-child {
    margin-right: ${({ theme }) => theme.spacing.medium};
  }

  ._Button:last-child {
    margin-right: 0;
  }
`;
