import React, { memo } from 'react';
import { MonthlySales } from 'types/sales';
import { Card } from 'antd';
import css from './index.module.css';
import { priceFormat } from '@common/helpers/numbers';
import { formatDate } from '@common/helpers/dates';

interface SalesItemInfoProps {
    sales: MonthlySales;
}

const SalesItemInfo: React.FC<SalesItemInfoProps> = ({ sales }) => {
    return (
        <div className={css.container}>
            <Card size="small" title={`${formatDate(sales.month)}`}>
                <span>{sales.region.name}</span>
                <br />
                <span className={css.amount}>{priceFormat(sales.amount)}</span>
            </Card>
        </div>
    );
};

export default memo(SalesItemInfo);
