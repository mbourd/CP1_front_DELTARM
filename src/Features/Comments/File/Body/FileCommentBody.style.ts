import styled from 'styled-components/macro';

export const FileCommentBodyStyled = styled.section`
  font-family: ${({ theme }) => theme.font.text.main};
  padding: ${({ theme }) => theme.spacing.small};
  height: 400px;
  overflow-y: auto;

  .MuiGrid-container {
    padding: ${({ theme }) => theme.spacing.small};
  }
`;
