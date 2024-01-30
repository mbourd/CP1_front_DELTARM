import dashboardDynamicReducer, {
  dashboardDynamicReducerName,
  clearMessage,
  setMessage,
} from './dashboardDynamic.reducer';
import { appReducer } from 'Services';

appReducer.registerReducer(
  dashboardDynamicReducerName,
  dashboardDynamicReducer,
  {
    setMessage,
    clearMessage,
  },
);
