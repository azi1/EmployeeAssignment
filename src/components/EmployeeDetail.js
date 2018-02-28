import React,{Component} from 'react';
import {Container,Content,Card,CardItem,Text} from 'native-base';

const  EmployeeDetail = (props) => {

const { employee } = props.navigation.state.params;
console.log(employee);



  return (
      <Container>
        <Content>
            <Card>
                <CardItem>
                    <Text> Employee ID: {employee.employee_id} </Text>
                </CardItem>
                <CardItem>
                    <Text> Employee Name: {employee.employee_name} </Text>
                </CardItem>
                <CardItem>
                    <Text> Designation : {employee.designation} </Text>
                </CardItem>
                <CardItem>
                    <Text> Manager Name: {employee.manager_name} </Text>
                </CardItem>
            </Card>
        </Content>
      </Container>
  );  
};





export default EmployeeDetail;