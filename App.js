import * as React from 'react';

//Navogation libraries
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
//Screens 
import HomeScreen from './HomeScreen';
import Login from './src/UI/General/Login';
import Register from './src/UI/General/Register';
import Profile from './src/UI/General/Profile';
import CreatePost from './src/UI/Lost/CreatePost';
import PickerComponent from './src/UI/Components/PickerComponent';
import DatePicker from './src/UI/Components/DatePicker';
import ImagePicker from './src/UI/Components/ImagePicker'
import LostPost from './src/UI/Components/LostPost';
import PostDetail from './src/UI/Components/PostDetail';
import SearchLost from './src/UI/Lost/SearchLost';
import EditProfile from './src/UI/General/EditProfile';
import QRGenerator from './src/UI/Components/QRGenerator';
import CreateAcciedentPost from './src/UI/Accidents/CreateAcciedentPost';
import UploadImage from './src/UI/Components/UploadImage';
import Notifications from './src/UI/General/Notifications';
import other from './other';
import SelectPost from './src/UI/Components/SelectPost';
import AccidentsPosts from './src/UI/Accidents/ShowAccidentPosts';
import LostPosts from './src/UI/Lost/ShowLostPosts';
import CreateFoundPost from './src/UI/Lost/CreateFoundPost';
import DangerMode from './src/UI/Danger/DangerMode';
import LostThings from './src/UI/Additional/LostThings';
import Humanitarian from './src/UI/Additional/Humanitarian';
import HumanitarianPosts from './src/UI/Additional/HumanitarianPosts';
import LostThingsPosts from './src/UI/Additional/LostThingsPosts';

//Objects of screens
const Tab = createBottomTabNavigator();  //bottonTab object
const Stack=createStackNavigator();      //Stack  object
const Drawer = createDrawerNavigator();  // Drawer object  not used
const TopTab = createMaterialTopTabNavigator(); // Toptab object

const MAIN_COLOR = '#b31605';

//topTap
function topTabs() {
  return (
    <TopTab.Navigator
    
    tabBarOptions={{
      activeTintColor:MAIN_COLOR,
      indicatorStyle: { backgroundColor:MAIN_COLOR},
      activeTintColor: MAIN_COLOR,
      scrollEnabled:true,
      
    // style: { under },
  }
  
}
    >
      <TopTab.Screen name="Home" component={HomeScreen} />
      <TopTab.Screen name="Lost " component={LostPosts} />
      <TopTab.Screen name="Accidents" component={AccidentsPosts} />
      <TopTab.Screen name="Lost things" component={LostThingsPosts} />
      <TopTab.Screen name="Humanitarian" component={HumanitarianPosts} />
    </TopTab.Navigator>
  );
}





// Stack navigation for Profile
function Profilee() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="QR" component={QRGenerator} />
     
    </Stack.Navigator>
  );
}


// Stack navigation for Create Post
function Create(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Select" component={SelectPost} options={{ headerShown: false }}/>
      <Stack.Screen name="CreateLost" component={CreatePost} />
      <Stack.Screen name="Create Founded" component={CreateFoundPost}  /> 
      <Stack.Screen name="Car accident" component={CreateAcciedentPost}  /> 
      <Stack.Screen name="LostThings Post" component={LostThings}  /> 
      <Stack.Screen name="Humanitarian" component={Humanitarian}  /> 
      
    </Stack.Navigator>
  );
}





// Stack navigation for Login 
export default function MyTabs() {
  return (
  
  <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Ho" component={Home} options={{ headerShown: false }} />
          
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} /> 
          <Stack.Screen name="Post Details" component={PostDetail}  />    
           
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}



//Botton Tab Navigator  "Main Navigator"
function Home (){
  return(
    <Tab.Navigator tabstyle={{}}
    initialRouteName="HomeScreen"
    tabBarOptions={{
      activeTintColor: MAIN_COLOR,
      inactiveTintColor: 'gray',
    }}
    screenOptions={({ route }) => ({
      
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
         color='gray';

        if (route.name === 'Home') {
          iconName = 'ios-home'
          color= focused ?MAIN_COLOR : 'gray';
            
        } else if (route.name === 'Notifications') {
          iconName = focused ? 'ios-notifications' : 'md-notifications';
          color= focused ?MAIN_COLOR : 'gray';
        } else if (route.name === 'Profile') {
        iconName =  'ios-person'
        color= focused ?MAIN_COLOR : 'gray';
      }else if (route.name === 'Create Post') {
        iconName =  'ios-add-circle'
        color= focused ?MAIN_COLOR : 'gray';
      }else if (route.name === 'Search') {
        iconName =  'ios-search'
        color= focused ?MAIN_COLOR : 'gray';
      }else if (route.name === 'Danger') {
        iconName =  'md-warning'
        color= focused ?MAIN_COLOR : 'gray';
      }
      else {
        iconName =  'md-remove-circle'
        color= focused ?MAIN_COLOR : 'gray';
      }

        
        
        

      
        
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    
    
  >
    <Tab.Screen
      name="Home"
      component={topTabs}

     
    />
     <Tab.Screen
      name="Create Post"
      component={Create}
      
      
    />
   
   <Tab.Screen
      name="Search"
      component={SearchLost}
      
      
    />


    <Tab.Screen
      name="Danger"
      component={DangerMode}
      
        
      
    />
    <Tab.Screen
      name="Profile"
      component={Profilee}
      
      
    />
  </Tab.Navigator>

  )
}