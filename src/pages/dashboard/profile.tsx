import React from 'react';
import { useDispatch } from "react-redux";
import DashboardLayout from './layout';
import css from './profile.module.css';
import { Button, Card, Divider } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import {setError} from "@feature/redux-slices/error/error.slice";

const DashboardProfilePage = () => {
    const dispatch = useDispatch();

    const handle = () => {
        dispatch(setError({
            message: "message error",
            title: "title Error"
        }))
    }

    return (
        <DashboardLayout>
            <div className={css.container}>
                <Card>
                    <div>
                        <span>Nama Anda</span>
                        <br />
                        <small>email@mail.me</small>
                    </div>
                    <Divider />
                    <Button
                        onClick={handle}
                        danger
                        type="primary"
                        icon={<PoweroffOutlined />}
                    >
                        keluar
                    </Button>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default DashboardProfilePage;
