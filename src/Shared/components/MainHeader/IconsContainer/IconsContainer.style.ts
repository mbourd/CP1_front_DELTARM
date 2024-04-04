import styled from 'styled-components';

export const IconsContainerStyled = styled.div`
  position: absolute;
  width: 200px;
  height: 36px;
  margin: auto;
  inset: 0 0 0 5px;

  a {
    display: inline-block;
    margin: 0 ${({ theme }) => theme.spacing.medium};
    vertical-align: middle;
  }
`;
