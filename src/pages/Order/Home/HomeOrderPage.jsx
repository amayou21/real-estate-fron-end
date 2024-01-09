import React from 'react';
import HomeOrders from '../../../components/Order/Home/HomeOrders';
import { Container } from '@mui/material';
import PaginatePage from '../../../components/Utility/PaginatePage';

const HomeOrderPage = () => {
    return (
        <div>
            <HomeOrders/>
            <PaginatePage/>
        </div>
    );
}

export default HomeOrderPage;
