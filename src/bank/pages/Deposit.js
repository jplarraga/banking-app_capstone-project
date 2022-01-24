import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MIN } from '../../shared/components/util/validators';
import { useForm } from "../../shared/hooks/form-hook";
import Card from '../../shared/components/UIElements/Card';
import './Deposit.css';


const DUMMY_TRANSACTIONS = [
    {
        id:'u1',
        balance: 100,
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

const Deposit = () => {

    const [isLoading, setIsLoading] = useState(true);
    
    const transactionId = 'u1'; //useParams().transactionId;
    

    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        }, 
        balance: {
            value: '',
            isValid: false
        }
    }, false)

    const identifiedTransaction = DUMMY_TRANSACTIONS.find(t => t.id === transactionId);

    useEffect(() => {

        if (identifiedTransaction) {
            setFormData({
                title: {
                    value: identifiedTransaction.title,
                    isValid: true
                }, 
                balance: {
                    value: identifiedTransaction.balance,
                    isValid: true
                }
                }, 
            true
            );
        };
        setIsLoading(false);
    }, [setFormData, identifiedTransaction]);

    

    const balanceUpdateHandler = event => {
        event.preventDefault();
        formState.inputs.balance.value = Number(formState.inputs.balance.value) + Number(identifiedTransaction.balance);
        console.log(formState.inputs);
    }

    if (!identifiedTransaction) {
        return (
            <div className="center">
                <Card>
                    <h2>Could not find user</h2>
                </Card>
            </div>
        );
    }

    if (isLoading) {
        return(
            <div className="center">
                <h2>Loading...</h2>
            </div>
        );
    }


 return (
         <form className="place-form" onSubmit={balanceUpdateHandler}>
            <Input 
                id='title' 
                element="input" 
                type="text" 
                label="Title" 
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Plase enter a valid title..."
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input 
                id='balance' 
                element="input" 
                type="value" 
                label="DEPOSIT AMOUNT" 
                validators={[VALIDATOR_MIN(1)]}
                errorText="Plase deposit 1USD or more..."
                onInput={inputHandler}
                initialValue={formState.inputs.balance.value}
                initialValid={formState.inputs.balance.isValid}
            />

            <Button type="submit" disabled={!formState.isValid}>DEPOSIT</Button>

            <h1>Current Balance:</h1>
            <h2>$ {Number(identifiedTransaction.balance) + Number(formState.inputs.balance.value)}</h2>
        </form>)
};

export default Deposit;
