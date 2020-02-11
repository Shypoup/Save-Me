import React from 'react';
import { Image,Text } from 'react-native';
import PhotoUpload from 'react-native-photo-upload';

const ImagePicker =()=>{
    return(
//  <PhotoUpload
//    onPhotoSelect={avatar => {
//      if (avatar) {
//       // console.log('Image base64 string: ', avatar)
//         console.log('Image Uploaded');
//     }
//    }}
//  >
//    <Image
//      style={{
//        paddingVertical: 30,
//        width: 150,
//        height: 150,
//        borderRadius: 75
//      }}
//      resizeMode='cover'
//      source={{
//        uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
//      }}
//    />

//    <Text>upload</Text>
//  </PhotoUpload>

      <PhotoUpload><Text>upload</Text></PhotoUpload>
    )}



export default ImagePicker;