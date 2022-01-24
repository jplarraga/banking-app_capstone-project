import React from "react";

import Card from '../../shared/components/UIElements/Card';
import TransactionItem from "./TransactionItem";
import './TransactionsList.css';

const TransactionsList = props => {
    if (props.items.length === 0) {
        return (
            <div className="place-list cente">
                <Card>
                    <h2>No Transactions Found</h2>
                    <button>Share</button>
                </Card>
            </div>
        );
    };

    return <ul className="place-list">
        {props.items.map(transaction => {
            return(
                <TransactionItem 
                    key={transaction.id} 
                    id={transaction.id} 
                    title={transaction.title} 
                    description={transaction.description} 
                    coordinates={transaction.location} 
                    creator={transaction.creator}/>
                );
        })}
    </ul>

};

export default TransactionsList;