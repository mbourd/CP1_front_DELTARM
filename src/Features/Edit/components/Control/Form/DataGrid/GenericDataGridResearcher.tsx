import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  IAfterGuiAttachedParams,
  IDoesFilterPassParams,
  IFilterParams,
} from 'ag-grid-community';

// eslint-disable-next-line react/display-name
export const GenericDataGridResearcher = forwardRef(
  (props: IFilterParams, ref) => {
    const [filterText, setFilterText] = useState<string>('');
    const refInput = useRef(null);

    // expose AG Grid Filter Lifecycle callbacks
    useImperativeHandle(ref, () => {
      return {
        doesFilterPass(params: IDoesFilterPassParams) {
          const { api, colDef, column, columnApi, context } = props;
          const { node } = params;

          // make sure each word passes separately, ie search for firstname, lastname
          let passed = true;
          if (filterText) {
            filterText
              .toLowerCase()
              .split(' ')
              .forEach((filterWord) => {
                const value = props.valueGetter({
                  api,
                  colDef,
                  column,
                  columnApi,
                  context,
                  data: node.data,
                  getValue: (field) => node.data[field],
                  node,
                });
                if (value.value) {
                  if (
                    value.value.toString().toLowerCase().indexOf(filterWord) < 0
                  ) {
                    passed = false;
                  }
                }
                if (!value.value) {
                  passed = false;
                }
              });
          }

          return passed;
        },

        isFilterActive() {
          return filterText != null && filterText !== '';
        },

        getModel() {
          if (!this.isFilterActive()) {
            return null;
          }

          return { value: filterText };
        },

        setModel(model: any) {
          setFilterText(model == null ? null : model.value);
        },

        afterGuiAttached(params: IAfterGuiAttachedParams) {
          focus();
        },
      };
    });

    const onChange = (event: any) => {
      setFilterText(event.target.value);
    };

    const focus = () => {
      window.setTimeout(() => {
        const container = refInput.current as any;
        if (container) {
          container.focus();
        }
      });
    };

    useEffect(() => {
      props.filterChangedCallback();
    }, [props, filterText]);

    return (
      <div style={{ padding: 4, width: 200 }}>
        <div>
          <input
            style={{ margin: '4 0 4 0', borderColor: 'black' }}
            type="text"
            ref={refInput}
            value={filterText}
            onChange={onChange}
          />
        </div>
      </div>
    );
  },
);
