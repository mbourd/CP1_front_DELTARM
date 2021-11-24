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
import * as icons from '@mui/icons-material';
import { SvgIconComponent } from '@mui/icons-material';
import { useTheme } from '../../../../Packages/Design';

interface ICardC {
  card: ICard;
  actionIcons: (action: ICardValueItemParams | null) => void;
}
export const Card: React.FC<ICardC> = ({
  card,
  actionIcons,
}): React.ReactElement => {
  const theme = useTheme();
  const indexCellColumnBorderRight: number[] = [];
  card.cols.values.forEach((column, index) => {
    if (column.border_right) {
      indexCellColumnBorderRight.push(index);
    }
  });
  const generateMaterialIcon = useCallback(
    (
      iconName: SvgIconComponent,
      color,
      size,
      action,
      hint,
    ): React.ReactElement | null => {
      // @ts-ignore
      const icon = icons[iconName];
      if (!icon) {
        return null;
      }
      const dynamicIconElementByAPI = createElement(icon, {
        style: { color, size },
        onClick: () => actionIcons(action),
      });
      if (hint) {
        return <BPITooltip title={hint}>{dynamicIconElementByAPI}</BPITooltip>;
      }

      // @ts-ignore
      return dynamicIconElementByAPI;
    },
    [actionIcons],
  );

  return (
    <CardStyled cardColor={card.title.bg_color}>
      <Header color={card.title.bg_color}>{card.title.lib}</Header>
      <TableContainer component={Paper} style={{ maxHeight: '350px' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {card.cols.header_visible
                ? card.cols.values.map((column, index) => {
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
                          fontFamily: `${theme.font.text.main}`,
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
                        fontFamily: `${theme.font.text.main}`,
                      }}
                    >
                      {cell.content ? (
                        cell.hint ? (
                          <BPITooltip title={cell.hint}>
                            <p
                              dangerouslySetInnerHTML={{ __html: cell.content }}
                              style={{ cursor: 'pointer' }}
                            />
                          </BPITooltip>
                        ) : (
                          <p
                            dangerouslySetInnerHTML={{ __html: cell.content }}
                            style={{ cursor: 'default' }}
                          />
                        )
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
