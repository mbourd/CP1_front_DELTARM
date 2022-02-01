import styled from 'styled-components/macro';

export const UploadControlStyled = styled.div`
  position: relative;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.3em;
  display: flex;

  .MuiSvgIcon-root:hover {
    color: inherit;
    cursor: inherit;
  }
`;

export const DownloadFile = styled.a`
  margin: 5px;
`;
