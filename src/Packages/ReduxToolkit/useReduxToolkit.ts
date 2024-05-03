import { useDispatch, useSelector } from 'react-redux';
import { appReducer } from './AppReducer';
import { UseReduxToolkitReturnType, UseReduxToolkitType } from './types';
import { useCallback, useMemo } from 'react';
import { createSelector } from '@reduxjs/toolkit';

export const useReduxToolkit: UseReduxToolkitType = <T, A extends string>(
  reducerName: string,
  // selectors: ((state: any) => any)[] = [],
  // callbackSelectors: (...states) => any = (...state) => undefined,
): UseReduxToolkitReturnType<T, A> => {
  // const createSeletor = createSelector(selectors, callbackSelectors);
  const dispatch = useDispatch();
  const selected: T = useSelector((state: any) => {
    const _s = state[reducerName] as T;

    if (!state?.[reducerName])
      throw new Error(reducerName + " doesn't exist as reducer");

    return _s;
  });
  const _actions = useMemo(() => {
    return appReducer.getActions(reducerName);
  }, [reducerName]);
  const _dispatch = useCallback(
    (actionName: A, payload?: any | undefined) => {
      if (!_actions?.[actionName])
        throw new Error(actionName + " doesn't exist as action");

      dispatch(_actions[actionName](payload));
    },
    [_actions, dispatch],
  );

  return {
    selected,
    dispatch: _dispatch,
    actions: Object.keys(_actions),
  };
};
