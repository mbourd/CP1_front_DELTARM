import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { IDispatchRoute } from './types';

const DispatchRoute: React.FC<React.PropsWithChildren<IDispatchRoute>> = ({
  url,
  router,
  notFoundComponent,
}) => {
  const history = useHistory();
  const location = useLocation();
  router.setHistory(history).setLocation(location);
  const route = router.find(url);

  const queries = router.parseQueries(location.search);
  router.setQueries(queries);

  if (route) {
    router.setCurrentRoute(route);

    const params = router.parseParams(route.path, url);
    router.setParams(params);

    let hasError = false;

    if (route.params) {
      const routeParams = Object.keys(route.params);
      for (let i = 0; i < routeParams.length; i++) {
        const param = routeParams[i];
        if (route.params && params[param]) {
          if (!route.params[param].test(params[param])) {
            hasError = true;
            break;
          }
        }
      }
    }

    if (!hasError) {
      if (!route.component) {
        return null;
      }

      const Component: React.ElementType = route.component as React.ElementType;

      const props = route.props ? route.props : {};

      return (
        <Component
          {...props}
          currentRoute={route}
          routeParams={params}
          routeQueries={queries}
        />
      );
    }
  }

  if (notFoundComponent) {
    const Component: React.ElementType = notFoundComponent as React.ElementType;

    return <Component />;
  }

  return null;
};

export { DispatchRoute };
