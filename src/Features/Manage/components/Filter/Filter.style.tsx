import styled from 'styled-components/macro';

export const FilterStyled = styled.section`
  padding: ${({ theme }) => theme.spacing.normal};
  width: 500px;

  .title {
    background-color: ${({ theme }) => theme.color.primary.main};
    font-family: ${({ theme }) => theme.font.medium.main};
    margin-bottom: ${({ theme }) => theme.spacing.normal};
    padding: ${({ theme }) => theme.spacing.xSmall} 0;
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
        border-right: 1px dotted ${({ theme }) => theme.color.primary.main};
        padding-right: ${({ theme }) => theme.spacing.small};
      }

      &:last-child {
        padding-left: ${({ theme }) => theme.spacing.small};
      }
    }
  }
`;

export const BadgeStyled = styled.section`
  margin-right: ${({ theme }) => theme.spacing.normal};
`;

export const FooterStyled = styled.div`
  margin-top: ${({ theme }) => theme.spacing.normal};
  text-align: right;
`;
