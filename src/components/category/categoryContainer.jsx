import { Container } from "@mui/material";
import React from "react";
import CategoryCard from "./categoryCard";
import Subtitle from "../Utility/Subtitle";

const CategoryContainer = () => {
  return (
    <Container>
      <Subtitle title="categories" btntitle="more" />
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4 mx-auto">
        <CategoryCard title="big house" />
        <CategoryCard title="house" />
        <CategoryCard title="lands" />
        <CategoryCard title="stocks" />
      </div>
    </Container>
  );
};

export default CategoryContainer;
