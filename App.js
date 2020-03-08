// import 'react-native-gesture-handler';


 import * as React from 'react';
 import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import other from './other';
import SelectPost from './src/UI/Components/SelectPost';
import AccidentsPosts from './src/UI/Accidents/ShowAccidentPosts';
import LostPosts from './src/UI/Lost/ShowLostPosts';

const Tab = createBottomTabNavigator();
const Stack=createStackNavigator();
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();

function topTabs() {
  return (
    <TopTab.Navigator
    tabBarOptions={{
      activeTintColor:'#360f9a',
      indicatorStyle: {color:'#360f9a'},
      activeTintColor: '#360f9a',
    // style: { backgroundColor: 'powderblue' },
  }}
    >
      <TopTab.Screen name="Home" component={HomeScreen} />
      <TopTab.Screen name="Lost " component={LostPosts} />
      <TopTab.Screen name="Accidents" component={AccidentsPosts} />
    </TopTab.Navigator>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

function Otherr() {
  return (
   

    <Stack.Navigator>
      <Stack.Screen name="other" component={other} /> 
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} /> 
    <Stack.Screen name="LostPost" component={LostPost} options={{ headerShown: false }} />
    
    <Stack.Screen name="SearchLost" component={SearchLost} options={{ headerShown: false }}/>
     
    <Stack.Screen name="Image" component={ImagePicker} />
  
   <Stack.Screen name="UploadImage" component={UploadImage} />
   
  
    </Stack.Navigator>
)

}
function Drawerr() {
  return (
    <Stack.Navigator>
      
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="other" component={Otherr} />  
    <Stack.Screen name="LostDetail" component={LostPostDetail}  />
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

function Create(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Select" component={SelectPost} options={{ headerShown: false }}/>
      <Stack.Screen name="CreateLost" component={CreatePost} />
      <Stack.Screen name="Car accident" component={CreateAcciedentPost}  /> 
    </Stack.Navigator>
  );
}






/************BUTTOMTAPNAVIGATOR */
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
        }else if (route.name === 'Create Post') {
          iconName =  'ios-add-circle'
          color= focused ?'#360f9a' : 'gray';
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
}