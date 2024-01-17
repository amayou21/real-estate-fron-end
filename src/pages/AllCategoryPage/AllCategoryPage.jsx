import React, { useState } from "react";
import { CircularProgress, Container, Typography } from "@mui/material";
import PaginatePage from "../../components/Utility/PaginatePage";
import CategoryCard from "../../components/category/categoryCard";
import AllCategoryPageHook from "../../hook/category/all-category-page-hook";

const AllCategoryPage = () => {
  const [res, getPage, pageCount, loading] = AllCategoryPageHook(8);

  return (
    <Container>
      <Typography variant="p" component="div" color="inherit" className="py-5">
        All Categories
      </Typography>
      {loading ? (
        <div className="flex justify-center items-center">
          <CircularProgress color="success" />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4 ">
          {res.data.length > 0 ? (
            res.data.map((val, index) => (
              <CategoryCard key={index} title={val.name} image={val.image} />
            ))
          ) : (
            <p className="text-amber-600">No Categories</p>
          )}
        </div>
      )}
      {pageCount > 1 ? (
        <PaginatePage getPage={getPage} pageCount={pageCount} />
      ) : null}
    </Container>
  );
};

export default AllCategoryPage;
