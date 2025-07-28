import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NoFarmDetailComponent from "../../components/farmDetail/noFarmDetail";

const CreateFarmDetail: React.FC = () => {
  const [createNewFarmDetail, setCreateNewFarmDetail] =
    React.useState<boolean>(false);
  return (
    <SafeAreaView edges={["top", "left", "right", "bottom"]}>
      {createNewFarmDetail ? null : <NoFarmDetailComponent />}
    </SafeAreaView>
  );
};

export default CreateFarmDetail;
