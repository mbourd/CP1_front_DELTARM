import styled from 'styled-components/macro';

export const BPIPopperStyled = styled.div`
  background-color: ${({ theme }) => theme.color.white.main};
  border: 1px solid ${({ theme }) => theme.color.primary.main};
  border-radius: ${({ theme }) => theme.sizing.radius};
  margin-top: 5px;
  padding: ${({ theme }) => theme.spacing.normal};
`;
