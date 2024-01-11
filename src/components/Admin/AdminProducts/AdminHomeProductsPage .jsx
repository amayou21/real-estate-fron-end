import React from "react";
import AdminHomeProductCard from "./AdminHomeProductCard";
const AdminHomeProductsPage = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-2">
      <AdminHomeProductCard />
      <AdminHomeProductCard />
      <AdminHomeProductCard />
      <AdminHomeProductCard />
      <AdminHomeProductCard />
      <AdminHomeProductCard />
    </div>
  );
};

export default AdminHomeProductsPage;
