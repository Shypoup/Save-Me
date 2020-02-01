import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './HomeScreen'
import Login from './src/UI/General/Login';
import Register from './src/UI/General/Register';
import Profile from './src/UI/General/Profile';


const navigator = createStackNavigator(
  {
    
    Home: HomeScreen,
    Login :Login,
    register: Register,
    Profile: Profile,
  
  },
  {
    initialRouteName : 'Profile',
    defaultNavigatonOptions:{
      title:'App',
      
    },
    
  });
  
  const App =createAppContainer(navigator);

  export default ()=> {
      return( 
        
       <App />
     
      )
  };