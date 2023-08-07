import React, { useCallback, useMemo, useRef, useState } from 'react';
import { CardStyled, StyledTableCell } from './Card.style';
import { IActionButton, AgGridRow, ICardAgGrid } from '../types';
import { Paper, TableContainer } from '@mui/material';
import { BPITooltip } from '../../../../Shared/components';
import { Header } from '../../../Dashboard/components/Card/Header/Header';
import * as icons from '@mui/icons-material';
import { SvgIconComponent } from '@mui/icons-material';
import { useTheme } from '../../../../Packages/Design';
import DOMPurify from 'dompurify';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS
import { GenericCardResearcher } from './GenericCardResearcher';

interface ICardC {
  card: ICardAgGrid;
  triggerAction: (action: IActionButton | null) => void;
}

export const AgGridCard: React.FC<ICardC> = ({
  card,
  triggerAction,
}): React.ReactElement => {
  const theme = useTheme();
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  // use for custom sorting
  const StrippedHTMLComparator = (valueA: any, valueB: any) => {
    const strippedStringA = valueA.content.replace(/(<([^>]+)>)/gi, ' ');
    const strippedStringB = valueB.content.replace(/(<([^>]+)>)/gi, ' ');
    if (strippedStringA == strippedStringB) {
      return 0;
    }

    return strippedStringA > strippedStringB ? 1 : -1;
  };

  card.cols.values.forEach((column) => {
    if (column.filter) {
      switch (column.filter) {
        // @ts-ignore
        case 'GenericCardResearcher':
          column.filter = GenericCardResearcher;
      }
    }
    if (column.comparator) {
      switch (column.comparator) {
        // @ts-ignore
        case 'StrippedHTMLComparator':
          column.comparator = StrippedHTMLComparator;
      }
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
              style={{ color, size, cursor: action ? 'pointer' : 'initial' }}
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

  const columnDefs = useMemo(() => card.cols.values, [card.cols.values]);

  const gridRef = useRef<any>();
  // Returns a cell with its given data.
  const cellRenderer = useCallback(
    (params: any) => {
      return (
        <StyledTableCell
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
          {params.value?.content ? (
            params.value?.hint ? (
              <BPITooltip title={params.value?.hint}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(params.value?.content),
                  }}
                  style={{
                    cursor: params.value?.action ? 'pointer' : 'initial',
                  }}
                  onClick={() => triggerAction(params.value?.action)}
                />
              </BPITooltip>
            ) : (
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(params.value?.content),
                }}
                style={{
                  cursor: params.value?.action ? 'pointer' : 'initial',
                }}
                onClick={() => triggerAction(params.value?.action)}
              />
            )
          ) : null}
          {params.value?.icon
            ? generateMaterialIcon(
                params.value.icon.ref,
                params.value.icon.color,
                params.value.icon.size,
                params.value.action,
                params.value.hint,
              )
            : null}
        </StyledTableCell>
      );
    },
    [generateMaterialIcon, triggerAction, theme.font.text.main],
  );
  // Never changes, so we can use useMemo
  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
      cellRenderer: cellRenderer,
      autoHeight: true,
      // cellClass: 'grid-cell-centered',
    }),
    [cellRenderer],
  );

  const onGridReady = (params: any) => {
    // Make the currently visible columns fit the screen
    params.api.sizeColumnsToFit();
    // params.api.showLoadingOverlay();
    params.api.enableVirtualization = true;
  };

  const [rowData] = useState<AgGridRow[]>(card.lines);
  const getRowStyle = (params: any) => {
    if (params.data.border_bottom) {
      return {
        borderBottom: `1px solid ${params.data.border_bottom}`,
      };
    }
    if (!params.data.border_bottom) {
      return { borderBottom: 'none' };
    }
  };

  return (
    <CardStyled $cardColor={card.title.bg_color}>
      <Header color={card.title.bg_color}>
        <span style={{ color: card.title.font_color }}>{card.title.lib}</span>
      </Header>
      <div style={containerStyle}>
        <TableContainer
          component={Paper}
          className="ag-theme-alpine"
          style={{
            width: 'auto',
            maxHeight: '300px',
            height: rowData.length < 5 ? 'unset' : '300px',
            minHeight: 'unset',
          }}
        >
          <AgGridReact
            className="ag-theme-alpine"
            animateRows
            domLayout={rowData.length < 5 ? 'autoHeight' : 'normal'}
            ref={gridRef}
            // @ts-ignore
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowData={rowData}
            // headerHeight={card.cols.header_visible ? '' : 0}
            onGridReady={onGridReady}
            overlayLoadingTemplate={
              '<span class="ag-overlay-loading-center">Loading..</span>'
            }
            getRowStyle={getRowStyle}
            suppressRowClickSelection
            suppressAnimationFrame
            suppressCellFocus
            suppressHorizontalScroll
          />
        </TableContainer>
      </div>
    </CardStyled>
  );
};
