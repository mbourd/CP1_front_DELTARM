import { apiRouter } from 'Services';
import { editValidationHandlerCallback } from 'Features/Edit';

apiRouter.registerRoute({
  name: 'validation',
  path: '/validate',
  method: 'get',
  handler: (response: any) => {
    try {
      return editValidationHandlerCallback(response.data);
    } catch (e) {
      return null;
    }
  },
});

apiRouter.registerRoute({
  name: 'setControlValueValidation',
  path: '/control/set_value_validate',
  method: 'post',
});
