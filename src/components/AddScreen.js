import React from 'react';
import {Dimensions,AsyncStorage} from 'react-native';
import { Container, Content, Input, Item,Button,Text,Icon,CardItem } from 'native-base';
import { connect } from 'react-redux';  
import { Field, reduxForm } from 'redux-form';
import {AddEmployee,UserUpdate} from '../actions';
import {reset} from 'redux-form';
const validate = values => {
  const error = {};
  if (!values.employee_name) {
    error.employee_name = 'Required';
  }
  if (!values.designation) {
    error.designation = 'Required';
  }
  if(!values.employee_id){
    error.employee_id = 'Required';
  }
  if(!values.manager_name){
    error.manager_name = 'Required';
  }

  return error;
};

class AddScreen extends React.Component {
  constructor() {
    super();
    this.renderInput = this.renderInput.bind(this);
 

  }
 

  

  Navigation(){
    if(this.props.success)
    {
      this.props.navigation.navigate('Home');
    }
  }

  renderInput({ input, name,placeholder,keyboardType, type, meta: { touched, error, warning } }){
    var hasError= false;
    if(touched && error !== undefined){
      
      hasError = true;
    }
    return(<Item regular style={{margin:10,marginLeft:10,borderRadius:5}}  error= {hasError}>
                        <Input {...input}
                          placeholder={placeholder}
                          keyboardType={keyboardType}
                           />
                        {touched && hasError ? <Icon name='close-circle' /> :  <Text/>}

              </Item>)
  }


  render() {
    const { handleSubmit,reset } = this.props;
    const submit = (values, syncErrors) => {
      console.log(values);

   this.props.AddEmployee(values);
    reset();
  
  }
  
    return (      
        <Container>
        <Content>
        <Field name="employee_name"  placeholder='Employee Name' component={this.renderInput} />
        <Field name="designation"  placeholder='Designaton' component={this.renderInput} />
        <Field name="employee_id" keyboardType='numeric' placeholder='Employee Id' component={this.renderInput} />
        <Field name="manager_name"  placeholder='Manager name' component={this.renderInput} />
        
        <Button
           block 
           style={{margin:10,backgroundColor:'#2980b9'}}
           onPress={handleSubmit(submit)}
          >
            <Text>Add Employee</Text>
          </Button>  
          {this.Navigation()}
        </Content>
     
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.form);
const { success } = state.main;

  return { success};
};

export default connect(mapStateToProps,{AddEmployee})(reduxForm({ form: 'AddForm', validate})(AddScreen));