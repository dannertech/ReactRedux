import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import subjectsReducer from './SubjectsReducer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import Subjects from './screens/Subjects';
import SelectSubject from './screens/SelectSubject';

const Stack = createStackNavigator();


const store = createStore(subjectsReducer);



export default class App extends Component {
  render(){
    return(
      <Provider store={store}>
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Home" component={Home}/>
         <Stack.Screen name="Subjects" component={Subjects} />
         <Stack.Screen name="SelectSubject" component={SelectSubject} />
       </Stack.Navigator>
     </NavigationContainer>
     </Provider>
    )
  }
}

