export interface IStepDetail {
  title: string;
  componentName: React.ComponentType<any>;
}

export interface IBasicFarmDetail {
  farmLandName: {
    value: string;
    valid?: boolean;
  };
  location?: {
    value: string | null;
    valid?: boolean;
  };
  totalArea: {
    value: string;
    valid?: boolean;
  };
  unit: {
    value: string;
    valid?: boolean;
  };
}


