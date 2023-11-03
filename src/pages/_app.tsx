import React from 'react';
import dynamic from 'next/dynamic';
import { Roboto } from 'next/font/google';
import { AppProps } from 'next/app';
import { wrapper } from '@common/redux/store';
import { Provider } from 'react-redux';
import withUA from '@common/hocs/withUA';

const ErrorDrawer = dynamic(() => import('@common/component/error-drawer'), { ssr: false });

interface CustomAppLayoutProps {}

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

function AppLayout({ Component, pageProps, ...rest }: AppProps<CustomAppLayoutProps>) {
    const { store } = wrapper.useWrappedStore(rest);

    return (
        <div className={roboto.className}>
            <Provider store={store}>
                <Component {...pageProps} />

                <ErrorDrawer />
            </Provider>
        </div>
    );
}
export default withUA(AppLayout);
