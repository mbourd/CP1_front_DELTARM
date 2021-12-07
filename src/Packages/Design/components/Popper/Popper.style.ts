import styled from 'styled-components/macro';
import { IPopper } from './types';

export const PopperStyled = styled.div<
  Pick<IPopper, 'border' | 'shadow' | 'bgc' | 'bdr'>
>`
  background-color: ${({ bgc }) => bgc};
  border: ${({ border }) => border};
  border-radius: ${({ bdr }) => bdr};
  box-shadow: ${({ shadow }) => shadow};
  margin-top: 5px;
`;
