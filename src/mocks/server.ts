import { handlers } from './handlers';
import { SetupWorkerApi, setupWorker } from 'msw';
import { SetupServerApi, setupServer } from 'msw/node';
function setup() {
  let worker: SetupWorkerApi | undefined;
  let server: SetupServerApi | undefined;
  if (process.env.NODE_ENV === 'development') {
    // Setup mock service worker for browser environment (storybook)
    worker = setupWorker(...handlers);
  } else {
    // Setup mock service server for node environment (jest tests)
    server = setupServer(...handlers);
  }

  return { worker, server };
}
export const { worker, server } = setup();
