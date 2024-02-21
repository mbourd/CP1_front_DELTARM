import styled from 'styled-components';

export const TabContentStyled = styled.div`
  border: 1px solid ${({ theme }) => theme.color.primary.main};
  margin-right: 1px;
  min-height: 300px;
  padding: ${({ theme }) => theme.spacing.small};
`;
