import React from 'react';
import DashboardLayout from './layout';
import css from './index.module.css'

const DashboardPage = () => {
    return (
        <DashboardLayout>
            <div className={css.content}>content</div>
        </DashboardLayout>
    );
};

export default DashboardPage;
