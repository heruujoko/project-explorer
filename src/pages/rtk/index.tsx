'use client';

import React from 'react';
import { wrapper } from '@common/redux/store';
import {
    getPokemonByName,
    getRunningQueriesThunk,
    useGetPokemonByNameQuery,
} from '@services/pokemon';

function RTKDashboardPage() {
    const result = useGetPokemonByNameQuery('venusaur');
    const { data, isLoading } = result;
    if (isLoading) return <p>loading...</p>;
    return <p>{JSON.stringify(data)}</p>;
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    store.dispatch(getPokemonByName.initiate('venusaur'));
    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
        props: {},
    };
});

export default RTKDashboardPage;
