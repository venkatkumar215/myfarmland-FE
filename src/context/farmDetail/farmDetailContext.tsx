import React, { createContext, useEffect, useState } from "react";
import { IFarmDetail } from "../../config/type/uiType/farmDetailType";
import { getInitializedFarmDetail } from "../../utilis/farmDetail/farmDetail";

interface Props {
  children: React.ReactNode;
}

// Define context type
interface IFarmContext {
  farmDetail: IFarmDetail | null;
  setFarmDetail: React.Dispatch<React.SetStateAction<IFarmDetail | null>>;
}

// Create the context
export const FarmDetailContext = createContext<IFarmContext>({
  farmDetail: null,
  setFarmDetail: () => {},
});

export const FarmDetailProvider: React.FC<Props> = ({ children }) => {
  const [farmDetail, setFarmDetail] = useState<IFarmDetail | null>(
    getInitializedFarmDetail()
  );

  useEffect(() => {
    setTimeout(() => {}, 100);
  }, [farmDetail]);

  return (
    <FarmDetailContext.Provider value={{ farmDetail, setFarmDetail }}>
      {children}
    </FarmDetailContext.Provider>
  );
};
