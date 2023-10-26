import React, { memo } from 'react';
import { useRouter } from 'next/router';
import { LineChartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import IconName from '@common/component/icon-name';

import css from './index.module.css';

const Footer: React.FC = () => {
    const router = useRouter();
    return (
        <div className={css.container}>
            <div className={css.footer}>
                <IconName
                    active={router.pathname === '/dashboard'}
                    link="/dashboard"
                    icon={<LineChartOutlined />}
                    label={'Beranda'}
                />
                <IconName
                    active={router.pathname === '/dashboard/sales'}
                    link="/dashboard/sales"
                    icon={<ShoppingCartOutlined />}
                    label={'Penjualan'}
                />
                <IconName
                    active={router.pathname === '/dashboard/profile'}
                    link="/dashboard/profile"
                    icon={<UserOutlined />}
                    label={'Profil'}
                />
            </div>
        </div>
    );
};

export default memo(Footer);
