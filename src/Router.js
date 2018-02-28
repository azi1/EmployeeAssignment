import React from 'react';
import { StackNavigator,TabNavigator,TabBarBottom } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import AddScreen from './components/AddScreen';
import EmployeeDetail from './components/EmployeeDetail';
import { Icon } from 'native-base';

const EmployeeStack = StackNavigator(
  {
    Home: {screen: HomeScreen,
      navigationOptions:  {
        title:'Employee',
        headerTintColor: '#FFFFFF',
        headerStyle: {
          backgroundColor: '#2980b9', 
          elevation: null,
        },
    }
    },
    Employee:{screen:EmployeeDetail,
      navigationOptions:  {
        title:'Employee Detail',
        headerTintColor: '#FFFFFF',
        headerStyle: {
          backgroundColor: '#2980b9', 
          elevation: null,
        },
    }}
  },
 );

const HomeTabStack = TabNavigator(
    {
      HomeStack: { screen: EmployeeStack,
        navigationOptions:  {
          header: null,
      }
      },
      Add: { screen: AddScreen,
        navigationOptions:  {
          title: 'Add Employee',
      }}
    },
    {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'HomeStack') {
              iconName = `people`;
            } 
             else if (routeName === 'Add') {
                iconName = `add`;
              }
    
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Icon name={iconName} color={'gray'} active={true} style={{color:tintColor,fontSize:40}} />;
          },  
        }),
    
      tabBarOptions: {
        activeTintColor: '#2980b9',
        inactiveTintColor: '#DFDFDF',
        showLabel: false,
        style: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor:'#DFDFDF'
        },
      },
     
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      animationEnabled: false,
      swipeEnabled: false,
    },{lazy:true}
  ); 


 export const RootStack = StackNavigator(
    {
      Main: {
        screen: HomeTabStack,
    
        navigationOptions:  { 
          gesturesEnabled: false,
          headerLeft: null,
          headerTintColor: '#FFFFFF',
          headerStyle: {
            backgroundColor: '#2980b9', 
            elevation: null,
          },
        
      } 
      },
      Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null,
          gesturesEnabled: false,

        }
      },
    },
    {
      initialRouteName: 'Login'
    });

 


