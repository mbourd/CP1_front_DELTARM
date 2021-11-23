import React, { createElement, useCallback } from 'react';
import { TableHead } from '@material-ui/core';
import { CardStyled, StyledTableCell } from './Card.style';
import { ICard, ICardValueItemParams } from '../types';
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableRow,
} from '@mui/material';
import { BPITooltip } from '../../../../Shared/components';
import { Header } from '../../../Dashboard/components/Card/Header/Header';
import * as icons from '@material-ui/icons';
import { SvgIconComponent } from '@material-ui/icons';

interface ICardC {
  card: ICard;
  actionIcons: (action: ICardValueItemParams | null) => void;
}
export const Card: React.FC<ICardC> = ({
  card,
  actionIcons,
}): React.ReactElement => {
  const indexCellColumnBorderRight: number[] = [];
  const generateMaterialIcon = useCallback(
    (iconName: SvgIconComponent, color, size, action, hint) => {
      // @ts-ignore
      if (hint === 'none') {
        return createElement(icons[iconName], {
          style: { color, size },
          onClick: () => actionIcons(action),
        });
      }

      if (hint !== 'none') {
        return (
          <BPITooltip title={hint}>
            {createElement(icons[iconName], {
              style: { color, size },
              onClick: () => actionIcons(action),
            })}
          </BPITooltip>
        );
      }
    },
    [actionIcons],
  );

  return (
    <CardStyled cardColor={card.title.bg_color}>
      <Header color={card.title.bg_color}>{card.title.lib}</Header>
      <TableContainer component={Paper} style={{ maxHeight: '450px' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {card.cols.header_visible
                ? card.cols.values.map((column, index) => {
                    if (column.border_right) {
                      indexCellColumnBorderRight.push(index);
                    }

                    return (
                      <StyledTableCell
                        scope="row"
                        key={index}
                        style={{
                          textAlign: 'center',
                          borderBottom: card.lines.border_bottom
                            ? `1px solid ${card.title.bg_color}`
                            : 'none',
                          borderRight: column.border_right
                            ? `1px solid ${card.title.bg_color}`
                            : 'none',
                          top: 0,
                          position: 'sticky',
                          backgroundColor: '#fff',
                        }}
                      >
                        {column.header}
                      </StyledTableCell>
                    );
                  })
                : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {card.lines.values.map((row, index) => (
              <TableRow key={index}>
                {row.item.map((cell, index) => {
                  if (indexCellColumnBorderRight.includes(index)) {
                    cell.border_right = true;
                  }

                  return (
                    <StyledTableCell
                      scope="row"
                      key={index}
                      style={{
                        borderBottom: card.lines.border_bottom
                          ? `1px solid ${card.title.bg_color}`
                          : 'none',
                        borderRight: cell.border_right
                          ? `1px solid ${card.title.bg_color}`
                          : 'none',
                        padding: '10px',
                      }}
                    >
                      {cell.content ? (
                        <span
                          dangerouslySetInnerHTML={{ __html: cell.content }}
                        />
                      ) : null}
                      {cell.icon
                        ? generateMaterialIcon(
                            cell.icon.ref,
                            cell.icon.color,
                            cell.icon.size,
                            cell.action,
                            cell.hint,
                          )
                        : null}
                    </StyledTableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardStyled>
  );
};
