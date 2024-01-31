import {
  createSlice,
  PayloadAction,
  Slice,
  ActionReducerMapBuilder,
} from '@reduxjs/toolkit';

const name = 'dashboardDynamic';
// declare type of state
type DashboardDynamicStateType = {
  dataApi_dashboardControlPermanent: IDashboard | null;
};
// declare actions
type ReducersActionsType = {
  updateDataApi_dashboardControlPermanent: (
    state: DashboardDynamicStateType,
    action: PayloadAction<IDashboard | null>,
  ) => any;
};

// declare initiale state
const initialState: DashboardDynamicStateType = {
  dataApi_dashboardControlPermanent: null,
};
const reducers: ReducersActionsType = {
  updateDataApi_dashboardControlPermanent: (state, action) => {
    state.dataApi_dashboardControlPermanent = action.payload;
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
export const { updateDataApi_dashboardControlPermanent } =
  dashboardDynamicSlice.actions;
export default dashboardDynamicSlice.reducer;

import { useReduxToolkit } from 'Services';
import { useCallback } from 'react';
import { IDashboard } from './components/types';
export const useDashboardDynamicReducer = () => {
  const { selected: stateDashboardDynamic, dispatch } = useReduxToolkit<
    DashboardDynamicStateType,
    DashboardDynamicActionsType
  >(name);
  const dispatchDashboardDynamicUpdateDataApi_dashboardControlPermanent =
    useCallback(
      (payload: IDashboard | null) => {
        dispatch('updateDataApi_dashboardControlPermanent', payload);
      },
      [dispatch],
    );

  return {
    stateDashboardDynamic,
    dispatchDashboardDynamicUpdateDataApi_dashboardControlPermanent,
  };
};
