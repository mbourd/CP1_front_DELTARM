import styled from 'styled-components';

export const ModalDynamicStyled = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xxLarge};
  font-weight: bold;
  line-height: ${({ theme }) => theme.sizing.xLarge};
`;

export const ModalDynamicFooterStyled = styled.div`
  margin: ${({ theme }) => theme.spacing.normal};

  ._Message {
    margin-right: ${({ theme }) => theme.spacing.medium};
    font-size: 0.9rem;
  }

  ._Button {
    margin-right: ${({ theme }) => theme.spacing.medium};
  }

  ._Button:last-child {
    margin-right: 0;
  }
`;

export const ModalDynamicContentStyled = styled.div`
  max-height: 320px;
  margin: 0 15px;
  overflow-y: scroll;

  .top-message,
  .bottom-message {
    margin: ${({ theme }) => theme.spacing.normal} 0;
    font-weight: bold;
  }

  .file-info {
    margin: 0 ${({ theme }) => theme.spacing.normal};
  }

  .product-list {
    margin: ${({ theme }) => theme.spacing.large}
      ${({ theme }) => theme.spacing.normal};
  }

  .missing-fields {
    margin: ${({ theme }) => theme.spacing.large}
      ${({ theme }) => theme.spacing.normal};

    .missing-field {
      display: inline-block;
      margin: ${({ theme }) => theme.spacing.normal};
    }
  }

  .MuiGrid-item {
    padding: ${({ theme }) => theme.spacing.small} 0;
  }

  .span {
    margin-right: ${({ theme }) => theme.spacing.large};
  }
`;
