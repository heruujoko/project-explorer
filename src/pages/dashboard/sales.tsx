import React from 'react';
import DashboardLayout from './layout';
import SalesToolbar from '@feature/sales-toolbar';

const DashboardSalesPage = () => {
    return (
        <DashboardLayout>
            <div>sales content</div>
            <SalesToolbar />
        </DashboardLayout>
    );
};

export default DashboardSalesPage;
