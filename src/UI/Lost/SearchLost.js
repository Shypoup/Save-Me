// import React from 'react';
// import {View, StyleSheet,Text,Image} from 'react-native';
// import PhotoUpload from 'react-native-photo-upload';



// const SearchLost =()=>{
//   return (
     
  
//      <PhotoUpload
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
//      source={require('../Components/hesham.jpg')}
//    />

//    <Text>upload</Text>
//   </PhotoUpload>
  
//   )
// }


    
// export default SearchLost;

// import React, { Fragment, Component } from 'react';
// import ImagePicker from 'react-native-image-picker';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Image,
//   Button,
//   Dimensions,
//   TouchableOpacity
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const options = {
//   title: 'Select Avatar',
//   customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };
// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       filepath: {
//         data: '',
//         uri: ''
//       },
//       fileData: '',
//       fileUri: ''
//     }
//   }

//   chooseImage = () => {
//     let options = {
//       title: 'Select Image',
//       customButtons: [
//         { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
//       ],
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//     ImagePicker.showImagePicker(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//         alert(response.customButton);
//       } else {
//         const source = { uri: response.uri };

//         // You can also display the image using data:
//         // const source = { uri: 'data:image/jpeg;base64,' + response.data };
//         // alert(JSON.stringify(response));s
//         console.log('response', JSON.stringify(response));
//         this.setState({
//           filePath: response,
//           fileData: response.data,
//           fileUri: response.uri
//         });
//       }
//     });
//   }

//   launchCamera = () => {
//     let options = {
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//     ImagePicker.launchCamera(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//         alert(response.customButton);
//       } else {
//         const source = { uri: response.uri };
//         console.log('response', JSON.stringify(response));
//         this.setState({
//           filePath: response,
//           fileData: response.data,
//           fileUri: response.uri
//         });
//       }
//     });

//   }

//   launchImageLibrary = () => {
//     let options = {
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//     ImagePicker.launchImageLibrary(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//         alert(response.customButton);
//       } else {
//         const source = { uri: response.uri };
//         console.log('response', JSON.stringify(response));
//         this.setState({
//           filePath: response,
//           fileData: response.data,
//           fileUri: response.uri
//         });
//       }
//     });

//   }

//   renderFileData() {
//     if (this.state.fileData) {
//       return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
//         style={styles.images}
//       />
//     } else {
//       return <Image source={require('../Components/hesham.jpg')}
//         style={styles.images}
//       />
//     }
//   }

//   renderFileUri() {
//     if (this.state.fileUri) {
//       return <Image
//         source={{ uri: this.state.fileUri }}
//         style={styles.images}
//       />
//     } else {
//       return <Image
//         source={require('../Components/photo.png')}
//         style={styles.images}
//       />
//     }
//   }
//   render() {
//     return (
//       <Fragment>
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView>
//           <View style={styles.body}>
//             {/* <Text style={{textAlign:'center',fontSize:20,paddingBottom:10}} >Pick Images from Camera & Gallery</Text> */}
//             <View style={styles.ImageSections}>
//               {/* <View>
//                 {this.renderFileData()}
//                 <Text  style={{textAlign:'center'}}>Base 64 String</Text>
//               </View> */}
//               <View>
//                 {this.renderFileUri()}
//                 <Text style={{textAlign:'center'}}>File Uri</Text>
//               </View>
//             </View>

//             <View style={styles.btnParentSection}>
//               <TouchableOpacity onPress={this.chooseImage} style={styles.btnSection}  >
//                 <Text style={styles.btnText}>Choose File</Text>
//               </TouchableOpacity>

//               <TouchableOpacity onPress={this.launchCamera} style={styles.btnSection}  >
//                 <Text style={styles.btnText}>Directly Launch Camera</Text>
//               </TouchableOpacity>

//               <TouchableOpacity onPress={this.launchImageLibrary} style={styles.btnSection}  >
//                 <Text style={styles.btnText}>Directly Launch Image Library</Text>
//               </TouchableOpacity>

//               <TouchableOpacity  style={styles.btnSearch}  >
//                 <Text style={styles.btnSearchText}>Search</Text>
//               </TouchableOpacity>
//             </View>

//           </View>
//         </SafeAreaView>
//       </Fragment>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },

//   body: {
//     backgroundColor: Colors.white,
//     justifyContent: 'center',
//     borderColor: 'black',
//     borderWidth: 1,
//     height: Dimensions.get('screen').height - 20,
//     width: Dimensions.get('screen').width
//   },
//   ImageSections: {
//     display: 'flex',
//     flexDirection: 'row',
//     paddingHorizontal: 8,
//     paddingVertical: 8,
//     justifyContent: 'center'
//   },
//   images: {
//     width: 150,
//     height: 150,
//     borderColor: 'black',
//     borderWidth: 1,
//     marginHorizontal: 3
//   },
//   btnParentSection: {
//     // alignItems: 'center',
//     marginTop:10
//   },
//   btnSection: {

//     borderRadius : 25,
//     backgroundColor: '#360f9a',
//     marginVertical:2,
//     marginHorizontal: 90,
//     marginBottom: 10,
//   },
//   btnText: {
//     fontSize:15,
//     color:'white',
//     alignSelf:'center',
//     fontFamily:'sans-serif-condensed',
//     marginVertical:5,
//   },
//   btnSearch: {

//     borderRadius : 25,
//     backgroundColor: '#360f9a',
//     marginVertical:5,
//     marginHorizontal: 50,
//     marginTop: 60,
//   },
//   btnSearchText: {
//     fontSize:25,
//     color:'white',
//     alignSelf:'center',
//     fontFamily:'sans-serif-condensed',
//     marginVertical:5,
//   },
// });





// import React from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   PixelRatio,
//   TouchableOpacity,
//   Image,
//   Platform
// } from 'react-native';

// import ImagePicker from 'react-native-image-picker';


// export default class RNImagePicker extends React.Component {

//   state = {
//     avatarSource: null,
//     videoSource: null,
//     progress: 0,
//   };

//   selectPhotoTapped() {
//     const options = {
//       quality: 1.0,
//       maxWidth: 500,
//       maxHeight: 500,
//       storageOptions: {
//         skipBackup: true
//       }
//     };

//     ImagePicker.showImagePicker(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled photo picker');
//       }
//       else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       }
//       else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       }
//       else {
//         var source;

//         // You can display the image using either:
//         //source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

//         //Or:
//         if (Platform.OS === 'android') {
//           source = {uri: response.uri, isStatic: true};
//         } else {
//           source = {uri: response.uri.replace('file://', ''), isStatic: true};
//         }
//         const data = new FormData();
      
        
//         data.append('photo', {
//           uri: source.uri,
//           type: 'image/jpeg',
//           name: 'testPhotoName'
//         });
//         const url = Platform.OS === 'android' ? 'http://10.0.3.2:3000' : 'http://localhost:3000'; // genymotion's localhost is 10.0.3.2
//         fetch('http://192.168.1.6:3000/image', {
//           method: 'post',
//           body: data,
//           headers: new Headers({
//             'X-AUTH': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTdjYjY2OTM5YjM2NTIwMzQ1MzQ5OTYiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg1MjMxNDY2fQ.FThrkFg_EjXtI1Li-Qxa-uCiuSb9BR2MYMD7o56QWy0`, 
            
//           }), 
//         }, (e) => {
//           const progress = e.loaded / e.total;
//           console.log(progress);
//           this.setState({
//             progress: progress
//           });
//         }).then((res) => console.log(res), (e) => console.log(e))

//         this.setState({
//           avatarSource: source
//         });
//       }
//     });
//   }

//   selectVideoTapped() {
//     const options = {
//       title: 'Video Picker',
//       takePhotoButtonTitle: 'Take Video...',
//       mediaType: 'video',
//       videoQuality: 'medium'
//     };

//     ImagePicker.showImagePicker(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled video picker');
//       }
//       else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       }
//       else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       }
//       else {
//         this.setState({
//           videoSource: response.uri
//         });
//       }
//     });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>{this.state.progress}</Text>
//         <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
//           <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
//           { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
//             <Image style={styles.avatar} source={this.state.avatarSource} />
//           }
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
//           <View style={[styles.avatar, styles.avatarContainer]}>
//             <Text>Select a Video</Text>
//           </View>
//         </TouchableOpacity>

//         { this.state.videoSource &&
//           <Text style={{margin: 8, textAlign: 'center'}}>{this.state.videoSource}</Text>
//         }
//       </View>
//     );
//   }

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   },
//   avatarContainer: {
//     borderColor: '#9B9B9B',
//     borderWidth: 1 / PixelRatio.get(),
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   avatar: {
//     borderRadius: 75,
//     width: 150,
//     height: 150
//   }
// });


import KeyEvent from 'react-native-keyevent';
import React from 'react';
import {Text} from 'react-native';

export default class SearchLost extends React.Component{
// componentDidMount() {
//   // if you want to react to keyDown
//   KeyEvent.onKeyDownListener((keyEvent) => {
//     console.log(`onKeyDown keyCode: ${keyEvent.keyCode}`);
//     console.log(`Action: ${keyEvent.action}`);
//     console.log(`Key: ${keyEvent.pressedKey}`);
//   });

//   // if you want to react to keyUp
//   KeyEvent.onKeyUpListener((keyEvent) => {
//     console.log(`onKeyUp keyCode: ${keyEvent.keyCode}`);
//     console.log(`Action: ${keyEvent.action}`);
//     console.log(`Key: ${keyEvent.pressedKey}`);
//   });

//   // if you want to react to keyMultiple
//   KeyEvent.onKeyMultipleListener((keyEvent) => {
//     console.log(`onKeyMultiple keyCode: ${keyEvent.keyCode}`);
//     console.log(`Action: ${keyEvent.action}`);
//     console.log(`Characters: ${keyEvent.characters}`);
//   });
// }

// componentWillUnmount() {
//   // if you are listening to keyDown
//   KeyEvent.removeKeyDownListener();

//    // if you are listening to keyUp
//   KeyEvent.removeKeyUpListener();

//    // if you are listening to keyMultiple
//   KeyEvent.removeKeyMultipleListener();
// }


componentDidMount() {
  KeyEvent.onKeyDownListener((keyEvent) => {
    console.warn("before Pressed")
      if (keyEvent.keyCode === 'Keycode of the power button'){
          this.timeout = setTimeout(() => {
              //Your SOS Function here
              console.warn("Pressed")
          }, 1000)
      }
  });

  KeyEvent.onKeyUpListener((keyEvent) => {
      if (keyEvent.keyCode === 'Keycode of the power button'){
          clearTimeout(this.timeout)
      }
  })
}

componentWillUnmount() {
  KeyEvent.removeKeyDownListener();
  KeyEvent.removeKeyUpListener();
}
render(){
  return <Text>Hello</Text>
}


}