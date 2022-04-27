import { apiRouter } from 'Services';
import { IFileAudit } from './types';

interface IApiFileAudit {
  event_id: number;
  event_lib: string;
  event_params: {
    [key: string]: string;
  };
  event_ts: string;
}

apiRouter.registerRoute({
  name: 'getFileAudit',
  path: '/file/audit?target=screen',
  method: 'get',
  handler: (response): IFileAudit[] => {
    const data: IApiFileAudit[] = response.data.audit;
    const audits: IFileAudit[] = [];

    data.map((audit, index) => {
      const date = new Date(audit.event_ts);
      audits.push({
        id: index,
        event_id: audit.event_id,
        lib: audit.event_lib,
        date:
          date.getDate() +
          '/' +
          (date.getMonth() + 1) +
          '/' +
          date.getFullYear() +
          ' à ' +
          date.getHours() +
          ':' +
          date.getMinutes() +
          ':' +
          date.getSeconds(),
        params: audit.event_params,
      });

      return audit;
    });

    return audits;
  },
});
