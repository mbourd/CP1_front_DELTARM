import styled from 'styled-components';

export const FileCommentBodyStyled = styled.section`
  font-family: ${({ theme }) => theme.font.text.main};
  max-height: 400px;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.small};

  .MuiGrid-container {
    padding: ${({ theme }) => theme.spacing.small};
  }
`;
