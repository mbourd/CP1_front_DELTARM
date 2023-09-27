import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { AgGridReact } from 'ag-grid-react';
import { LicenseManager } from 'ag-grid-enterprise';
LicenseManager.setLicenseKey(
  'Using_this_AG_Grid_Enterprise_key_( AG-040865 )_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_( legal@ag-grid.com )___For_help_with_changing_this_key_please_contact_( info@ag-grid.com )___( Delta RM )_is_granted_a_( Single Application )_Developer_License_for_the_application_( DeltaRM )_only_for_( 1 )_Front-End_JavaScript_developer___All_Front-End_JavaScript_developers_working_on_( DeltaRM )_need_to_be_licensed___( DeltaRM )_has_been_granted_a_Deployment_License_Add-on_for_( 1 )_Production_Environment___This_key_works_with_AG_Grid_Enterprise_versions_released_before_( 11 April 2024 )____[v2]_MTcxMjc5MDAwMDAwMA==f0a7e979572bce7bc4376cbdee159586',
);
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { IActionButton, ICard } from '../types';
import { CardAgGridStyled } from './CardAgGrid.style';
import { BPITooltip } from 'Shared/components';
import DOMPurify from 'dompurify';
import * as icons from '@mui/icons-material';
import { SvgIconComponent } from '@mui/icons-material';
import { Header } from 'Features/Dashboard/components/Card/Header/Header';
import { GridReadyEvent } from 'ag-grid-community';
import { useTheme } from 'Packages/Design';
import { StyledTableCell } from '../Card/Card.style';

type CardAgGridProps = {
  card: ICard;
  triggerAction: (action: IActionButton | null) => void;
};

const CardAgGrid: React.FC<CardAgGridProps> = ({ card, triggerAction }) => {
  const theme = useTheme();
  // const [t, change, lang] = useTrans('');
  // const { user } = useSecurity();
  // const jwt = user.getJwt();
  const gridRef = useRef<any>();
  const indexesColumnsBorderRight: number[] = useMemo(() => {
    const indexes: number[] = [];

    // stores the knowing of which cells should have a border right or not.
    card.cols.values.forEach((column, index) => {
      if (column.border_right) indexes.push(index);
    });

    return indexes;
  }, [card.cols.values]);

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
      // autoHeight: true,
      // cellClass: 'grid-cell-centered',
    }),
    [],
  );

  // generate (by icon name) a material ui icon component with tooltip.
  const generateMaterialIcon = useCallback(
    (
      iconName: string,
      color: string,
      size: string,
      action: IActionButton | null,
      hint: string,
    ): React.ReactElement | null => {
      const Icon = icons[iconName];

      if (!Icon) return null;

      const renderIcon = (
        <Icon
          style={{
            color,
            size,
            cursor: action ? 'pointer' : 'initial',
          }}
          onClick={() => triggerAction(action)}
        />
      );

      return hint ? (
        <BPITooltip title={hint} placement={'top'}>
          {renderIcon}
        </BPITooltip>
      ) : (
        renderIcon
      );
    },
    [triggerAction],
  );

  // ensure that the columns of the ag grid automatically adjust their sizes to fit the content when the grid is ready.
  const onGridReady = (params: GridReadyEvent) => {
    const gridApi = params.api;
    gridApi.sizeColumnsToFit();
  };

  // Apply css styles for cells
  const cellStyleFunctions = useCallback(
    (props: any, index: number) => {
      return {
        borderRight: indexesColumnsBorderRight.includes(index)
          ? `1px solid ${card.title.bg_color}`
          : 'none',
        borderBottom: card.lines.border_bottom
          ? `1px solid ${card.title.bg_color}`
          : 'none',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      };
    },
    [card.lines.border_bottom, card.title.bg_color, indexesColumnsBorderRight],
  );

  const rowData = useMemo(() => {
    return card.lines.values.map((value) => {
      const obj = {};
      for (const key in value.item) {
        const item = value.item[key];
        // obj['item' + key] = { [keyItem]: item };
        obj['item' + key] = item;
      }

      return obj;
    });
  }, [card.lines.values]);

  // Columns definitions
  const columnDefs = useMemo(() => {
    return card.cols.values.map((col, i) => {
      return {
        field: 'item' + i + '.content',
        resizable: true,
        autoSize: true,
        editable: false,
        // minWidth: col.width > 150 ? 255 : col.width,
        // width: col.width > 150 ? 255 : col.width,
        width: col.width,
        headerName: col.label,
        // filter: (props) => {
        //   console.log(props);
        //   return true;
        // },
        filter: 'agTextColumnFilter',
        filterParams: {
          filterOptions: ['contains'],
        },
        comparator: (valueA: string, valueB: string) => {
          const strippedStringA = valueA.replace(/(<([^>]+)>)/gi, ' ');
          const strippedStringB = valueB.replace(/(<([^>]+)>)/gi, ' ');
          if (strippedStringA === strippedStringB) return 0;

          return strippedStringA > strippedStringB ? 1 : -1;
        },
        // floatingFilter: true,
        cellStyle: (props: any) => cellStyleFunctions(props, i),
        cellRenderer: (props: any) => {
          const renderIcon = props.data['item' + i].icon
            ? generateMaterialIcon(
                props.data['item' + i].icon.ref,
                props.data['item' + i].icon.color,
                props.data['item' + i].icon.size,
                props.data['item' + i].action,
                props.data['item' + i].hint,
              )
            : null;
          const content =
            props.value !== (null || undefined) ? props.value : '';
          const elementContent: JSX.Element = (
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(content),
              }}
              style={{
                cursor: props.data['item' + i].action ? 'pointer' : 'initial',
              }}
              onClick={() => triggerAction(props.data['item' + i].action)}
            />
          );
          const renderContent = props.data['item' + i].hint ? (
            <BPITooltip title={props.data['item' + i].hint} placement="top">
              {elementContent}
            </BPITooltip>
          ) : (
            elementContent
          );

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
              {renderContent}
              {renderIcon}
            </StyledTableCell>
          );
        },
      };
    });
  }, [
    card.cols.values,
    triggerAction,
    generateMaterialIcon,
    cellStyleFunctions,
    theme.font.text.main,
  ]);

  return (
    <CardAgGridStyled className="ag-theme-alpine">
      <Header color={card.title.bg_color}>
        <span style={{ color: card.title.font_color }}>{card.title.lib}</span>
      </Header>
      <AgGridReact
        ref={gridRef}
        rowHeight={60}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowData={rowData}
        onGridReady={onGridReady}
        // headerHeight={0}
        // localeText={local_text}
        // onCellEditingStarted={onCellEditingStarted}
        overlayLoadingTemplate={
          '<span class="ag-overlay-loading-center">Loading...</span>'
        }
        // // rowModelType={'serverSide'}
        // // sideBar={sideBar}
        pagination={true}
        // paginationAutoPageSize={true}
        paginationPageSize={5}
        // rowSelection="multiple"
        // gridOptions={gridOptions}
        // onCellValueChanged={onCellValueChanged}
        // undoRedoCellEditing={true}
        // enableCellChangeFlash={true}
        // onPaginationChanged={onPaginationChanged}
        animateRows
        suppressRowClickSelection
        suppressAnimationFrame
        suppressCellFocus
        // suppressHorizontalScroll
      />
    </CardAgGridStyled>
  );
};

export { CardAgGrid };
