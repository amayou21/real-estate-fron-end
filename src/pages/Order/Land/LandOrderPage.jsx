import React from 'react';
import LandOrders from '../../../components/Order/Land/LandOrders';
import PaginatePage from '../../../components/Utility/PaginatePage';

const LandOrderPage = () => {
    return (
        <div>
            <LandOrders/>
            <PaginatePage/>
        </div>
    );
}

export default LandOrderPage;
