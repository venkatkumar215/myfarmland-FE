export interface IAnimalType {
  name: string;
  iconName: string;
  iconLibrary: any;
  count: number;
  size: number;
}

export interface IHomeActionType {
  name: string;
  imgKey: "animal" | "task" | "feed" | "crop";
}
