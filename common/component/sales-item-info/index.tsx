import React, { memo } from 'react';
import { MonthlySales } from 'types/sales';
import { Card } from 'antd';
import css from './index.module.css';

interface SalesItemInfoProps {
    sales: MonthlySales;
}

const SalesItemInfo: React.FC<SalesItemInfoProps> = ({ sales }) => {
    return (
        <div className={css.container}>
            <Card size="small" title={`${sales.month}`}>
                <span>{sales.region.name}</span>
                <br />
                <span className={css.amount}>{sales.amount}</span>
            </Card>
        </div>
    );
};

export default memo(SalesItemInfo);
