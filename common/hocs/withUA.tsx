import React, { ElementType } from 'react';
// @ts-ignore
import { UserAgentProvider } from 'react-ua';
export default function withUA(WrappedComponent: ElementType) {
    const UAWrapper = (props: any) => {
        console.log(props);
        if (!process.browser) {
            <UserAgentProvider value={'SSR'}>
                <WrappedComponent {...props} />
            </UserAgentProvider>;
        }

        return (
            <UserAgentProvider>
                <WrappedComponent {...props} />
            </UserAgentProvider>
        );
    };

    return UAWrapper;
}
