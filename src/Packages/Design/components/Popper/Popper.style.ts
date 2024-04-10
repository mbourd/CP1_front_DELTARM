import styled from 'styled-components';
import { IPopper } from './types';

export const PopperStyled = styled.div<
  Pick<IPopper, '$border' | '$shadow' | '$bgc' | '$bdr'>
>`
  border: ${({ $border }) => $border};
  border-radius: ${({ $bdr }) => $bdr};
  margin-top: 5px;
  background-color: ${({ $bgc }) => $bgc};
  box-shadow: ${({ $shadow }) => $shadow};
`;
