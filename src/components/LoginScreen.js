import React from 'react';
import { Container, Content, Input, Item,Button,Text,Icon } from 'native-base';
import { connect } from 'react-redux';  
import { Field, reduxForm } from 'redux-form';
import {Login,UserUpdate} from '../actions';
import {Image,ActivityIndicator,Alert} from 'react-native';
const validate = values => {
  const error = {};
  if (!values.username) {
    error.username = 'Required';
  }
  if(!values.password) 
  {
    error.password = 'Required';
  }

  return error;
};

class LoginScreen extends React.Component {
  constructor() {
    super();
    this.renderInput = this.renderInput.bind(this);
  }

  renderInput({ input, name,placeholder,secureTextEntry, type, meta: { touched, error, warning } }){
    var hasError= false;
    if(touched && error !== undefined){
      
      hasError = true;
    }
    return( <Item regular style={{marginLeft:10,marginRight:10}}  error= {hasError}>
                        <Input {...input}
                          placeholder={placeholder}  
                          secureTextEntry = {secureTextEntry}  
                        />
                        {touched && hasError ? <Icon name='close-circle' /> :  <Text/>}

              </Item>

        )
  }
  Navigation(){
    if(this.props.success)
    {
      console.log('propssuccess');   
      this.props.navigation.navigate('Main');
      this.props.UserUpdate({props:'success',value:false});
    }
  }
  ShowAlert(){ 
    if(this.props.error_occured)
    { 
    Alert.alert(
      'Error',
      'Something went wrong.Please try again',
      [
    { text: 'OK', onPress: () => this.props.UserUpdate({ props: 'error_occured', value: false }) },
      ],
    )
  }
  }
  ShowSpinner() {
          if (this.props.loading) {
            return ( 
              <ActivityIndicator size="large"/>
                );
          }
        }

  render() {
    const { handleSubmit,reset } = this.props;
    const submit = (values, syncErrors) => {
    this.props.Login(values)
    reset();
  } 
    return (
        <Container style={{      flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',}}>
          
           
            <Container style={{flex:3,justifyContent: 'center',alignItems:'center'}}>
            <Image
             source={require('../imgs/login.png')}
              />
                 {this.ShowAlert()}
                {this.ShowSpinner()}
            </Container>    
           
        <Container style={{flex:2}}>
        <Content>
        
        <Field name="username"  placeholder='Username' component={this.renderInput} />
        <Field name="password"  placeholder='Password' secureTextEntry component={this.renderInput} />
            
          <Button
           block 
           style={{margin:10,backgroundColor:'#2980b9'}}
           onPress={handleSubmit(submit)}
          >
            <Text>Login</Text>
          </Button>
          {this.Navigation()}
        </Content>
      </Container>
        </Container>
        
        
     
 
    );
  }
}
const styles = {
  containerLoader: {
    flex: 1,
    justifyContent: 'center'
  },
};

const mapStateToProps = (state) => {
const { success,error_occured,loading } = state.main;   
  return { success,error_occured,loading };
};


export default connect(mapStateToProps,{Login,UserUpdate})(reduxForm({ form: 'loginForm', validate})(LoginScreen));
