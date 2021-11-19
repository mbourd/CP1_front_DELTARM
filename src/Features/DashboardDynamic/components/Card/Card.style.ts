import styled from 'styled-components/macro';
import { cardHeight } from './types';
import { TableCell, tableCellClasses } from '@mui/material';

interface IProps {
  cardColor: string;
}

export const CardStyled = styled.section<IProps>`
  display: block;
  max-width: 1000px;
  margin: 0 auto;
  .MuiCard-root {
    border: ${({ cardColor }) => cardColor};
    position: relative;
    height: ${cardHeight}px;
  }
`;

export const StyledTableCell = styled(TableCell)((cardColor) => ({
  [`&.${tableCellClasses.body}`]: {
    borderRight: `1px solid ${cardColor}`,
    borderBottom: `1px solid ${cardColor}`,
    borderLeft: `1px solid ${cardColor}`,
    textAlign: 'center',
  },
}));
