// import 'react-native-gesture-handler';


 import * as React from 'react';
 import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import CreateAcciedentPost from './src/UI/Accidents/CreateAcciedentPost';
import UploadImage from './src/UI/Components/UploadImage';
import Notifications from './src/UI/General/Notifications';
// const Stack = createStackNavigator();

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <NavigationContainer>
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen  name="CreatePost" component={CreatePost} />
//     </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
// function Home() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Profile" component={Profile} />
//       <Tab.Screen name="CreatePost" component={CreatePost} />
//     </Tab.Navigator>
//   );
// }


// function MyStack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//       {/* <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator> */}
        
      
      
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{title: 'Save Me'}}
//         />
        
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Register" component={Register} />  
        
        
        
//         <Stack.Screen name="LostPost" component={LostPost} />
//         <Stack.Screen name="LostDetail" component={LostPostDetail} />
//         <Stack.Screen name="SearchLost" component={SearchLost} />
        
//         <Stack.Screen name="EditProfile" component={EditProfile} />
//         <Stack.Screen name="QR" component={QRGenerator} />
//         <Stack.Screen name="Car accident" component={CreateAcciedentPost} />  
//         <Stack.Screen name="Image" component={ImagePicker} />
//         <Stack.Screen name="CreateLost" component={CreatePost} />
//        <Stack.Screen name="UploadImage" component={UploadImage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default MyTabs;
// // const navigator = createStackNavigator(
// //   {
    
// //     Home: HomeScreen,
// //     Login :Login,
// //     register: Register,
// //     Profile: Profile,
// //     CreateLost :CreatePost,
// //     Picker : PickerComponent,
// //     Date: DatePicker,
// //     Image:ImagePicker,
// //     LPost:LostPost,
// //     LPostDetail: LostPostDetail,
  
// //   },
// //   {
// //     initialRouteName : 'Home',
// //     defaultNavigatonOptions:{
// //       title:'App',
      
// //     },
    
// //   });
  
// //   const App =createAppContainer(navigator);

// //   export default ()=> {
// //       return( 
        
// //        <App />
     
// //       )
// //   };



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import other from './other';

const Tab = createBottomTabNavigator();
const Stack=createStackNavigator();
const Drawer=createDrawerNavigator ();

function Otherr() {
  return (
   

    <Stack.Navigator>
      <Stack.Screen name="other" component={other} /> 
      <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} /> 
    <Stack.Screen name="LostPost" component={LostPost} />
    <Stack.Screen name="LostDetail" component={LostPostDetail} />
    <Stack.Screen name="SearchLost" component={SearchLost} />
    <Stack.Screen name="Car accident" component={CreateAcciedentPost} />  
    <Stack.Screen name="Image" component={ImagePicker} />
  <Stack.Screen name="CreateLost" component={CreatePost} />
   <Stack.Screen name="UploadImage" component={UploadImage} />
   
  
    </Stack.Navigator>
)

}
function Drawerr() {
  return (
    // <Drawer.Navigator initialRouteName="Feed">
    //   <Drawer.Screen
    //     name="Feed"
    //     component={HomeScreen}
    //     options={{ drawerLabel: 'Home' }}
    //   />
    //   <Drawer.Screen
    //     name="Notifications"
    //     component={Notifications}
    //     options={{ drawerLabel: 'Updates' }}
    //   />
    //   <Drawer.Screen
    //     name="Profile"
    //     component={Profile}
    //     options={{ drawerLabel: 'Profile' }}
    //   />
    // </Drawer.Navigator>

    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    
    <Stack.Screen name="other" component={Otherr} /> 
   
 
    </Stack.Navigator>
)

}

function Profilee() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="QR" component={QRGenerator} />
     
    </Stack.Navigator>
  );
}
export default function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator tabstyle={{}}
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: '#360f9a',
        inactiveTintColor: 'gray',
      }}
      screenOptions={({ route }) => ({
        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
           color='gray';

          if (route.name === 'Home') {
            iconName = 'ios-home'
            color= focused ?'#360f9a' : 'gray';
              
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'ios-notifications' : 'md-notifications';
            color= focused ?'#360f9a' : 'gray';
          } else if (route.name === 'Profile') {
          iconName =  'ios-person'
          color= focused ?'#360f9a' : 'gray';
        }

          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      
      
    >
      <Tab.Screen
        name="Home"
        component={Drawerr}

       
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        
          
        
      />
      <Tab.Screen
        name="Profile"
        component={Profilee}
        
        
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}11