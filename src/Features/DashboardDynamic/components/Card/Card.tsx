import React, { createElement, useCallback } from 'react';
import { TableHead } from '@material-ui/core';
import { CardStyled, StyledTableCell } from './Card.style';
import { ICard } from '../types';
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
}
export const Card: React.FC<ICardC> = ({ card }): React.ReactElement => {
  const generateMaterialIcon = useCallback(
    (iconName: SvgIconComponent, color, size) => {
      // @ts-ignore
      return createElement(icons[iconName], { style: { color, size } });
    },
    [],
  );

  return (
    <CardStyled cardColor={card.title.bg_color}>
      <Header color={card.title.bg_color}>{card.title.lib}</Header>
      <TableContainer
        component={Paper}
        style={{ width: '100%', overflow: 'hidden' }}
      >
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              {card.cols.header_visible
                ? card.cols.values.map((column, index) => (
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
                      }}
                    >
                      {column.header}
                    </StyledTableCell>
                  ))
                : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {card.lines.values.map((row) => (
              <TableRow key={row.id}>
                {row.item.map((cell, index) => (
                  <BPITooltip title={cell.hint} key={index}>
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
                          )
                        : null}
                    </StyledTableCell>
                  </BPITooltip>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardStyled>
  );
};
