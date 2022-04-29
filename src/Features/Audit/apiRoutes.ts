import { apiRouter } from 'Services';
import { IDataFileAudit, IFileAudit } from './types';

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
  handler: (response): IDataFileAudit => {
    const data: IApiFileAudit[] = response.data.audit;
    const is_audit: boolean = response.data.is_audit;
    const is_audit_xls: boolean = response.data.is_audit_xls;
    const audits: IFileAudit[] = [];

    data.map((audit, index) => {
      const date = new Date(audit.event_ts);
      audits.push({
        id: index,
        event_id: audit.event_id,
        lib: audit.event_lib,
        date:
          ('0' + date.getDate()).slice(-2) +
          '/' +
          ('0' + (date.getMonth() + 1)).slice(-2) +
          '/' +
          date.getFullYear() +
          ' à ' +
          ('0' + date.getHours()).slice(-2) +
          ':' +
          ('0' + date.getMinutes()).slice(-2) +
          ':' +
          ('0' + date.getSeconds()).slice(-2),
        params: audit.event_params,
      });

      return audit;
    });

    return {
      is_audit,
      is_audit_xls,
      audits,
    };
  },
});
