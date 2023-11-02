import { Drawer, Button } from 'antd';
import React from 'react';
import css from './index.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@common/redux/store';
import { cleanError } from '@feature/redux-slices/error/error.slice';

const ErrorDrawer = () => {
    const { error } = useSelector((app: RootState) => app.errors);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(cleanError());
    };

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
