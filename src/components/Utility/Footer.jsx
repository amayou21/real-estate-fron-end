import React from "react";
import homeBanner from "../../images/homeBanner.jpg"
const Footer = () => {
  return (
    <div>
        <div className="">
            <img src={homeBanner} alt="homme banner"  width="100%" className="xl:h-[300px]"/>
        </div>
      <div className="p-8 flex justify-center bg-amber-700 ">footer</div>
    </div>
  );
};

export default Footer;
