import {
  createSlice,
  PayloadAction,
  Slice,
  ActionReducerMapBuilder,
} from '@reduxjs/toolkit';

const name = 'dashboardDynamic';
// declare type of state
type DashboardDynamicStateType = {
  message: string;
};
// declare actions
type ReducersActionsType = {
  setMessage: (
    state: DashboardDynamicStateType,
    action: PayloadAction<string>,
  ) => any;
  clearMessage: () => any;
};

// declare initiale state
const initialState: DashboardDynamicStateType = {
  message: 'HELLO WORLD',
};
const reducers: ReducersActionsType = {
  setMessage: (state, action) => {
    state.message = action.payload;
    // return { message: action.payload };
  },
  clearMessage: () => {
    return { message: '' };
  },
};
const extraReducers: (
  builder: ActionReducerMapBuilder<DashboardDynamicStateType>,
) => void = (builder) => {
  builder;
};
// create slice
const dashboardDynamicSlice: Slice<
  DashboardDynamicStateType,
  ReducersActionsType
> = createSlice({
  name,
  initialState,
  reducers,
  extraReducers,
});

// export all
export type { DashboardDynamicStateType };
export type DashboardDynamicActionsType = keyof ReducersActionsType;
export { name as dashboardDynamicReducerName };
export const { setMessage, clearMessage } = dashboardDynamicSlice.actions;
export default dashboardDynamicSlice.reducer;

import { useReduxToolkit } from 'Services';
import { useCallback } from 'react';
export const useDashboardDynamicReducer = () => {
  const { selected: stateDashboardDynamic, dispatch } = useReduxToolkit<
    DashboardDynamicStateType,
    DashboardDynamicActionsType
  >(name);
  const dispatchDashboardDynamicSetMessage = useCallback(
    (payload: string) => {
      dispatch('setMessage', payload);
    },
    [dispatch],
  );
  const dispatchDashboardDynamicClearMessage = useCallback(() => {
    dispatch('clearMessage');
  }, [dispatch]);

  return {
    stateDashboardDynamic,
    dispatchDashboardDynamicSetMessage,
    dispatchDashboardDynamicClearMessage,
  };
};
