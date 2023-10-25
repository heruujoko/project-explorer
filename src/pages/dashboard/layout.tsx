import React from 'react';
import Header from '@common/component/header';
import Footer from '@common/component/footer';
import css from './index.module.css';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={css.layout}>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default DashboardLayout;
