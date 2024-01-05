import React from "react";
import HSlide from "../../components/Home/HSlider";
import CategoryContainer from "../../components/category/categoryContainer";
import SubHouseCardContainer from "../../components/Home/subHouseCardContainer";
import SubLandCardContainer from "../../components/Home/subLandCardContainer";
import SubStockCardContainer from "../../components/Home/subStockCardContainer";

const Home = () => {
  return (
    <div>
      <HSlide />
      <CategoryContainer />
      <SubHouseCardContainer />
      <SubLandCardContainer />
      <SubStockCardContainer />
    </div>
  );
};

export default Home;
