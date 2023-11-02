import React from 'react';
import DashboardLayout from './layout';
import css from './profile.module.css';
import { Button, Card, Divider } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

const DashboardProfilePage = () => {
    return (
        <DashboardLayout>
            <div className={css.container}>
                <Card>
                    <div>
                        <span>Nama Anda</span><br />
                        <small>email@mail.me</small>
                    </div>
                    <Divider />
                    <Button danger type='primary' icon={<PoweroffOutlined />}>keluar</Button>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default DashboardProfilePage;
