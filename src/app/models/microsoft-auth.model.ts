export interface IAuthModel {
  clientId: string;
  tenant: string;
  cacheLocation: string;
  endpoints: IEndpoint;
}

export interface IEndpoint {
  api: string;
}

export interface ILogData {
  _id?: string;
  deskNo: string;
  entryDate?: string;
  area: string;
  facility: string;
  equipment: string;
  isAddToQualityStatus: boolean;
  comments: string;
  classification: string;
  operator: string;
  saveDate?: Date;
  flowRate: string;
  throughput: string;
  scheduled: string;
  batchId: string;
  productId: string;
  shipper: string;
  isHeavy: boolean;
  KMPost: string;
  pressure: string;
  contact: string;
  SRAlarm: boolean;
  powerAppsId: string;
}
