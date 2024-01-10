import React from 'react';
import OrderManagement from '../../components/Admin/OrderManagement';
import Typography from '@mui/material/Typography'

const OrderManagementPage = () => {
    return (
        <div>
            <Typography variant="body1" color="inherit">Order Management page</Typography>
            <OrderManagement/>
        </div>
    );
}

export default OrderManagementPage;
