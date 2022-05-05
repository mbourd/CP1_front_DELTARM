import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { CardStyled, StyledTableCell } from './Card.style';
import { ICard, IActionButton, ICardRow } from '../types';
import { Paper, TableContainer } from '@mui/material';
import { BPITooltip } from '../../../../Shared/components';
import { Header } from '../../../Dashboard/components/Card/Header/Header';
import * as icons from '@mui/icons-material';
import { SvgIconComponent } from '@mui/icons-material';
import { useTheme } from '../../../../Packages/Design';
import DOMPurify from 'dompurify';

import {
  AutoSizer,
  CellMeasurerCache,
  CellMeasurer,
  Column,
  Table,
  TableCellRenderer,
  TableHeaderProps,
} from 'react-virtualized';

interface ICardC {
  card: ICard;
  triggerAction: (action: IActionButton | null) => void;
}
export const Card: React.FC<ICardC> = ({
  card,
  triggerAction,
}): React.ReactElement => {
  const [rows] = useState<ICardRow[]>(card.lines.values);
  const [heightTable, setHeightTable] = useState<number>(0);
  const tableRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();
  const indexCellColumnBorderRight: number[] = [];

  // stores the knowing of which cells should have a border right or not.
  card.cols.values.forEach((column, index) => {
    if (column.border_right) {
      indexCellColumnBorderRight.push(index);
    }
  });

  // generate (by icon name) a material ui icon component.
  const generateMaterialIcon = useCallback(
    (
      iconName: SvgIconComponent,
      color,
      size,
      action,
      hint,
    ): React.ReactElement | null => {
      // @ts-ignore
      const Icon = icons[iconName];
      if (!Icon) {
        return null;
      }
      if (hint) {
        return (
          <BPITooltip title={hint}>
            <Icon
              style={{ color, size }}
              onClick={() => triggerAction(action)}
            />
          </BPITooltip>
        );
      }

      return (
        <Icon style={{ color, size }} onClick={() => triggerAction(action)} />
      );
    },
    [triggerAction],
  );

  // Helps us to identify the current height of a cell.
  const cache = useMemo(
    () =>
      new CellMeasurerCache({
        fixedWidth: true,
        minHeight: 50,
      }),
    [],
  );

  // Returns a cell with its given data.
  const cellRenderer: TableCellRenderer = ({
    rowData,
    columnIndex,
    parent,
    rowIndex,
  }) => {
    if (indexCellColumnBorderRight.includes(columnIndex)) {
      rowData[columnIndex].border_right = true;
    }

    return (
      <CellMeasurer
        cache={cache}
        columnIndex={columnIndex}
        parent={parent}
        rowIndex={rowIndex}
      >
        {({ measure }) => (
          <StyledTableCell
            onLoad={measure}
            scope="row"
            component={'div'}
            style={{
              width: '100%',
              fontFamily: `${theme.font.text.main}`,
              textAlign: 'center',
              borderBottom: 'none',
              display: 'block',
              padding: '2px',
            }}
          >
            {rowData[columnIndex].content ? (
              rowData[columnIndex].hint ? (
                <BPITooltip title={rowData[columnIndex].hint}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(rowData[columnIndex].content),
                    }}
                    style={{
                      cursor: rowData[columnIndex].action
                        ? 'pointer'
                        : 'initial',
                    }}
                    onClick={() => triggerAction(rowData[columnIndex].action)}
                  />
                </BPITooltip>
              ) : (
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(rowData[columnIndex].content),
                  }}
                  style={{
                    cursor: rowData[columnIndex].action ? 'pointer' : 'initial',
                  }}
                  onClick={() => triggerAction(rowData[columnIndex].action)}
                />
              )
            ) : null}
            {rowData[columnIndex].icon
              ? generateMaterialIcon(
                  rowData[columnIndex].icon.ref,
                  rowData[columnIndex].icon.color,
                  rowData[columnIndex].icon.size,
                  rowData[columnIndex].action,
                  rowData[columnIndex].hint,
                )
              : null}
          </StyledTableCell>
        )}
      </CellMeasurer>
    );
  };

  const headerRenderer = ({ label }: TableHeaderProps) => (
    <StyledTableCell
      component={'div'}
      style={{
        fontFamily: `${theme.font.text.main}`,
        textAlign: 'center',
        display: 'block',
        width: '100%',
        borderBottom: 'none',
      }}
    >
      {label}
    </StyledTableCell>
  );

  // Returns the maximum height cell value for a given row. We do that cause the lib needs static height.
  const getRowHeight = ({ index }: any) => {
    let maxValue = 0;
    rows[index].item.forEach((row, colIndex) => {
      if (cache.getHeight(index, colIndex) > maxValue) {
        maxValue = cache.getHeight(index, colIndex);
      }
    });

    return maxValue;
  };

  useEffect(() => {
    let totalHeight = 0;
    rows.forEach((row, index) => {
      totalHeight += cache.rowHeight({ index: index });
    });
    setHeightTable(totalHeight);
  }, [rows, cache]);

  return (
    <CardStyled cardColor={card.title.bg_color}>
      <Header color={card.title.bg_color}>{card.title.lib}</Header>
      <TableContainer
        component={Paper}
        style={{
          height: heightTable < 300 ? heightTable : 300,
          overflowX: 'unset',
        }}
        ref={tableRef}
      >
        <AutoSizer>
          {({ width }) => (
            <Table
              id={'Table_Virtualized' + card.title.lib}
              deferredMeasurementCache={cache}
              height={300}
              width={width}
              rowHeight={getRowHeight}
              headerHeight={48}
              rowStyle={{
                display: 'flex',
                flexDirection: 'row',
                borderBottom: card.lines.border_bottom
                  ? `1px solid ${card.title.bg_color}`
                  : 'none',
              }}
              rowCount={rows.length}
              rowGetter={({ index }) => rows[index].item}
              disableHeader={!card.cols.header_visible}
              style={{ maxHeight: '300px' }}
            >
              {card.cols.values.map(
                ({ dataKey, width, border_right, ...other }, index) => {
                  return (
                    <Column
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderRight: border_right
                          ? `1px solid ${card.title.bg_color}`
                          : 'none',
                        top: 0,
                        position: 'sticky',
                        backgroundColor: '#fff',
                        fontFamily: `${theme.font.text.main}`,
                      }}
                      width={width}
                      key={index}
                      headerRenderer={headerRenderer}
                      cellRenderer={cellRenderer}
                      dataKey={dataKey}
                      flexGrow={1}
                      {...other}
                      headerStyle={{
                        borderRight: border_right
                          ? `1px solid ${card.title.bg_color}`
                          : 'none',
                      }}
                    />
                  );
                },
              )}
            </Table>
          )}
        </AutoSizer>
      </TableContainer>
    </CardStyled>
  );
};
