import dashboardDynamicReducer, {
  dashboardDynamicReducerName,
  updateDataApi_dashboardControlPermanent,
} from './dashboardDynamic.reducer';
import { appReducer } from 'Services';

appReducer.registerReducer(
  dashboardDynamicReducerName,
  dashboardDynamicReducer,
  {
    updateDataApi_dashboardControlPermanent,
  },
);
