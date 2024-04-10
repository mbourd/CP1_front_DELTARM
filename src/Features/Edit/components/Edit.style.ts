import styled from 'styled-components';

export const EditStyled = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.lg};
  margin: 0 auto;

  .nav {
    position: relative;
    width: 400px;

    .MuiList-root {
      position: sticky;
      top: 160px;
      height: 80vh;
      overflow-y: scroll;
    }

    .MuiListItem-root {
      padding: 0;

      &:first-child {
        .item {
          border-top-width: 1px;
        }
      }
    }
  }

  .content {
    width: 100%;
    min-height: 600px;
    padding: ${({ theme }) => theme.spacing.medium};
    padding-top: 10px;
    background-color: ${({ theme }) => theme.color.white.main};
  }
`;

export const EditHeaderStyled = styled.div`
  position: fixed;
  z-index: 5;
  right: 0;
  left: 0;
  height: 110px;
  background: ${({ theme }) => theme.color.background.main};

  & + * {
    padding-top: 100px;
  }
`;

export const EditTitleFileStyled = styled.p`
  position: relative;
  width: 120%;
  height: auto;
  align-items: center;
  justify-content: center;
  margin: 5px;
  margin-top: 10px !important;
  font-family: ${({ theme }) => theme.font.heading.main};
  font-size: 1.4rem;
  line-height: 25px;
  text-align: center;

  .MuiSvgIcon-root,
  span {
    margin: 0 ${({ theme }) => theme.spacing.xSmall};
    color: ${({ theme }) => theme.color.heading.main};
    cursor: default;

    &:hover {
      color: ${({ theme }) => theme.color.heading.main};
    }
  }
`;
