import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import TransactionsList from "../components/TransactionsList";



const DUMMY_TRANSACTIONS = [
    {
        id:'u1',
        balance: 0,
        title: 'Cellphone Bill',
        description: 'Payment monthly cellphone post paid plan',
        location: {
            lat: -2.1692416,
            lng: -79.9014912
        },
        creator: 'u1'
    },
    {
        id:'p2',
        balance: 0,
        title: 'Cellphone Bill',
        description: 'Payment monthly cellphone post paid plan',
        location: {
            lat: -2.1692416,
            lng: -79.9014912
        },
        creator: 'p2'
    },
];

const AllTransactions = () => {

    const userId = useParams().userId;

    const loadedTransactions = DUMMY_TRANSACTIONS.filter(transaction => transaction.creator === userId);
    return <TransactionsList items={loadedTransactions}></TransactionsList>
};

export default AllTransactions;