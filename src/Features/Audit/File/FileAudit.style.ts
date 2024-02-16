import styled from 'styled-components';

export const FileAuditStyled = styled.div`
  .MuiCard-root {
    width: ${({ theme }) => theme.breakpoint.xs};
  }
`;

export const FileAuditHeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.color.primary.main};
  color: ${({ theme }) => theme.color.white.main};
  font-family: ${({ theme }) => theme.font.medium.main};
  padding: ${({ theme }) => theme.spacing.small};
  text-align: center;
`;

export const FileAuditFooterStyled = styled.div`
  box-shadow: 0 -2px 4px -5px #333;
  padding: ${({ theme }) => theme.spacing.normal};

  .MuiInputBase-input {
    color: ${({ theme }) => theme.color.text.main};
    padding-left: ${({ theme }) => theme.spacing.small};
    padding-right: ${({ theme }) => theme.spacing.small};
  }
`;
