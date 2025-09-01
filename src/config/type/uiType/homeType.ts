export interface IIconType {
  iconName: string;
  iconLibrary: any;
  iconCoLor?: string;
  iconSize: number;
}
export interface IAnimalType extends IIconType {
  name: string;
  count: number;
}

export interface IHomeActionType {
  name: string;
  imgKey: "animal" | "task" | "feed" | "crop";
}

export interface IHealthMonitorType extends IIconType {
  groupId: string;
  status?: string;
  statusColor?: "active" | "caution" | "warning";
}
