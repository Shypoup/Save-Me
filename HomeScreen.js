import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import PhotoUpload from 'react-native-photo-upload';
import LostPost from './src/UI/Components/LostPost';


const HomeScreen =()=>{
  return (
     
  
    <View>
    <LostPost 
    Name="Hesham Gamal" 
    ImageSource={require('./src/UI/Components/hesham2.jpg')}
    Age={9}
    City='Cairo'
    LostDate='20/1/2020'
    />   
    <LostPost 
    Name="Hesham Gamal" 
    ImageSource={require('./src/UI/Components/hesham2.jpg')}
    Age={9}
    City='Cairo'
    LostDate='20/1/2020'
    />   
    <LostPost 
    Name="Hesham Gamal" 
    ImageSource={require('./src/UI/Components/hesham2.jpg')}
    Age={9}
    City='Cairo'
    LostDate='20/1/2020'
    />   

    
    </View>
  )
}


    
export default HomeScreen;