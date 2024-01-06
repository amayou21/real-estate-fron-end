import React from "react";
import HouseCardContainer from "../../components/House/houseCardContainer";
import PaginatePage from "../../components/Utility/PaginatePage"
const HousePage = () => {
  return (
    <div>
      <div className="mt-8">
        <HouseCardContainer />
        <PaginatePage />
      </div>
    </div>
  );
};

export default HousePage;
