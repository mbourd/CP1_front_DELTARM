import styled from 'styled-components';

export const AcceptValidationStyled = styled.div`
  input[type='checkbox'] {
    position: relative;
    width: 1rem;
    height: 1rem;
    margin: 10px;
    cursor: pointer;
  }

  input[type='checkbox']::before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    border: 2px solid #555555;
    border-radius: 3px;
    background-color: white;
    content: '';
  }

  input[type='checkbox']:checked::after {
    position: absolute;
    top: 2px;
    left: 6px;
    display: block;
    width: 5px;
    height: 10px;
    border: solid black;
    border-width: 0 2px 2px 0;
    content: '';
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .font {
    font-family: ${({ theme }) => theme.font.regular.main};
  }

  .card-items {
    max-height: 280px;
    overflow-y: auto;
  }
`;
