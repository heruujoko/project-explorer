import { Drawer, Button, Modal } from 'antd';
import React from 'react';
import css from './index.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@common/redux/store';
import { cleanError } from '@feature/redux-slices/error/error.slice';
// @ts-ignore
import { useUserAgent } from 'react-ua';
import _isEmpty from 'lodash/isEmpty'
import _get from 'lodash/get'

const ErrorDrawer = () => {
    const { error } = useSelector((app: RootState) => app.errors);
    const dispatch = useDispatch();
    const ua = useUserAgent();

    const handleClose = () => {
        dispatch(cleanError());
    };

    if (_isEmpty(ua) || !_get(ua, 'device.type')) {
        return <Modal onOk={handleClose} title={error?.title} open={error !== undefined} onCancel={handleClose}>
            {error?.message}
        </Modal>
    }

    return (
        <div className={css.drawerMainContainer}>
            <Drawer
                placement="bottom"
                closable={false}
                onClose={handleClose}
                open={error !== undefined}
                key={'error-drawer'}
            >
                <div className={css.container}>
                    <h3>{error?.title}</h3>
                    <p>{error?.message}</p>
                </div>
                <div className={css.actionButtonPlacer}>
                    <div className={css.actionButtonContainer}>
                        <Button block type="primary" onClick={handleClose}>
                            OK
                        </Button>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default ErrorDrawer;
