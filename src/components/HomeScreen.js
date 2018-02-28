import React from 'react';
import { TouchableOpacity } from 'react-native';
import {UserUpdate,DeleteRow} from '../actions';
import {connect} from 'react-redux';
import { ListView,Alert,BackHandler } from 'react-native';
import { Container, Content, Button, List, ListItem, Text,Title,Card } from 'native-base';


class HomeScreen extends React.Component {
  
  
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
  }

  onBackButtonPressAndroid = () => {  
      return true; 
    };
  


    render() {
      return (
        <Container>
          
          <Content>
          <List dataArray={this.props.employee_array}
               renderRow={(emp) =>
               
                  <ListItem>
                     <TouchableOpacity onPress={() => {this.props.navigation.navigate('Employee', {employee: emp,}) }}>
                   <Title style={{alignSelf:'center',color:'black'}}>{emp.employee_name}</Title>
                   </TouchableOpacity>
                  </ListItem>
                 
               }>
             </List>
          </Content>
        </Container>
      );
    }
  }
  const mapStateToProps = (state) => {
  const { employee_array } = state.main;
  console.log(employee_array);
  
    return { employee_array };
  };
  

export default connect(mapStateToProps,{UserUpdate})(HomeScreen);
