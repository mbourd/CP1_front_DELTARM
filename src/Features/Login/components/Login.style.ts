import styled from 'styled-components/macro';

export const LoginStyled = styled.div`
  height: calc(100vh - ${({ theme }) => theme.data.header.height});
  position: relative;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .overlay {
    background-color: rgba(121, 76, 116, 0.7);
    height: calc(100vh - ${({ theme }) => theme.data.header.height});
    padding: ${({ theme }) => theme.spacing.normal};
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
  }

  .form-container {
    bottom: 0;
    height: 400px;
    left: 0;
    margin: auto;
    max-width: 500px;
    position: absolute;
    right: 0;
    top: 0;
    width: 80%;
  }
`;

export const InputContainerStyled = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;
