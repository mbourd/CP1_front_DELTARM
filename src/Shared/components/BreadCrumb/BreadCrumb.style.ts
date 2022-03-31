import styled from 'styled-components/macro';

export const BreadCrumbStyled = styled.div`
  background-color: ${({ theme }) => theme.color.background.main};
  left: 0;
  margin-top: 0;
  padding: ${({ theme }) => theme.spacing.small};
  position: fixed;
  top: ${({ theme }) => theme.data.header.height};
  z-index: 99;
  width: 25%;

  .MuiGrid-item {
    padding: 0 ${({ theme }) => theme.spacing.small};

    svg,
    a,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    span,
    a {
      margin-left: ${({ theme }) => theme.spacing.xSmall};
    }

    .MuiSvgIcon-root:hover {
      color: inherit;
      cursor: default;
    }

    &:last-child {
      cursor: default;
      font-family: ${({ theme }) => theme.font.medium.main};
    }
  }
`;
