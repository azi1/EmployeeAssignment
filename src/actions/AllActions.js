import React from 'react';
import {LOGIN_SUCCESS,LOADING, ADD_EMPLOYEE,LOGIN_ERROR,USER_UPDATE} from './types';


export const Login = ({username,password}) => {
console.log(username,password);

return(dispatch) => {
dispatch({type:LOADING});
const api = 'https://reqres.in/api/login';
const data = JSON.stringify({email:username,password});
console.log(data);
fetch(api, {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json'
    },
    body: data
  }).then(data=>{
    dispatch({type:LOGIN_SUCCESS});
  },error =>{
    dispatch({type:LOGIN_ERROR});
  })
}
};

export const UserUpdate = (values) => {
  console.log(values);
  return {
    type: USER_UPDATE,
    payload: values
  };
};

export const AddEmployee = (values) => {
   console.log(values);
   
    return {
        type: ADD_EMPLOYEE,
        payload: values
    };
    
};

   