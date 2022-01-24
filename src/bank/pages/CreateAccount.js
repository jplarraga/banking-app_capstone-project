import React, { useCallback, useReducer} from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_MIN, VALIDATOR_REQUIRE } from '../../shared/components/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import './CreateAccount.css';


const CreateAccount = () => {
  const [formState, inputHandler] = useForm( {
    title: {
      value: '',
      isValid: false
    },
    balance: {
      value: '',
      isValid: false
    },
  }, false);


  
  const depositSubmitHandler = event => {
    event.preventDefault();

    console.log(formState.inputs.balance.value);
    
    console.log(formState.inputs);  //this is going to be sent to the backend
  };


  return (
    <form className='place-form' onSubmit={depositSubmitHandler}>
      <Input 
        id="title"
        element="input" 
        type='text' 
        label="TITLE" 
        validators={[VALIDATOR_REQUIRE()]} 
        errorText="Please Enter A valid Title"
        onInput={inputHandler} 
        />
       <Input 
        id="balance"
        element="input" 
        type='value' 
        label="DEPOSIT INITIAL AMOUNT" 
        validators={[VALIDATOR_MIN(1)]} 
        errorText="Please Deposit from 1 usd or more"
        onInput={inputHandler} 
        />
       <Button type="submit" disabled={!formState.isValid}>DEPOSIT INITIAL BALANCE</Button>
       
       <h1>Initial Balance:</h1>
       <h2>${formState.inputs.balance.value}</h2>
    </form>
  );
};

export default CreateAccount;