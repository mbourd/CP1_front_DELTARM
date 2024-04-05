import styled from 'styled-components';

export const SearchBarStyled = styled.div`
  position: relative;
  width: ${({ theme }) => theme.breakpoint.sm};
  margin: auto;

  .search-container {
    display: flex;
    align-items: center;
    border-radius: ${({ theme }) => theme.sizing.radius};
    margin-bottom: ${({ theme }) => theme.spacing.normal};
  }

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: ${({ theme }) => theme.spacing.small};
    text-transform: none;

    .search-mode-toggle {
      flex-grow: 1;
      padding-left: 10px;
    }
  }

  ._FormError {
    position: absolute;
    top: -22px;
    padding-left: 0;
  }
`;
