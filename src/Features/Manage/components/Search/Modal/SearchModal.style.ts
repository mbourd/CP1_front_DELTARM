import styled from 'styled-components/macro';

export const SearchModalStyled = styled.div`
  font-weight: bold;
  line-height: ${({ theme }) => theme.sizing.xLarge};
  margin-top: ${({ theme }) => theme.spacing.xxLarge};
`;

export const SearchModalFooterStyled = styled.div`
  margin: ${({ theme }) => theme.spacing.normal};

  ._Button {
    margin-right: ${({ theme }) => theme.spacing.medium};
  }

  ._Button:last-child {
    margin-right: 0;
  }
`;

export const SearchModalBPIContentStyled = styled.div`
  .top-message,
  .bottom-message {
    font-weight: bold;
    margin: ${({ theme }) => theme.spacing.normal} 0;
  }

  .file-info {
    margin: 0 ${({ theme }) => theme.spacing.normal};
  }

  .product-list {
    margin: ${({ theme }) => theme.spacing.large} ${({ theme }) => theme.spacing.normal};
  }

  .missing-fields {
    margin: ${({ theme }) => theme.spacing.large} ${({ theme }) => theme.spacing.normal};
    .missing-field {
      margin: ${({ theme }) => theme.spacing.normal};
      display: inline-block;
    }
  }

  .MuiGrid-item {
    padding: ${({ theme }) => theme.spacing.small} 0;
  }

  .span {
    margin-right: ${({ theme }) => theme.spacing.large};
  }
`;
