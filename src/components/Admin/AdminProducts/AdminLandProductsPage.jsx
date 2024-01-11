import React from 'react';
import AdminLandProductCard from './AdminLandProductCard';

const AdminLandProductsPage = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-2">
      <AdminLandProductCard/>
      <AdminLandProductCard/>
      <AdminLandProductCard/>
      <AdminLandProductCard/>
      <AdminLandProductCard/>
      <AdminLandProductCard/>
    </div>
  );
}

export default AdminLandProductsPage;
