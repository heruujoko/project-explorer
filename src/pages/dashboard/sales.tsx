import React from 'react';
import DashboardLayout from './layout';
import SalesToolbar from '@feature/sales-toolbar';
import { MonthlySales } from 'types/sales';
import SalesItemInfo from '@common/component/sales-item-info';

const DashboardSalesPage = () => {
    const onChange = () => {};

    const mock: MonthlySales[] = [
        {
            amount: 8000000,
            month: '2023-10-26T01:45:51.249Z',
            region: {
                id: 'shadgsjh',
                name: 'Balikpapan',
            },
        },
    ];

    return (
        <DashboardLayout>
            <SalesToolbar onChange={onChange} />
            <br />
            <div>
                <SalesItemInfo sales={mock[0]} />
                <SalesItemInfo sales={mock[0]} />
                <SalesItemInfo sales={mock[0]} />
                <SalesItemInfo sales={mock[0]} />
                <SalesItemInfo sales={mock[0]} />
                <SalesItemInfo sales={mock[0]} />
                <SalesItemInfo sales={mock[0]} />
                <SalesItemInfo sales={mock[0]} />
                <SalesItemInfo sales={mock[0]} />
                <SalesItemInfo sales={mock[0]} />
                <SalesItemInfo sales={mock[0]} />
                <SalesItemInfo sales={mock[0]} />
                <SalesItemInfo sales={mock[0]} />
            </div>
        </DashboardLayout>
    );
};

export default DashboardSalesPage;
