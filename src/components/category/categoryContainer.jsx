import { CircularProgress, Container } from "@mui/material";
import React from "react";
import CategoryCard from "./categoryCard";
import Subtitle from "../Utility/Subtitle";
import HomeCategoriesHook from "../../hook/category/home-categories-hook";

const CategoryContainer = () => {
  
  const [loading, res] = HomeCategoriesHook(4);

  return (
    <Container>
      <Subtitle title="categories" btntitle="more" pathText="/more-category" />
      {loading ? (
        <div className="flex justify-center items-center">
          <CircularProgress color="success" />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4 mx-auto">
          {res.data.length > 0 ? (
            res.data.map((val, index) => (
              <CategoryCard key={index} title={val.name} image={val.image} />
            ))
          ) : (
            <p className="text-amber-600">No Categories</p>
          )}
        </div>
      )}
    </Container>
  );
};

export default CategoryContainer;
