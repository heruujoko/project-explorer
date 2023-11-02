'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import DashboardLayout from './layout';
import css from './index.module.css';
import SalesItemInfo from '@common/component/sales-item-info';
import { MonthlySales } from 'types/sales';
const SalesChart = dynamic(() => import('@common/component/sales-chart'), {
    loading: () => <p>Loading...</p>,
    ssr: false,
});

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

const DashboardPage = () => {
    return (
        <DashboardLayout>
            <div className={css.content}>
                <div>
                    <h2>Penjualan Tahunan</h2>
                    <SalesChart />
                </div>

                <div>
                    <h2>Penjualan Bulan</h2>
                    <SalesChart />
                </div>
                <br />
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
            </div>
        </DashboardLayout>
    );
};

export default DashboardPage;
