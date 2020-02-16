// // import React from 'react';
// // import { Image,Text } from 'react-native';
// // import PhotoUpload from 'react-native-photo-upload';

// // const ImagePicker =()=>{
// //     return(
// // //  <PhotoUpload
// // //    onPhotoSelect={avatar => {
// // //      if (avatar) {
// // //       // console.log('Image base64 string: ', avatar)
// // //         console.log('Image Uploaded');
// // //     }
// // //    }}
// // //  >
// // //    <Image
// // //      style={{
// // //        paddingVertical: 30,
// // //        width: 150,
// // //        height: 150,
// // //        borderRadius: 75
// // //      }}
// // //      resizeMode='cover'
// // //      source={{
// // //        uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
// // //      }}
// // //    />

// // //    <Text>upload</Text>
// // //  </PhotoUpload>

// //       <PhotoUpload><Text>upload</Text></PhotoUpload>
// //     )}



// // export default ImagePicker;



// import React from 'react';

// import { StyleSheet, Text, View, Button, Image } from 'react-native';

// import ImagePicker from 'react-native-image-picker';

// export default class App extends React.Component {

//   constructor(props) {

//     super(props);

//     this.state = {

//       filePath: {},

//     };

//   }

//   chooseFile = () => {

//     var options = {

//       title: 'Select Image',

//       customButtons: [

//         { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },

//       ],

//       storageOptions: {

//         skipBackup: true,

//         path: 'images',

//       },

//     };

//     ImagePicker.showImagePicker(options, response => {

//       console.log('Response = ', response);

//  

//       if (response.didCancel) {

//         console.log('User cancelled image picker');

//       } else if (response.error) {

//         console.log('ImagePicker Error: ', response.error);

//       } else if (response.customButton) {

//         console.log('User tapped custom button: ', response.customButton);

//         alert(response.customButton);

//       } else {

//         let source = response;

//         // You can also display the image using data:

//         // let source = { uri: 'data:image/jpeg;base64,' + response.data };

//         this.setState({

//           filePath: source,

//         });

//       }

//     });

//   };

//   render()
//  { 
    
    
//      return (
        
//          <View style={styles.container}>
//                   <View style={styles.container}>
    
//             
    
//               <Image
    
//                 source={{     uri: 'data:image/jpeg;base64,' + this.state.filePath.data   }}
    
//                 style={{ width: 100, height: 100 }}
    
//               />
    
//               <Image
    
//                 source={{ uri: this.state.filePath.uri }}
    
//                 style={{ width: 250, height: 250 }}
    
//               />
    
//               <Text style={{ alignItems: 'center' }}>
    
//                 {this.state.filePath.uri}
    
//               </Text>
    
//               <Button title="Choose File" onPress={this.chooseFile.bind(this)} />
    
//             </View>
    
//           </View>
    
//         );
    
//       }
    
//     }
    
//     const styles = StyleSheet.create({
    
//       container: {
    
//         flex: 1,
    
//         backgroundColor: '#fff',
    
//         alignItems: 'center',
    
//         justifyContent: 'center',
    
//       },
    
//     });




import React from 'react';
import {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class App extends React.Component {
  state = {
    avatarSource: null,
    videoSource: null,
  };

  constructor(props) {
    super(props);

    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    this.selectVideoTapped = this.selectVideoTapped.bind(this);
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  selectVideoTapped() {
    const options = {
      title: 'Video Picker',
      takePhotoButtonTitle: 'Take Video...',
      mediaType: 'video',
      videoQuality: 'medium',
    };

    // ImagePicker.showImagePicker(options, response => {
    //   console.log('Response = ', response);

    //   if (response.didCancel) {
    //     console.log('User cancelled video picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   } else {
    //     this.setState({
    //       videoSource: response.uri,
    //     });
    //   }
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View
            style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
            {this.state.avatarSource === null ? (
              <Text>Select a Photo</Text>
            ) : (
              <Image style={styles.avatar} source={this.state.avatarSource} />
            )}
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer]}>
            <Text>Select a Video</Text>
          </View>
        </TouchableOpacity>

        {this.state.videoSource && (
          <Text style={{margin: 8, textAlign: 'center'}}>
            {this.state.videoSource}
          </Text>
        )} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   avatarContainer: {
//     borderColor: '#9B9B9B',
//     borderWidth: 1 / PixelRatio.get(),
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   avatar: {
//     borderRadius: 75,
//     width: 150,
//     height: 150,
//   },
});