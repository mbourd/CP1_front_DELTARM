import styled from 'styled-components';

export const IconsContainerStyled = styled.div`
  inset: 0 0 0 5px;
  height: 36px;
  margin: auto;
  position: absolute;
  width: 200px;

  a {
    display: inline-block;
    margin: 0 ${({ theme }) => theme.spacing.medium};
    vertical-align: middle;
  }
`;
