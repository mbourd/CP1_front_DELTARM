import styled from 'styled-components';

export const BreadCrumbStyled = styled.div`
  position: fixed;
  z-index: 99;
  top: ${({ theme }) => theme.data.header.height};
  left: 0;
  width: 25%;
  padding: ${({ theme }) => theme.spacing.small};
  margin-top: 0;
  background-color: ${({ theme }) => theme.color.background.main};

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
