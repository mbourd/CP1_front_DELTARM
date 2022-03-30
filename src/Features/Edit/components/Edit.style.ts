import styled from 'styled-components/macro';

export const EditStyled = styled.div`
  padding-bottom: 20vh;
  max-width: ${({ theme }) => theme.breakpoint.lg};
  margin: auto;

  .nav {
    position: relative;
    padding-top: ${({ theme }) => theme.spacing.medium};
    width: 400px;

    .MuiList-root {
      position: sticky;
      top: 310px;
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
    background-color: ${({ theme }) => theme.color.white.main};
    min-height: 600px;
    padding: ${({ theme }) => theme.spacing.medium};
    width: 100%;
  }
`;

export const EditHeaderStyled = styled.div`
  position: fixed;
  left: 0;
  height: 110px;
  right: 0;
  background: ${({ theme }) => theme.color.background.main};
  background: ${({ theme }) => {
    const color = theme.color.background.main;

    return `linear-gradient(to bottom, ${color} 0%, ${color} 65%, transparent 100%)`;
  }};
  z-index: 5;

  & + * {
    padding-top: 100px;
  }
`;

export const EditTitleFileStyled = styled.p`
  align-items: center;
  text-align: center;
  position: relative;
  margin: 10px;
  font-size: ${({ theme }) => theme.sizing.normal};
  font-family: ${({ theme }) => theme.font.heading.main};
  line-height: 40px;

  .MuiSvgIcon-root,
  span {
    color: ${({ theme }) => theme.color.heading.main};
    cursor: default;
    margin: 0 ${({ theme }) => theme.spacing.xSmall};

    &:hover {
      color: ${({ theme }) => theme.color.heading.main};
    }
  }
`;
