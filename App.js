import 'react-native-gesture-handler';


import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Login from './src/UI/General/Login';
import Register from './src/UI/General/Register';
import Profile from './src/UI/General/Profile';
import CreatePost from './src/UI/Lost/CreatePost';
import PickerComponent from './src/UI/Components/PickerComponent';
import DatePicker from './src/UI/Components/DatePicker';
import ImagePicker from './src/UI/Components/ImagePicker'
import LostPost from './src/UI/Components/LostPost';
import LostPostDetail from './src/UI/Components/LostPostDetail';
import SearchLost from './src/UI/Lost/SearchLost';
import EditProfile from './src/UI/General/EditProfile';
import QRGenerator from './src/UI/Components/QRGenerator';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator> */}
      
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Save Me'}}
        />
        
        <Stack.Screen name="Login" component={Login} />
        
        <Stack.Screen name="CreateLost" component={CreatePost} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="LostPost" component={LostPost} />
        <Stack.Screen name="LostDetail" component={LostPostDetail} />
        <Stack.Screen name="SearchLost" component={SearchLost} />
        <Stack.Screen name="Image" component={ImagePicker} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="QR" component={QRGenerator} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
// const navigator = createStackNavigator(
//   {
    
//     Home: HomeScreen,
//     Login :Login,
//     register: Register,
//     Profile: Profile,
//     CreateLost :CreatePost,
//     Picker : PickerComponent,
//     Date: DatePicker,
//     Image:ImagePicker,
//     LPost:LostPost,
//     LPostDetail: LostPostDetail,
  
//   },
//   {
//     initialRouteName : 'Home',
//     defaultNavigatonOptions:{
//       title:'App',
      
//     },
    
//   });
  
//   const App =createAppContainer(navigator);

//   export default ()=> {
//       return( 
        
//        <App />
     
//       )
//   };