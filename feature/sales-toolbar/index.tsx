/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { DatePicker, Select, Button } from 'antd';
import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';
import css from './index.module.css';
import dayjs from 'dayjs';

interface ToolbarState {
    startDate?: dayjs.Dayjs | null;
    endDate?: dayjs.Dayjs | null;
    region?: string;
}

interface SalesToolbarProp {
    onChange: (state: ToolbarState) => void;
    loading?: boolean;
}

const SalesToolbar: React.FC<SalesToolbarProp> = ({ onChange, loading }) => {
    const [toolState, setToolState] = useState<ToolbarState>({});

    const handleSearch = () => {
        onChange(toolState);
    };

    return (
        <div className={css.container}>
            <div className={css.row}>
                <DatePicker
                    disabled={loading}
                    value={toolState.startDate}
                    placeholder="Tanggal mulai"
                    onChange={(d) =>
                        setToolState({
                            ...toolState,
                            startDate: d,
                        })
                    }
                />
                <DatePicker
                    disabled={loading}
                    value={toolState.endDate}
                    placeholder="Tanggal akhir"
                    onChange={(d) =>
                        setToolState({
                            ...toolState,
                            endDate: d,
                        })
                    }
                />
            </div>
            <div className={css.row}>
                <Select
                    disabled={loading}
                    onChange={(r) =>
                        setToolState({
                            ...toolState,
                            region: r,
                        })
                    }
                    value={toolState.region}
                    showSearch
                    placeholder="Pilih wilayah"
                    optionFilterProp="children"
                    options={[
                        {
                            value: 'Balikpapan',
                            label: 'Balikpapan',
                        },
                        {
                            value: 'Samarinda',
                            label: 'Samarinda',
                        },
                    ]}
                />
                <Button
                    onClick={handleSearch}
                    loading={loading}
                    type="primary"
                    icon={<SearchOutlined />}
                />
                <Button
                    disabled={loading}
                    danger
                    type="primary"
                    onClick={() => setToolState({})}
                    icon={<CloseCircleOutlined />}
                />
            </div>
        </div>
    );
};

export default SalesToolbar;
