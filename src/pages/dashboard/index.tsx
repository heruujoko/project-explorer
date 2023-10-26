'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import DashboardLayout from './layout';
import css from './index.module.css';
const SalesChart = dynamic(() => import('@common/component/sales-chart'), {
    loading: () => <p>Loading...</p>,
    ssr: false,
  })

const DashboardPage = () => {
    return (
        <DashboardLayout>
            <div className={css.content}>
                <SalesChart />
            </div>
        </DashboardLayout>
    );
};

export default DashboardPage;
