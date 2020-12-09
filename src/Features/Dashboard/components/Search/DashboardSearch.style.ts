import styled from 'styled-components/macro';

export const DashboardSearchStyled = styled.div`
  margin: auto;
  position: relative;
  width: ${({ theme }) => theme.breakpoint.sm};

  .search-container {
    align-items: center;
    border-radius: ${({ theme }) => theme.sizing.radius};
    display: flex;
    margin-bottom: ${({ theme }) => theme.spacing.normal};
    padding: ${({ theme }) => '0 ' + theme.spacing.normal + ' 0 ' + theme.spacing.small};
  }

  .buttons-container {
    margin-bottom: ${({ theme }) => theme.spacing.small};
    text-align: right;
    text-transform: none;
    vertical-align: middle;
  }

  ._FormError {
    padding-left: 0;
    position: absolute;
    top: -22px;
  }
`;
