import styled from 'styled-components/macro';

export const IconsContainerStyled = styled.div`
  bottom: 0;
  height: 36px;
  left: 5px;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 290px;

  a {
    display: inline-block;
    margin: 0 ${({ theme }) => theme.spacing.medium};
    vertical-align: middle;
  }
`;
