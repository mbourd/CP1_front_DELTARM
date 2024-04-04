import styled from 'styled-components';

export const FilterStyled = styled.section`
  width: 500px;
  padding: ${({ theme }) => theme.spacing.normal};

  .title {
    padding: ${({ theme }) => theme.spacing.xSmall} 0;
    margin-bottom: ${({ theme }) => theme.spacing.normal};
    background-color: ${({ theme }) => theme.color.primary.main};
    font-family: ${({ theme }) => theme.font.medium.main};
    text-align: center;
  }

  .MuiGrid-container {
    .MuiGrid-root {
      height: 300px;
      overflow-y: auto;

      div {
        margin-bottom: ${({ theme }) => theme.spacing.xSmall};

        &:last-child {
          margin-bottom: 0;
        }
      }

      &:first-child {
        padding-right: ${({ theme }) => theme.spacing.small};
        border-right: 1px dotted ${({ theme }) => theme.color.primary.main};
      }

      &:last-child {
        padding-left: ${({ theme }) => theme.spacing.small};
      }
    }
  }

  footer {
    display: flex;
    justify-content: flex-end;
    padding-top: ${({ theme }) => theme.spacing.normal};

    & > * + * {
      margin-left: ${({ theme }) => theme.spacing.normal};
    }
  }
`;

export const BadgeStyled = styled.section`
  display: flex;
  height: 24px;
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing.small};
`;

export const FooterStyled = styled.div`
  margin-top: ${({ theme }) => theme.spacing.normal};
  text-align: right;
`;
