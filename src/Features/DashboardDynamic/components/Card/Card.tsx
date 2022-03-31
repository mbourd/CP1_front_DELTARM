import React, { createElement, useCallback } from 'react';
import { TableHead } from '@material-ui/core';
import { CardStyled, StyledTableCell } from './Card.style';
import { ICard, IActionButton } from '../types';
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
import DOMPurify from 'dompurify';

interface ICardC {
  card: ICard;
  triggerAction: (action: IActionButton | null) => void;
}
export const Card: React.FC<ICardC> = ({
  card,
  triggerAction,
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
        onClick: () => triggerAction(action),
      });
      if (hint) {
        return <BPITooltip title={hint}>{dynamicIconElementByAPI}</BPITooltip>;
      }

      // @ts-ignore
      return dynamicIconElementByAPI;
    },
    [triggerAction],
  );

  return (
    <CardStyled cardColor={card.title.bg_color}>
      <Header color={card.title.bg_color}>{card.title.lib}</Header>
      <TableContainer component={Paper} style={{ maxHeight: '300px' }}>
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
                              dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(cell.content),
                              }}
                              style={{
                                cursor: cell.action ? 'pointer' : 'initial',
                              }}
                              onClick={() => triggerAction(cell.action)}
                            />
                          </BPITooltip>
                        ) : (
                          <p
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(cell.content),
                            }}
                            style={{
                              cursor: cell.action ? 'pointer' : 'initial',
                            }}
                            onClick={() => triggerAction(cell.action)}
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
