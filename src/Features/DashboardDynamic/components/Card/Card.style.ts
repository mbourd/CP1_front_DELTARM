import styled from 'styled-components';
import { cardHeight } from './types';
import { TableCell, tableCellClasses } from '@mui/material';

interface IProps {
  $cardColor: string;
}

export const CardStyled = styled.section<IProps>`
  display: block;
  max-width: ${({ theme }) => theme.breakpoint.md};
  border-radius: 4px;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.font.text.main};

  .MuiCard-root {
    position: relative;
    height: ${cardHeight}px;
    border: ${({ $cardColor }) => $cardColor};
  }

  .ag-header-cell-label {
    justify-content: center;
  }

  .ag-center-cols-clipper,
  .ag-center-cols-container {
    min-height: 42px !important;
  }

  .ReactVirtualized__Table__headerRow {
    height: auto !important;
  }
`;

export const StyledTableCell = styled(TableCell)((cardColor) => ({
  [`&.${tableCellClasses.body}`]: {
    borderRight: `1px solid ${cardColor}`,
    borderLeft: `1px solid ${cardColor}`,
    textAlign: 'center',
  },
}));
