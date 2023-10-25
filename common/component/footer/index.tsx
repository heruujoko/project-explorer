import React from 'react';
import css from './index.module.css';
import { LineChartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import IconName from '@common/component/icon-name';

const Footer: React.FC = () => {
    return (
        <div className={css.footer}>
            <IconName link="/dashboard" icon={<LineChartOutlined />} label={'Beranda'} />
            <IconName link="/dashboard/sales" icon={<ShoppingCartOutlined />} label={'Penjualan'} />
            <IconName link="/dashboard/profile" icon={<UserOutlined />} label={'Profil'} />
        </div>
    );
};

export default Footer;
