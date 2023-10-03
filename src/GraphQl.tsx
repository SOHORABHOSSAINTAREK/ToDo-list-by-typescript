import { useQuery } from '@apollo/client';
import React from 'react';
import { COMPANY_INFO } from './graphql/queries';


const GraphQl = () => {
    const { data } = useQuery(COMPANY_INFO);
    console.log(data);
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>CEO: {data?.company?.ceo}</h1>
            <h2>CTO: {data?.company?.cto}</h2>
            <h2>Number of Employees: {data?.company?.employees}</h2>
            <h2>Founded In:  {data?.company?.founded}</h2>
            <h2>Headquarters</h2>
            <h3>Address: {data?.company?.headquarters?.address}</h3>
            <h3>City: {data?.company?.headquarters?.city}</h3>
            <h3>State: {data?.company?.headquarters?.state}</h3>
        </div>
    );
};

export default GraphQl;