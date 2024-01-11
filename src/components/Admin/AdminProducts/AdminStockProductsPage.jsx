import React from 'react';
import AdminStockProductCard from './AdminStockProductCard';

const AdminStockProductsPage = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-2">
      <AdminStockProductCard/>
      <AdminStockProductCard/>
      <AdminStockProductCard/>
      <AdminStockProductCard/>
      <AdminStockProductCard/>
      <AdminStockProductCard/>
    </div>
  );
}

export default AdminStockProductsPage;
