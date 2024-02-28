import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useContext,
} from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  DataGridDetailsRow,
  DataGridDetailsRowsCell,
  IApiControl,
} from '../../../../types';
import { Grid } from '@mui/material';
import { ControlLabel } from '../ControlLabel';
import { BPITooltip, FormError } from '../../../../../../Shared/components';
import { useSecurity } from '../../../../../../Packages/Security';
import { AgGridReact } from 'ag-grid-react';
// import { useReactToPrint } from 'react-to-print';
import { Button } from 'Shared/components';
import { getEnv, kFormatter } from '../../../../../../Services';
import './datagrid.css';
import { saveValueDataGrid } from './apiRoutes/saveValueDataGrid';
import CustomSelectRenderer from './AgDataGridFields/CustomSelectRenderer/CustomSelectRenderer';
import { minMax } from 'Packages/Helpers/src/minMax';
import { AgDataGridStyle } from './DataGridControl.style';
import 'ag-grid-enterprise';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
import {
  CellEditingStartedEvent,
  CellEditingStoppedEvent,
  GridReadyEvent,
  RowNode,
} from 'ag-grid-community';
// import millify from 'millify';
import { LicenseManager } from 'ag-grid-enterprise';
import { AG_GRID_LOCALE_FR } from './translations/fr';
import { AG_GRID_LOCALE_EN } from './translations/en';
import CustomDateRenderer from './AgDataGridFields/CustomDateRenderer/CustomDateRenderer';
LicenseManager.setLicenseKey(
  'Using_this_AG_Grid_Enterprise_key_( AG-040865 )_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_( legal@ag-grid.com )___For_help_with_changing_this_key_please_contact_( info@ag-grid.com )___( Delta RM )_is_granted_a_( Single Application )_Developer_License_for_the_application_( DeltaRM )_only_for_( 1 )_Front-End_JavaScript_developer___All_Front-End_JavaScript_developers_working_on_( DeltaRM )_need_to_be_licensed___( DeltaRM )_has_been_granted_a_Deployment_License_Add-on_for_( 1 )_Production_Environment___This_key_works_with_AG_Grid_Enterprise_versions_released_before_( 11 April 2024 )____[v2]_MTcxMjc5MDAwMDAwMA==f0a7e979572bce7bc4376cbdee159586',
);
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import CustomCheckboxRender from './AgDataGridFields/CustomCheckboxRenderer/CustomCheckboxRender';
import { ModalDynamic } from 'Features/ModalDynamic/components/ModalDynamic';
import axios, { AxiosError } from 'axios';
import CustomIconRenderer from './AgDataGridFields/CustomIconRenderer/CustomIconRenderer';
import CustomActionButtonRenderer from './AgDataGridFields/CustomActionButtonRenderer/CustomActionButtonRenderer';
import CustomSingleCheckboxRender from './AgDataGridFields/CustomSingleCheckBoxRenderer/CustomSingleCheckBoxRenderer';
import { CustomPercentRenderer } from './AgDataGridFields/CustomPercentRenderer/CustomPercentRenderer';
import { CustomDecimalRenderer } from './AgDataGridFields/CustomDecimalRenderer/CustomDecimalRenderer';
import { CustomFinancialRenderer } from './AgDataGridFields/CustomFinancialRenderer/CustomFinancialRenderer';
import { CustomIntegerRenderer } from './AgDataGridFields/CustomIntegerRenderer/CustomIntegerRender';
import { ColumnFormulaValueGetter } from './AgDataGridFields/CustomFormulaRenderer';
import BigNumber from 'bignumber.js';
import { CustomInnerHTMLRenderer } from './AgDataGridFields/CustomInnerHTMLRenderer/CustomInnerHTMLRenderer';
import { CustomDateStringRenderer } from './AgDataGridFields/CustomDateStringRenderer/CustomDateStringRenderer';
import { CustomTextAltRenderer } from './AgDataGridFields/CustomTextAltRenderer/CustomTextAltRenderer';
import { useTransEdit } from 'Features/Edit/translations';
import { EditValidationContext } from 'Features/Edit/EditValidationContext';

interface IProps {
  control: IApiControl;
  fileId: string;
  rowHeight?: number;
  animateRows?: boolean;
  suppressRowClickSelection?: boolean;
  suppressAnimationFrame?: boolean;
  suppressCellFocus?: boolean;
  onGridReadyAlt?: (params: GridReadyEvent) => void;
  defaultColDefAlt?: Record<any, any>;
  hasControlLabel?: boolean;
  extraStyles?: React.CSSProperties;
  heightGrid?: string | number;
  hasPagination?: boolean;
}

const CustomTooltip = (props: any & { tooltip: string }) => {
  const field_name = useMemo(
    () => props?.colDef?.field?.split('.')[0],
    [props?.colDef?.field],
  );
  const data = useMemo(
    () => (props?.location === 'cell' ? props?.data[field_name] : ''),
    [field_name, props?.data, props?.location],
  );

  if (
    props?.colDef?.track_modification &&
    props?.colDef?.track_modification_tooltip &&
    data?.reference_value !== data?.value &&
    props?.location === 'cell'
  ) {
    return (
      <div
        className="custom-tooltip"
        style={{ backgroundColor: 'wheat', padding: 5 }}
      >
        <p>
          Previous Value:
          {data?.component === 'decimal' ||
          data?.component === 'integer' ||
          data?.component === 'financial' ||
          data?.component === 'percent'
            ? data?.component === 'financial'
              ? `${props?.colDef?.currency_symbol}${kFormatter(
                  data?.reference_value,
                )}`
              : kFormatter(data?.reference_value)
            : data?.reference_value}
        </p>
      </div>
    );
  } else if (
    props?.location === 'header' &&
    props?.colDef?.col_header_display_tooltip
  ) {
    return (
      <p style={{ backgroundColor: 'wheat', padding: 5 }}>
        {props?.colDef?.col_header_tooltip}
      </p>
    );
  } else {
    return <div className="custom-tooltip" style={{ display: 'none' }}></div>;
  }
};

export const DataGridControlAgGrid: React.FC<
  React.PropsWithChildren<IProps>
> = ({
  control,
  fileId,
  rowHeight,
  animateRows = false,
  suppressRowClickSelection = false,
  suppressAnimationFrame = false,
  suppressCellFocus = false,
  onGridReadyAlt,
  defaultColDefAlt,
  hasControlLabel = true,
  extraStyles = {},
  heightGrid,
  hasPagination = true,
}) => {
  const [canSendApi, setCanSendApi] = useState<boolean>(true);
  const [errorMessageAdd, setErrorMessageAdd] = useState<string>('');
  const { user } = useSecurity();
  const gridRef = useRef<any>();
  const { trans, currentLang } = useTransEdit();
  const jwt = user.getJwt();
  const [errors, setErrors] = useState<string>('');
  const [GridDetails, setGridDetails] = useState(control.data_grid_detail);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [local_text] = useState(
    currentLang === 'en' ? AG_GRID_LOCALE_EN : AG_GRID_LOCALE_FR,
  );
  const [modalData, setModalData] = useState(null);
  const [selectedRows, setSelectedRows] = useState<RowNode[]>([]);
  const { setSectionsLabels, sectionId } = useContext(EditValidationContext);
  // const modal: IDataModal = useRecoilValue<any>(modal_data);

  const paginationPageSize: number =
    control?.data_grid_detail?.datagrid_options?.pagination_row_size ?? 20;
  const gridOptions = {
    rowClass: 'my-hover-class',
    rowData: GridDetails?.rows,
    stopEditingWhenGridLosesFocus: true,
  };

  useEffect(() => {
    setGridDetails(control?.data_grid_detail);
  }, [control?.data_grid_detail]);

  // refit column size when window size changes
  useEffect(() => {
    const listener = () => {
      if (gridRef.current?.api?.sizeColumnsToFit)
        gridRef.current.api.sizeColumnsToFit();
    };
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  const cellStyleFunctions = (props: any, g: any) => {
    const options = JSON.parse(props?.colDef?.track_modification_option);

    const field_name = props?.colDef?.field?.split('.')[0];
    const data = props?.data[field_name];
    const background: any =
      options === null ? null : options['background-color'];
    const color: any = options === null ? null : options?.color;

    return {
      textAlign: g?.alignment ? g?.alignment : 'left',
      borderRight: g?.borderRight
        ? `${g?.borderRightWidth}px solid ${g?.borderRightColor}`
        : '0px none rgb(0, 0, 0)',
      borderBottom: g?.borderBottom
        ? `${g?.borderBottomWidth}px solid ${g?.borderBottomColor}`
        : '0px none rgb(0, 0, 0)',
      backgroundColor:
        props?.colDef?.track_modification &&
        background !== null &&
        data?.reference_value !== data?.value
          ? background
          : '',
      color:
        props?.colDef?.track_modification &&
        data?.reference_value !== data?.value &&
        color !== null
          ? color
          : '',
      ...(g?.cellStyle ?? {}),
    };
  };

  const getSelectedRows = useCallback(() => {
    // return selectedRows.map((rowNode) => rowNode?.data?.row_uuid);
    const selected_data: any = [];
    gridOptions.rowData?.map((row: DataGridDetailsRow) => {
      if (
        row[
          control?.data_grid_detail?.datagrid_options
            ?.select_all_button_col_ref as string
        ]?.value === '1'
      ) {
        selected_data.push(row?.row_uuid);
      } else {
        return;
      }
    });

    return selected_data;
  }, [
    // selectedRows,
    control?.data_grid_detail?.datagrid_options?.select_all_button_col_ref,
    gridOptions.rowData,
  ]);
  const decide_editable = (props: any) => {
    const data: any = props?.colDef?.field?.split('.')[0];
    if (props?.data?.row_editable === false) {
      gridRef?.current?.api?.stopEditing();

      return false;
    }
    if (props?.data[data]?.control_editable === false) {
      gridRef?.current?.api?.stopEditing();

      return false;
    }

    return true;
  };

  const handleSelectAllClick = () => {
    const currentPage = gridRef.current.api.paginationGetCurrentPage() + 1;
    const pageSize = gridRef.current.api.paginationGetPageSize();
    const startIndex = currentPage === 0 ? 0 : (currentPage - 1) * pageSize;
    const endIndex = currentPage === 0 ? pageSize : currentPage * pageSize;
    const data: RowNode[] = [];
    control?.data_grid_detail?.columns?.map((column: any) => {
      if (
        column?.field?.split('.')[0] ===
        control?.data_grid_detail?.datagrid_options?.select_all_button_col_ref
      ) {
        if (column?.field_type !== 'checkbox_select_datagrid') {
          setErrors(`Le champ col_ref n'est pas une case à cocher`);

          setTimeout(() => {
            setErrors('');
          }, 3000);
        } else {
          gridRef.current.api.forEachNodeAfterFilterAndSort(
            (rowNode: RowNode) => {
              data.push(rowNode);
            },
          );
          data.slice(startIndex, endIndex).map((item) => {
            if (item?.data?.row_editable === false) {
              return;
            } else {
              item.setDataValue(
                `${control?.data_grid_detail?.datagrid_options?.select_all_button_col_ref}.value`,
                '1',
              );
            }
          });

          gridRef.current.api.refreshCells({
            rowNodes: data,
            force: true,
          });
          // setSelectedRows([...data.slice(startIndex, endIndex)]);
        }
      }
    });
  };
  const handleUnselectAllClick = useCallback(() => {
    const currentPage = gridRef.current.api.paginationGetCurrentPage() + 1;
    const pageSize = gridRef.current.api.paginationGetPageSize();
    const startIndex = currentPage === 0 ? 0 : (currentPage - 1) * pageSize;
    const endIndex = currentPage === 0 ? pageSize : currentPage * pageSize;
    const data: any = [];
    control?.data_grid_detail?.columns?.map((column: any) => {
      if (
        column?.field?.split('.')[0] ===
        control?.data_grid_detail?.datagrid_options?.select_all_button_col_ref
      ) {
        if (column?.field_type !== 'checkbox_select_datagrid') {
          setErrors(`Le champ col_ref n'est pas une case à cocher`);

          setTimeout(() => {
            setErrors('');
          }, 3000);
        } else {
          gridRef.current.api.forEachNodeAfterFilterAndSort(
            (rowNode: RowNode) => {
              data.push(rowNode);
            },
          );

          data.slice(startIndex, endIndex).map((item: any) => {
            if (item?.data?.read_editable === false) {
              return;
            } else {
              item.setDataValue(
                `${control?.data_grid_detail?.datagrid_options?.select_all_button_col_ref}.value`,
                '0',
              );
            }
          });
          gridRef.current.api.refreshCells({
            force: true,
          });
          // setSelectedRows([]);
        }
      }
    });
  }, [
    control?.data_grid_detail?.columns,
    control?.data_grid_detail?.datagrid_options?.select_all_button_col_ref,
  ]);

  // const handleClickRemoveSelectedRow = () => {
  //   const selectedRows = gridRef.current.api.getSelectedRows();
  //   gridRef.current.api.applyTransaction({ remove: selectedRows });
  // };

  const columnDefs = useMemo(
    () =>
      control?.data_grid_detail?.columns?.map((g: any) => {
        switch (g?.field_type) {
          case 'checkbox_select_datagrid':
            return {
              ...g,
              headerClass: 'center-header',
              minWidth: 80,
              width: 80,
              singleClickEdit: false,
              tooltipField: g?.field,
              headerTooltip: g?.headerName,
              editable: false,
              cellStyle: (props: any) => cellStyleFunctions(props, g),
              cellRenderer: (props: any) => {
                return (
                  <CustomSingleCheckboxRender
                    props={props}
                    selectedRows={selectedRows}
                    setSelectedRows={setSelectedRows}
                  />
                );
              },
            };
          case 'dynamic_select_list':
          case 'select_list':
            return {
              ...g,
              headerClass: 'center-header',
              minWidth: 150,
              width: 'auto',
              singleClickEdit: false,
              tooltipField: g?.field,
              headerTooltip: g?.headerName,
              editable: false,
              cellStyle: (props: any) => cellStyleFunctions(props, g),
              // filter: 'agNumberColumnFilter',
              filterParams: {
                valueFormatter: (props: any) => {
                  const data = props?.colDef?.field?.split('.')[0];

                  const row_data = Object.assign(
                    {},
                    ...(GridDetails?.rows ?? []),
                  );
                  const field_data = Object.entries(row_data).reduce(
                    (accum: any, current: any) => {
                      const [key, value] = current;
                      if (key.match(data)) {
                        return value;
                      }

                      return accum;
                    },
                    [],
                  );

                  const value_to_show = field_data?.choice_options?.filter(
                    (data: any) => {
                      return data?.choice_id?.toString() === props?.value;
                    },
                  );

                  return value_to_show[0]?.choice_lib;
                },
              },
            };
          case 'comment':
            return {
              ...g,
              headerClass: 'center-header',
              minWidth: 150,
              width: 'auto',
              sortingOrder: ['desc', 'asc', null],
              accentedSort: true,
              comparator: (
                valueA: any,
                valueB: any,
                // nodeA: any,
                // nodeB: any,
                // isDescending: any,
              ) => {
                const _valA = valueA ? valueA : '';
                const _valB = valueB ? valueB : '';

                if (_valA.toLowerCase() < _valB.toLowerCase()) return -1;
                if (_valA.toLowerCase() > _valB.toLowerCase()) return 1;

                return 0;
              },
              tooltipField: g?.field,
              headerTooltip: g?.headerName,
              cellEditorPopup: true,
              editable: (props: any) => decide_editable(props),
              cellEditor: 'agLargeTextCellEditor',
              cellEditorParams: {
                rows: 10,
                cols: 50,
              },
              cellStyle: (props: any) => cellStyleFunctions(props, g),
            };
          case 'long_text':
            return {
              ...g,
              headerClass: 'center-header',
              minWidth: 150,
              width: 'auto',
              sortingOrder: ['desc', 'asc', null],
              accentedSort: true,
              comparator: (
                valueA: any,
                valueB: any,
                // nodeA: any,
                // nodeB: any,
                // isDescending: boolean,
              ) => {
                const _valA = valueA ? valueA : '';
                const _valB = valueB ? valueB : '';

                if (_valA.toLowerCase() < _valB.toLowerCase()) return -1;
                if (_valA.toLowerCase() > _valB.toLowerCase()) return 1;

                return 0;
              },
              tooltipField: g?.field,
              editable: (props: any) => decide_editable(props),
              headerTooltip: g?.headerName,
              cellEditorPopup: true,
              cellEditor: 'agLargeTextCellEditor',
              cellEditorParams: {
                rows: 10,
                cols: 50,
              },
              cellStyle: (props: any) => cellStyleFunctions(props, g),
              cellRenderer: (props: any) => {
                return (
                  <>{props?.value !== null || undefined ? props.value : ''}</>
                );
              },
            };
          case 'percent':
            return {
              ...g,
              headerClass: 'center-header',
              minWidth: 150,
              width: 'auto',
              tooltipField: g?.field,
              editable: (props: any) => decide_editable(props),
              headerTooltip: g?.headerName,
              cellStyle: (props: any) => cellStyleFunctions(props, g),
              comparator: (
                valueA: any,
                valueB: any,
                nodeA: any,
                nodeB: any,
                // isDescending: boolean,
              ) => {
                if (!nodeA) return;

                const fieldName: string = g.field.split('.')[0];
                const vA = nodeA?.data[fieldName]?.value;
                const vB = nodeB?.data[fieldName]?.value;

                // Handling null values
                if (vA === null || vA === undefined || vA === '')
                  return vB === null || vB === undefined || vB === '' ? 0 : -1;
                if (vB === null || vB === undefined || vB === '') return 1;

                if (!nodeA?.data[fieldName]?._computedValueBigNumber)
                  nodeA.data[fieldName]._computedValueBigNumber = new BigNumber(
                    vA,
                  );
                if (!nodeB?.data[fieldName]?._computedValueBigNumber)
                  nodeB.data[fieldName]._computedValueBigNumber = new BigNumber(
                    vB,
                  );

                const v1: BigNumber =
                  nodeA?.data[fieldName]._computedValueBigNumber;
                const v2: BigNumber =
                  nodeB?.data[fieldName]._computedValueBigNumber;

                return v1.isEqualTo(v2) ? 0 : v1.isLessThan(v2) ? -1 : 1;
              },
              cellRenderer: (props: any) => {
                return <CustomPercentRenderer props={props} />;
              },
            };
          case 'radio':
            return {
              ...g,
              headerClass: 'center-header',
              minWidth: 150,
              width: 'auto',
              tooltipField: g?.field,
              headerTooltip: g?.headerName,
              cellStyle: (props: any) => cellStyleFunctions(props, g),
            };
          case 'multiple_list':
            return {
              ...g,
              headerClass: 'center-header',
              minWidth: 150,
              width: 'auto',
              tooltipField: g?.field,
              headerTooltip: g?.headerName,
              cellStyle: (props: any) => cellStyleFunctions(props, g),
            };
          case 'integer':
            return {
              ...g,
              headerClass: 'center-header',
              minWidth: 150,
              width: 'auto',
              headerTooltip: g?.headerName,
              tooltipField: g?.field,
              editable: (props: any) => decide_editable(props),
              comparator: (
                valueA: any,
                valueB: any,
                nodeA: any,
                nodeB: any,
                // isDescending: boolean,
              ) => {
                if (!nodeA) return;

                const fieldName: string = g.field.split('.')[0];
                const vA = nodeA?.data[fieldName]?.value;
                const vB = nodeB?.data[fieldName]?.value;

                // Handling null values
                if (vA === null || vA === undefined || vA === '')
                  return vB === null || vB === undefined || vB === '' ? 0 : -1;
                if (vB === null || vB === undefined || vB === '') return 1;

                if (!nodeA?.data[fieldName]?._computedValueBigNumber)
                  nodeA.data[fieldName]._computedValueBigNumber = new BigNumber(
                    vA,
                  );
                if (!nodeB?.data[fieldName]?._computedValueBigNumber)
                  nodeB.data[fieldName]._computedValueBigNumber = new BigNumber(
                    vB,
                  );

                const v1: BigNumber =
                  nodeA?.data[fieldName]._computedValueBigNumber;
                const v2: BigNumber =
                  nodeB?.data[fieldName]._computedValueBigNumber;

                return v1.isEqualTo(v2) ? 0 : v1.isLessThan(v2) ? -1 : 1;
              },
              cellStyle: (props: any) => cellStyleFunctions(props, g),
              cellRenderer: (props: any) => {
                return <CustomIntegerRenderer props={props} />;
              },
            };
          case 'decimal':
            return {
              ...g,
              headerClass: 'center-header',
              minWidth: 150,
              width: 'auto',
              tooltipField: g?.field,
              editable: (props: any) => decide_editable(props),
              headerTooltip: g?.headerName,
              cellStyle: (props: any) => cellStyleFunctions(props, g),
              comparator: (
                valueA: any,
                valueB: any,
                nodeA: any,
                nodeB: any,
                // isDescending: boolean,
              ) => {
                if (!nodeA) return;

                const fieldName: string = g.field.split('.')[0];
                const vA = nodeA?.data[fieldName]?.value;
                const vB = nodeB?.data[fieldName]?.value;

                // Handling null values
                if (vA === null || vA === undefined || vA === '')
                  return vB === null || vB === undefined || vB === '' ? 0 : -1;
                if (vB === null || vB === undefined || vB === '') return 1;

                if (!nodeA?.data[fieldName]?._computedValueBigNumber)
                  nodeA.data[fieldName]._computedValueBigNumber = new BigNumber(
                    vA,
                  );
                if (!nodeB?.data[fieldName]?._computedValueBigNumber)
                  nodeB.data[fieldName]._computedValueBigNumber = new BigNumber(
                    vB,
                  );

                const v1: BigNumber =
                  nodeA?.data[fieldName]._computedValueBigNumber;
                const v2: BigNumber =
                  nodeB?.data[fieldName]._computedValueBigNumber;

                return v1.isEqualTo(v2) ? 0 : v1.isLessThan(v2) ? -1 : 1;
              },
              cellRenderer: (props: any) => {
                return <CustomDecimalRenderer props={props} />;
              },
            };
          case 'financial':
            return {
              ...g,
              headerClass: 'center-header',
              minWidth: 150,
              width: 'auto',
              tooltipField: g?.field,
              editable: (props: any) => decide_editable(props),
              headerTooltip: g?.headerName,
              cellStyle: (props: any) => cellStyleFunctions(props, g),
              comparator: (
                valueA: any,
                valueB: any,
                nodeA: any,
                nodeB: any,
                // isDescending: boolean,
              ) => {
                if (!nodeA) return;

                const fieldName: string = g.field.split('.')[0];
                const vA = nodeA?.data[fieldName]?.value;
                const vB = nodeB?.data[fieldName]?.value;

                // Handling null values
                if (vA === null || vA === undefined || vA === '')
                  return vB === null || vB === undefined || vB === '' ? 0 : -1;
                if (vB === null || vB === undefined || vB === '') return 1;

                if (!nodeA?.data[fieldName]?._computedValueBigNumber)
                  nodeA.data[fieldName]._computedValueBigNumber = new BigNumber(
                    vA,
                  );
                if (!nodeB?.data[fieldName]?._computedValueBigNumber)
                  nodeB.data[fieldName]._computedValueBigNumber = new BigNumber(
                    vB,
                  );

                const v1: BigNumber =
                  nodeA?.data[fieldName]._computedValueBigNumber;
                const v2: BigNumber =
                  nodeB?.data[fieldName]._computedValueBigNumber;

                return v1.isEqualTo(v2) ? 0 : v1.isLessThan(v2) ? -1 : 1;
              },
              cellRenderer: (props: any) => {
                return (
                  <CustomFinancialRenderer props={props} control={control} />
                );
              },
            };
          case 'checkbox':
            return {
              ...g,
              headerClass: 'center-header',
              minWidth: 150,
              width: 'auto',
              tooltipField: g?.field,
              headerTooltip: g?.headerName,
              singleClickEdit: false,
              editable: false,
              cellStyle: (props: any) => cellStyleFunctions(props, g),
              cellRenderer: (props: any) => {
                return (
                  <CustomCheckboxRender
                    props={props}
                    control={control}
                    fileId={fileId}
                    jwt={jwt}
                    seterrors={setErrors}
                  />
                );
              },
            };
          case 'text':
            return {
              ...g,
              headerClass: 'center-header',
              minWidth: 150,
              width: 'auto',
              tooltipField: g?.field,
              headerTooltip: g?.headerName,
              editable: (props: any) => decide_editable(props),
              sortingOrder: ['desc', 'asc', null],
              accentedSort: true,
              comparator: (
                valueA: any,
                valueB: any,
                // nodeA: any,
                // nodeB: any,
                // isDescending: boolean,
              ) => {
                const _valA = valueA ? valueA : '';
                const _valB = valueB ? valueB : '';

                if (_valA.toLowerCase() < _valB.toLowerCase()) return -1;
                if (_valA.toLowerCase() > _valB.toLowerCase()) return 1;

                return 0;
              },
              cellStyle: (props: any) => cellStyleFunctions(props, g),
              cellRenderer: (props: any) => {
                return (
                  <>{props?.value !== null || undefined ? props.value : ''}</>
                );
              },
            };
          case 'text_alt':
            return {
              ...g,
              editable: (props: any) => decide_editable(props),
              sortingOrder: ['desc', 'asc', null],
              accentedSort: true,
              comparator: (
                valueA: any,
                valueB: any,
                // nodeA: any,
                // nodeB: any,
                // isDescending: boolean,
              ) => {
                const _valA = valueA ? valueA : '';
                const _valB = valueB ? valueB : '';

                if (_valA.toLowerCase() < _valB.toLowerCase()) return -1;
                if (_valA.toLowerCase() > _valB.toLowerCase()) return 1;

                return 0;
              },
              cellStyle: (props: any) => cellStyleFunctions(props, g),
              cellRenderer: (props: any) => {
                return (
                  <CustomTextAltRenderer
                    props={props}
                    fieldName={g.field.split('.')[0]}
                  />
                );
              },
            };
          case 'boolean':
            return {
              ...g,
              headerClass: 'center-header',
              minWidth: 150,
              headerTooltip: g?.headerName,
              width: 'auto',
              tooltipField: g?.field,
              cellStyle: (props: any) => cellStyleFunctions(props, g),
            };
          case 'date':
            return {
              ...g,
              headerClass: 'center-header',
              minWidth: 150,
              tooltipField: g?.field,
              headerTooltip: g?.headerName,
              width: 'auto',
              singleClickEdit: false,
              editable: false,
              cellStyle: (props: any) => cellStyleFunctions(props, g),
              comparator: (
                valueA: any,
                valueB: any,
                // nodeA: any,
                // nodeB: any,
                // isDescending: boolean,
              ) => {
                const dateA = new Date(valueA ? valueA : '1970-01-01');
                const dateB = new Date(valueB ? valueB : '1970-01-01');

                return dateA.getTime() - dateB.getTime();
              },
              cellRenderer: (props: any) => {
                return (
                  <CustomDateRenderer
                    props={props}
                    control={control}
                    fileId={fileId}
                    jwt={jwt}
                    seterrors={setErrors}
                  />
                );
              },
            };
          case 'icon':
            return {
              ...g,
              headerClass: 'center-header',
              minWidth: 20,
              // width: 'auto',
              singleClickEdit: false,
              headerTooltip: g?.headerName,
              editable: false,
              cellStyle: (props: any) => cellStyleFunctions(props, g),
              cellRenderer: (props: any) => {
                return (
                  <div>
                    {props?.value !== null || undefined ? (
                      <CustomIconRenderer
                        props={props}
                        control={control}
                        fileId={fileId}
                        jwt={jwt}
                        seterrors={setErrors}
                      />
                    ) : (
                      <div></div>
                    )}
                  </div>
                );
              },
            };
          case 'action_button':
            return {
              ...g,
              headerClass: 'center-header',
              minWidth: 150,
              width: 'auto',
              singleClickEdit: false,
              headerTooltip: g?.headerName,
              editable: false,
              cellStyle: (props: any) => cellStyleFunctions(props, g),
              cellRenderer: (props: any) => {
                return (
                  <div>
                    {props?.value !== null || undefined ? (
                      <CustomActionButtonRenderer
                        props={props}
                        control={control}
                        fileId={fileId}
                        jwt={jwt}
                        seterrors={setErrors}
                      />
                    ) : (
                      <div></div>
                    )}
                  </div>
                );
              },
            };
          case 'formula':
            return {
              ...g,
              headerClass: 'center-header',
              minWidth: 150,
              width: 'auto',
              headerTooltip: g?.headerName,
              tooltipField: g?.field,
              editable: (props: any) => decide_editable(props),
              comparator: (
                valueA: any,
                valueB: any,
                nodeA: any,
                nodeB: any,
                // isDescending: boolean,
              ) => {
                if (!nodeA) return;

                const fieldName: string = g.field.split('.')[0];
                const vA = valueA;
                const vB = valueB;

                // Handling null values
                if (vA === null || vA === undefined || vA === '')
                  return vB === null || vB === undefined || vB === '' ? 0 : -1;
                if (vB === null || vB === undefined || vB === '') return 1;

                const v1: BigNumber =
                  nodeA?.data[fieldName]._computedValueBigNumber;
                const v2: BigNumber =
                  nodeB?.data[fieldName]._computedValueBigNumber;

                return v1.isEqualTo(v2) ? 0 : v1.isLessThan(v2) ? -1 : 1;
              },
              cellStyle: (props: any) => cellStyleFunctions(props, g),
              valueGetter: (props) => ColumnFormulaValueGetter(props),
            };
          case 'innerHTML':
            return {
              ...g,
              comparator: (valueA: any, valueB: any) => {
                const _valA = valueA ? valueA : '';
                const _valB = valueB ? valueB : '';
                const strippedStringA = _valA.replace(/(<([^>]+)>)/gi, ' ');
                const strippedStringB = _valB.replace(/(<([^>]+)>)/gi, ' ');

                if (strippedStringA == strippedStringB) return 0;

                return strippedStringA > strippedStringB ? 1 : -1;
              },
              cellStyle: (props) => cellStyleFunctions(props, g),
              cellRenderer: (props) => {
                return (
                  <CustomInnerHTMLRenderer
                    props={props}
                    fieldName={g.field.split('.')[0]}
                  />
                );
              },
            };
          case 'date_string':
            return {
              ...g,
              comparator: (valueA: any, valueB: any) => {
                const valA = valueA ? valueA : '--/--/--';
                const valB = valueB ? valueB : '--/--/--';
                const [dayA, monthA, yearA] = valA.split(' ')[0].split('/');
                const [dayB, monthB, yearB] = valB.split(' ')[0].split('/');
                const strDateA = `${monthA}-${dayA}-${yearA} ${
                  /^\d{2}\/\d{2}\/\d{2} - \d{2}:\d{2}:\d{2}$/.test(valA)
                    ? valA.split(' - ')[1]
                    : '00:00:00'
                }`;
                const strDateB = `${monthB}-${dayB}-${yearB} ${
                  /^\d{2}\/\d{2}\/\d{2} - \d{2}:\d{2}:\d{2}$/.test(valB)
                    ? valB.split(' - ')[1]
                    : '00:00:00'
                }`;
                const dateA = new Date(
                  valA !== '--/--/--' ? strDateA : '1970-01-01',
                );
                const dateB = new Date(
                  valB !== '--/--/--' ? strDateB : '1970-01-01',
                );

                if (dateA.getTime() > dateB.getTime()) return 1;
                if (dateA.getTime() < dateB.getTime()) return -1;

                return 0;
              },
              cellStyle: (props) => cellStyleFunctions(props, g),
              cellRenderer: (props) => {
                return (
                  <CustomDateStringRenderer
                    props={props}
                    fieldName={g.field.split('.')[0]}
                  />
                );
              },
            };
          default:
            return {
              ...g,
              headerClass: 'center-header',
              minWidth: 150,
              headerTooltip: g?.headerName,
              width: 'auto',
              cellStyle: (props: any) => cellStyleFunctions(props, g),
              cellRenderer: (props: any) => {
                return (
                  <>{props?.value !== null || undefined ? props.value : ''}</>
                );
              },
            };
        }
      }),
    [control, selectedRows, GridDetails?.rows, fileId, jwt],
  );

  const cellRenderer = useCallback(
    (props: any) => {
      const data = props?.colDef?.field?.split('.')[0];

      const field_data = Object.entries(props?.data).reduce(
        (accum: any, current: any) => {
          const [key, value] = current;
          if (key.match(data)) return value;

          return accum;
        },
        [],
      );

      switch (field_data?.component) {
        case 'select_list' || 'dynamic_select_list':
          return (
            <CustomSelectRenderer
              props={props}
              field_data={field_data}
              control={control}
              fileId={fileId}
              jwt={jwt}
              seterrors={setErrors}
            />
          );
        default:
          return props?.value ? props?.value : '';
      }
    },
    [control, fileId, jwt],
  );

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
      cellRenderer: cellRenderer,

      cellClass: 'grid-cell-centered',
      editable: true,
      // cellEditorPopup: true,
      cellEditorPopupPosition: 'center',
      singleClickEdit: true,
      tooltipComponent: CustomTooltip,
    }),
    [cellRenderer],
  );

  const onGridReady = (params: any) => {
    setTimeout(() => {
      params.api.sizeColumnsToFit();
      params.api.enableVirtualization = true;
      params.api.forEachNode((node) => {
        if (
          node.data[
            control.data_grid_detail?.datagrid_options
              ?.select_all_button_col_ref as string
          ]?.value === '1'
        ) {
          setSelectedRows((selected) => [...selected, node]);
        }
      });
    }, 0);
  };

  const onCellEditingStarted = useCallback((event: CellEditingStartedEvent) => {
    const data: any = event?.colDef?.field?.split('.')[0];
    if (event?.data?.row_editable === false) {
      gridRef?.current?.api?.stopEditing();

      return;
    }
    if (event?.data[data]?.control_editable === false) {
      gridRef?.current?.api?.stopEditing();

      return;
    }
  }, []);

  const onCellEditingStopped = useCallback((event: CellEditingStoppedEvent) => {
    const data = event?.colDef?.field?.split('.')[0];
    const field_data: DataGridDetailsRowsCell = event?.data[data as string];

    if (
      field_data.component === 'integer' ||
      field_data.component === 'decimal' ||
      field_data.component === 'percent' ||
      field_data.component === 'financial'
    ) {
      const newVal = new BigNumber(event.newValue).toFixed();

      if (newVal !== 'NaN') {
        if (
          field_data?.control_regex !== null &&
          field_data?.control_regex !== undefined &&
          event?.newValue
        ) {
          const regexControl = new RegExp(field_data?.control_regex, 'i');
          if (
            !regexControl.test(event?.newValue) &&
            field_data?.control_regex_msg
          )
            return;
        }

        event.node.setDataValue(event.column, newVal);
      }
    }
  }, []);

  const handleAddRowClick = useCallback(async () => {
    try {
      const response = await axios.post(
        `${getEnv('API_PROTOCOL')}://${getEnv(
          'API_HOST',
        )}/control/data_grid/add_row?file_id=${fileId}&elm_id=${
          control.control_id
        }&source=${GridDetails?.source}`,
        {},
        {
          headers: {
            Authorization: jwt,
          },
          responseType: 'json',
        },
      );

      if (response?.data) {
        setIsModalOpen(true);
        setModalData(response?.data);
      }
    } catch (error) {
      setErrorMessageAdd("Une erreur est survenue lors de l'ajout de la ligne");
    }
  }, [control.control_id, jwt, fileId, GridDetails?.source]);
  const handleDeleteSelectedRowsClick = useCallback(async () => {
    const rows: string[] = getSelectedRows();
    await axios
      .post(
        `${getEnv('API_PROTOCOL')}://${getEnv(
          'API_HOST',
        )}/control/data_grid/delete_row?file_id=${fileId}&elm_id=${
          control.control_id
        }&source=${GridDetails?.source}`,
        { rows },
        {
          headers: {
            Authorization: jwt,
          },
          responseType: 'json',
        },
      )
      .then((response) => {
        setIsModalOpen(true);
        setModalData({
          ...response.data,
          __extraData: { rows },
          callbackResponseConfirmation: (responseData: Record<any, any>) => {
            const { row_deleted, row_error } = responseData;
            const deletedRowNodes: RowNode[] = [];
            const allRowNode: RowNode[] = [];

            gridRef.current.api.forEachNode((rowNode: RowNode) => {
              if ((row_deleted as string[]).includes(rowNode.data?.row_uuid)) {
                deletedRowNodes.push(rowNode);
              }
            });
            deletedRowNodes.map((rowNode) => {
              if (rowNode?.data?.read_editable === false) {
                return;
              } else {
                rowNode.setDataValue(
                  `${control?.data_grid_detail?.datagrid_options?.select_all_button_col_ref}.value`,
                  '0',
                );
              }
            });
            gridRef.current.api.applyTransaction({
              remove: deletedRowNodes.map((node) => node.data),
            });
            gridRef.current.api.forEachNode((rowNode: RowNode) =>
              allRowNode.push(rowNode),
            );

            if (setSectionsLabels && sectionId)
              setSectionsLabels((sectionsLabels) => ({
                ...sectionsLabels,
                [sectionId]: (
                  (sectionsLabels?.[sectionId] as string) || ''
                ).replace(/\(.*\)$/, `(${allRowNode.length})`),
              }));

            if (row_error?.length === 0) {
              setIsModalOpen(false);
              setModalData(null);
            }
          },
        });
      })
      .catch(async (error: AxiosError) => {
        setErrorMessageAdd(error.response?.data.error_msg ?? '');
        setTimeout(() => {
          setErrorMessageAdd('');
        }, 3000);
      })
      .finally(() => {
        //
      });
  }, [
    GridDetails?.source,
    control.control_id,
    control?.data_grid_detail?.datagrid_options?.select_all_button_col_ref,
    fileId,
    getSelectedRows,
    jwt,
    sectionId,
    setSectionsLabels,
  ]);

  const onCellValueChanged = useCallback(
    (event: any) => {
      const data = event?.colDef?.field?.split('.')[0];

      const field_data = event?.data[data];

      if (event?.oldValue !== event?.newValue) {
        if (event?.colDef?.track_modification) {
          const options: any = JSON.parse(
            event?.colDef?.track_modification_option,
          );

          event.colDef.cellStyle = (p: any) =>
            p.rowIndex.toString() === event.node.id
              ? {
                  backgroundColor:
                    options !== null && event?.newValue !== undefined
                      ? options['background-color']
                      : '',
                  color:
                    options !== null && event?.newValue !== undefined
                      ? options?.color
                      : '',
                }
              : {};

          event.api.refreshCells({
            force: true,
            columns: [event.column.getId()],
            rowNodes: [event.node],
          });
        }
      }

      if (
        field_data?.control_regex !== null &&
        field_data?.control_regex !== undefined &&
        event?.newValue
      ) {
        const regexControl = new RegExp(field_data?.control_regex, 'i');
        if (
          !regexControl.test(event?.newValue) &&
          field_data?.control_regex_msg
        ) {
          setErrors(field_data?.control_regex_msg);
          gridRef.current.api.undoCellEditing();
          setTimeout(() => {
            setErrors('');
          }, 3000);

          return;
        }
      }
      if (
        field_data?.component === 'financial' ||
        field_data?.component === 'decimal' ||
        field_data?.component === 'integer' ||
        field_data?.component === 'percent'
      ) {
        if (
          (field_data?.control_options?.min_value ||
            field_data?.control_options?.max_value) &&
          event?.newValue.trim()
        ) {
          if (
            minMax(
              event?.newValue,
              field_data?.control_options?.min_value,
              field_data.control_options.max_value,
            )
          ) {
            setErrors('');
          }
          if (
            !minMax(
              event?.newValue,
              field_data.control_options.min_value,
              field_data.control_options.max_value,
            )
          ) {
            setErrors(
              'La valeur saisie ne respecte pas les contraintes définies',
            );
            gridRef.current.api.undoCellEditing();
            setTimeout(() => {
              setErrors('');
            }, 3000);

            return;
          }
        }
      }
      if (
        field_data?.component !== 'select_list' &&
        field_data?.component !== 'date' &&
        field_data?.component !== 'icon' &&
        field_data?.component !== 'checkbox_select_datagrid'
      ) {
        if (event?.newValue === undefined) {
          return;
        } else {
          let valueToSend = event?.newValue;

          switch (field_data?.component) {
            case 'integer':
            case 'decimal':
            case 'financial':
            case 'percent':
              valueToSend = new BigNumber(event?.newValue).toFixed();
              valueToSend = valueToSend !== 'NaN' ? valueToSend : '';
              break;
            default:
              break;
          }

          if (canSendApi)
            saveValueDataGrid(
              fileId,
              event?.data?.row_uuid,
              field_data?.col_elm_id,
              field_data?.row_num,
              jwt,
              event?.newValue?.toString(),
              setErrors,
              valueToSend,
            );
        }
      }
    },
    [canSendApi, fileId, jwt],
  );

  // const getRowStyle = (params: any) => {
  //   if (params.data.border_bottom) {
  //     return {
  //       borderBottom: `1px solid ${params.data.border_bottom}`,
  //       paddingTop: 15,
  //     };
  //   }
  //   if (!params.data.border_bottom) {
  //     return {
  //       borderBottom: 'none',
  //       paddingTop: 15,
  //     };
  //   }
  // };

  // const handlePrint = useReactToPrint({
  //   content: () => gridRef.current,
  // });

  const onPaginationChanged = useCallback(() => {
    control?.data_grid_detail?.columns?.map((column: any) => {
      if (
        column?.field?.split('.')[0] ===
        control?.data_grid_detail?.datagrid_options?.select_all_button_col_ref
      ) {
        if (column?.field_type !== 'checkbox_select_datagrid') {
          return;
        } else {
          gridRef.current.api?.forEachNodeAfterFilterAndSort(
            (rowNode: RowNode) => {
              rowNode.setDataValue(
                `${control?.data_grid_detail?.datagrid_options?.select_all_button_col_ref}.value`,
                '0',
              );
            },
          );

          gridRef.current.api?.refreshCells({
            force: true,
          });
          // setSelectedRows([]);
        }
      }
    });
  }, [
    control?.data_grid_detail?.datagrid_options?.select_all_button_col_ref,
    control?.data_grid_detail?.columns,
  ]);
  const refresh_grid = useCallback(async () => {
    try {
      const response = await axios.get(
        `${getEnv('API_PROTOCOL')}://${getEnv(
          'API_HOST',
        )}/control/data_grid/refresh_values?file_id=${fileId}&control_id=${
          control.control_id
        }&source=${GridDetails?.source}`,
        {
          headers: {
            Authorization: jwt,
          },
          responseType: 'json',
        },
      );

      if (response) {
        setGridDetails(response?.data?.data);
        gridRef.current.api.refreshCells({
          force: true,
        });
      }
    } catch (error) {
      setErrors("Une erreur s'est produite");
      setTimeout(() => {
        setErrors('');
      }, 3000);
    }
  }, [jwt, control?.control_id, fileId, GridDetails?.source]);

  const callButtonRoute = useCallback(
    async (method: string, route: string, button_row_selected: boolean) => {
      try {
        const response = await axios.post(
          `${getEnv('API_PROTOCOL')}://${getEnv(
            'API_HOST',
          )}/control/data_grid${route}?file_id=${fileId}&control_id=${
            control.control_id
          }&source=${GridDetails?.source}`,
          button_row_selected ? { selected_rows: getSelectedRows() } : {},
          {
            headers: {
              Authorization: jwt,
            },
            responseType: 'json',
          },
        );
      } catch (error) {
        setErrors("Une erreur s'est produite");
        setTimeout(() => {
          setErrors('');
        }, 3000);
      }
    },
    [getSelectedRows, jwt, control?.control_id, fileId, GridDetails?.source],
  );

  const DynamicButtonClick = ({
    button_method,
    button_route,
    button_refresh_callback,
    button_row_selected,
  }: {
    button_method: string;
    button_route: string;
    button_refresh_callback: boolean;
    button_row_selected: boolean;
  }) => {
    callButtonRoute(button_method, button_route, button_row_selected);
    if (button_refresh_callback) {
      refresh_grid();
    }
  };

  const onBodyScroll = useCallback(
    async (e: any) => {
      if (e.direction === 'horizontal') {
        const headerElements = document.querySelectorAll(
          '.ag-theme-alpine .ag-header-cell',
        );

        // change header background color
        [].forEach.call(headerElements, (headerElement: HTMLElement) => {
          const colId = headerElement.getAttribute('col-id');
          headerElement.style.backgroundColor =
            control.data_grid_detail?.columns.find((col) => col.field === colId)
              ?.headerColor || '#FFFFFF';
        });
      }
    },
    [control.data_grid_detail?.columns],
  );

  // expose for Cypress API
  if (window?.['Cypress']) {
    // import('bignumber.js').then((v) => console.log(v));
    window['Features_Edit_Control_DataGridControlAgGrid' + control.control_id] =
      {
        setCanSendApi,
        gridRef,
      };
  }

  return (
    <Grid
      item
      xs={12}
      style={{
        ...extraStyles,
        maxWidth: '100%',
        margin: '0 auto',
      }}
    >
      {/* <DataGridControlStyled> */}

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: -20,
        }}
      >
        {hasControlLabel && <ControlLabel control={control} />}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {/* <Button
            style={{
              backgroundColor: '#f50057',
              marginLeft: '10px',
              marginBottom: 10,
            }}
            onClick={handlePrint}
          >
            Export PDF
          </Button> */}
          {GridDetails?.datagrid_options?.select_all_button_display ===
            true && (
            <BPITooltip title={'Sélectionner toutes les lignes'}>
              <Button
                onClick={handleSelectAllClick}
                style={{
                  backgroundColor: 'teal',
                  border: 0,
                  color: '#fff',
                  margin: 5,
                  borderRadius: 5,
                  marginBottom: 14,
                }}
              >
                Select All
              </Button>
            </BPITooltip>
          )}
          {GridDetails?.datagrid_options?.unselect_all_button_display ===
            true && (
            <BPITooltip title={'Désélectionner toutes les lignes'}>
              <Button
                onClick={handleUnselectAllClick}
                style={{
                  backgroundColor: 'teal',
                  border: 0,
                  color: '#fff',
                  margin: 5,
                  borderRadius: 5,
                  marginBottom: 14,
                }}
              >
                Unselect All
              </Button>
            </BPITooltip>
          )}
          {GridDetails?.datagrid_options?.add_row_button_display === true && (
            <BPITooltip title={trans('addLine')}>
              <Button
                onClick={handleAddRowClick}
                style={{
                  backgroundColor: '#77077d',
                  border: 0,
                  color: '#fff',
                  margin: 5,
                  borderRadius: 5,
                  marginBottom: 14,
                }}
              >
                {trans('addLine')}
              </Button>
            </BPITooltip>
          )}
          {GridDetails?.datagrid_options?.delete_row_button_display ===
            true && (
            <Button
              onClick={handleDeleteSelectedRowsClick}
              style={{
                backgroundColor: 'crimson',
                border: 0,
                color: '#fff',
                margin: 5,
                borderRadius: 5,
                marginBottom: 14,
              }}
            >
              {trans('deleteRows')}
            </Button>
          )}
          {(GridDetails?.buttons ?? []).length > 0 &&
            (() => {
              const reorderedDatagridBtns = [...(GridDetails?.buttons || [])];

              reorderedDatagridBtns.sort((btn1, btn2) => {
                if (btn1.button_order < btn2.button_order) return -1;
                if (btn1.button_order > btn2.button_order) return 1;

                return 0;
              });

              return reorderedDatagridBtns.map((button: any, index: number) => {
                return (
                  <Button
                    key={index}
                    onClick={() =>
                      DynamicButtonClick({
                        button_method: button?.button_method,
                        button_route: button?.button_route,
                        button_refresh_callback:
                          button?.button_refresh_callback,
                        button_row_selected: button?.button_row_selected,
                      })
                    }
                    style={{
                      backgroundColor: button?.button_bg_color
                        ? button?.button_bg_color
                        : 'teal',
                      border: 0,
                      color: button?.button_font_color
                        ? button?.button_font_color
                        : 'white',
                      margin: 5,
                      borderRadius: 5,
                      marginBottom: 14,
                    }}
                  >
                    {button?.button_label}
                  </Button>
                );
              });
            })()}
          {/* <Button onClick={getRowData}>Get Data</Button> */}
        </div>
      </div>
      <h1 className={'errorsText'} style={{ color: 'red', padding: 10 }}>
        {errors}
      </h1>
      {errorMessageAdd && <FormError>{errorMessageAdd}</FormError>}

      <AgDataGridStyle
        $background_color={GridDetails?.datagrid_options?.datagrid_bg_color}
        $border_color={GridDetails?.datagrid_options?.datagrid_border_color}
        $is_border_color={GridDetails?.datagrid_options?.datagrid_border}
        $font_color={GridDetails?.datagrid_options?.datagrid_font_color}
        $font_size={GridDetails?.datagrid_options?.datagrid_font_size}
        $font_weight={GridDetails?.datagrid_options?.datagrid_font_weight}
        $header_bg_color={
          GridDetails?.datagrid_options?.datagrid_header_bg_color
        }
        $header_font_color={
          GridDetails?.datagrid_options?.datagrid_header_font_color
        }
        $odd_row_bg_color={
          GridDetails?.datagrid_options?.datagrid_odd_row_bg_color
        }
        $heightGrid={heightGrid}
      >
        <AgGridReact
          className="ag-theme-alpine"
          domLayout={heightGrid !== undefined ? 'normal' : 'autoHeight'}
          ref={gridRef}
          rowHeight={rowHeight}
          columnDefs={columnDefs}
          defaultColDef={defaultColDefAlt ?? defaultColDef}
          rowData={GridDetails?.rows}
          onGridReady={onGridReadyAlt ?? onGridReady}
          localeText={local_text}
          onCellEditingStarted={onCellEditingStarted}
          onCellEditingStopped={onCellEditingStopped}
          overlayLoadingTemplate={
            '<span class="ag-overlay-loading-center">Loading..</span>'
          }
          // rowModelType={'serverSide'}
          // sideBar={sideBar}
          pagination={hasPagination}
          paginationPageSize={paginationPageSize}
          rowSelection="multiple"
          gridOptions={gridOptions}
          // paginationAutoPageSize={true}
          onCellValueChanged={onCellValueChanged}
          undoRedoCellEditing={true}
          enableCellChangeFlash={true}
          onPaginationChanged={onPaginationChanged}
          onBodyScroll={onBodyScroll}
          animateRows={animateRows}
          suppressRowClickSelection={suppressRowClickSelection}
          suppressAnimationFrame={suppressAnimationFrame}
          suppressCellFocus={suppressCellFocus}
        />
      </AgDataGridStyle>
      {/* </DataGridControlStyled> */}
      {isModalOpen && modalData ? (
        <ModalDynamic
          open={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          data={modalData}
        />
      ) : null}
    </Grid>
  );
};
