import React from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import PhotoUpload from 'react-native-photo-upload';



const SearchLost =()=>{
  return (
     
  
     <PhotoUpload
   onPhotoSelect={avatar => {
     if (avatar) {
      // console.log('Image base64 string: ', avatar)
        console.log('Image Uploaded');
    }
   }}
 >
   <Image
     style={{
       paddingVertical: 30,
       width: 150,
       height: 150,
       borderRadius: 75
     }}
     resizeMode='cover'
     source={require('../Components/hesham.jpg')}
   />

   <Text>upload</Text>
  </PhotoUpload>
  
  )
}


    
export default SearchLost;