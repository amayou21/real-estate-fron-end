import React from "react";
import HSlide from "../../components/Home/HSlider";
import CategoryContainer from "../../components/category/categoryContainer";
import SubHouseCardContainer from "../../components/House/subHouseCardContainer";
import SubLandCardContainer from "../../components/land/subLandCardContainer";
import SubStockCardContainer from "../../components/stock/subStockCardContainer";

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
