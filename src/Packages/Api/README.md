# How to use Api service

## Example

```tsx
const { request, response, isLoading, get, post, use } = useApi('jsonplaceholder.typicode.com', 'https');
 // ...
 if (response && !response.hasError()) {
   const data = response.getData();
   console.log(data);
 }
 // ...
 <button onClick={() => { use('myRouteName'); }} > Hello </button>
 // ...
```

## Route configuration interface

```ts
interface IApiRouteDef {
  /**
   * Name of route.
   */
  name: string;
  /**
   * Method of route : get post put ...
   */
  method: ApiRequestMethodType;
  /**
   * Route path, like '/login' '/user/:id'
   */
  path: string;
  /**
   * Default params of route.
   */
  params?: ApiRequestParamsType;
  /**
   * Default queries of routes.
   */
  queries?: ApiRequestQueriesType;
  /**
   * Default body content of route.
   */
  body?: ApiRequestBodyType;
  /**
   * Api response handler. If define, this callback will be call after api response. Can be use for data transforming.
   */
  handler?: (body: any) => any;
/**
   * Use fake data instead of api data.
   */
  fixtures?: () => any;
}
```
