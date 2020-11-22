# How to use Router service

## Create your router instance

```ts
// Services/Container/index.ts

import { Router } from '@deltarm/Router';

export const router = new Router();

export const container = { router };
```

## Dispatch browser match url

```tsx
// App.tsx

import React from 'react';
import { Route } from 'react-router-dom';
import { DispatchRoute } from '@deltarm/Router';
import { router } from './Services/Container';

const App = (): React.ReactElement => {
  return (
    <Route
      path={'*'}
      render={({ match: { url } }) => <DispatchRoute url={url} router={router} notFoundComponent={null} />}
    />
  );
};

export { App };
```

## Register your routes

```ts
import { MyComponent } from '..';
import { router } from './Services/Container';

export const MyRoute = {
  name: 'MyRoute',
  path: '/route/:id',
  component: MyComponent,
  exact: true,
  strict: false,
  sensitive: false,
  params: {
    id: /^2$/,
  },
  props: {
    message: 'Hello',
  },
};

router.registerRoute(MyRoute);
```

If `path` key matches with browser url, `MyComponent` will render with following props:
- `currentRoute`: this route definition
- `routeParams`: route params found
- `routeQueries`: route queries found
