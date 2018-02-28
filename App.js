/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import { View,AsyncStorage,ActivityIndicator} from 'react-native';
import {RootStack} from './src/Router';
import  {RootStackLogged} from './src/Router';;
import allReducers from './src/reducers/index.js';
import ReduxThunk from 'redux-thunk';
import { Root } from "native-base";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(allReducers, {}, applyMiddleware(ReduxThunk));
class App extends Component{
  render() {
 return( 
  <Root>
  <Provider store={store}>
  <RootStack />
  </Provider>
  </Root>
  );
  }
}


export default App;
