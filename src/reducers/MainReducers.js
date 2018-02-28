import {LOGIN_SUCCESS,LOADING,ADD_EMPLOYEE,LOGIN_ERROR,USER_UPDATE} from '../actions/types';

const DATA = [
    { employee_id: 1, employee_name: 'Azher', designation: 'Software Engineer',manager_name:'zahid' },
    { employee_id: 2, employee_name: 'Zahid', designation: 'Software Engineer',manager_name:'ahmed' },
    { employee_id: 3, employee_name: 'Ahmed', designation: 'Software Engineer' ,manager_name:'azher'},
  
];

const INTIAL_STATE = {loading:false,success:false,employee_array:DATA,error_occured:false}

export default (state = INTIAL_STATE, action) => {
    switch (action.type)
    {
       case LOGIN_SUCCESS: 
       return{...state, name:action.payload,loading:false,success:true};
       case LOGIN_ERROR:
       return {...state,loading:false,error_occured:true};
       case LOADING:
       return{...state, loading:true};

       case USER_UPDATE:
       return { ...state, [action.payload.props]: action.payload.value }

       case ADD_EMPLOYEE:
       return { ...state,  employee_array: [...state.employee_array, action.payload],success:true};
      
       default:
       return state;
       
    }
};