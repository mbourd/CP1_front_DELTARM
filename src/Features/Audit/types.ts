export interface IFileAudit {
  id: number;
  event_id: number;
  lib: string;
  params: {
    [key: string]: string;
  };
  date: string;
}
