import styled from 'styled-components';

export const FileAuditBodyStyled = styled.section`
  max-height: 400px;
  padding: ${({ theme }) => theme.spacing.small};
  font-family: ${({ theme }) => theme.font.text.main};
  overflow-y: auto;

  .MuiGrid-container {
    padding: ${({ theme }) => theme.spacing.small};
  }
`;
