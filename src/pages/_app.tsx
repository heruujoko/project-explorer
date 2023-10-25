import React from 'react';
import { Roboto } from 'next/font/google';
import { AppProps } from 'next/app';

interface CustomAppLayoutProps {}

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

function AppLayout({ Component, pageProps }: AppProps<CustomAppLayoutProps>) {
    return (
        <div className={roboto.className}>
            <Component {...pageProps} />
        </div>
    );
}
export default AppLayout;
