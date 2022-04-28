export interface IFileAudit {
  id: number;
  event_id: number;
  lib: string;
  params: {
    [key: string]: string;
  };
  date: string;
}

export interface IDataFileAudit {
  audits: IFileAudit[];
  is_audit: boolean;
  is_audit_xls: boolean;
}
