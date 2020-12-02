import styled from 'styled-components/macro';

export const SearchStyled = styled.div`
  width: 100%;

  ._BPIInputBase {
    margin: 0;

    input {
      font-family: ${({ theme }) => theme.font.regular.main};
      font-weight: bold;
    }
  }
`;
