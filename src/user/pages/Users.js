import React from "react";
import UsersList from '../components/UsersList'



const Users = () => {
    const USERS = [
        {id: 'u1', 
        name: 'Juan Larraga', 
        image:'https://jplarraga.github.io/img/juan_pablo_mask.png', 
        balance:0 
        }
    ];



    return <UsersList items={USERS}/>
};

export default Users;