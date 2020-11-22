import styled from 'styled-components/macro';

interface IProps {
  border: string;
  shadow: string;
  backgroundColor: string;
  radius: string;
}

export const PopperStyled = styled.div`
  .MuiCard-root {
    height: 100px;
    width: 200px;
    padding: ${({ theme }) => theme.spacing.normal};
  }
`;
