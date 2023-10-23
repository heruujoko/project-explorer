'use client';

import React from 'react';
import { wrapper } from '@common/redux/store';

function DashboardLayout({ children }: { children: React.ReactNode }) {
    return <section>{children}</section>;
}

export default wrapper.withRedux(DashboardLayout);
