// import React from 'react';
// import {
//   Image,
//   Text,
//   TouchableOpacity,
//   View,
//   StyleSheet,
// } from 'react-native';
// import ImagePicker from 'react-native-image-picker';

// import RNFetchBlob from 'rn-fetch-blob';




// export default class App extends React.Component {
//   state = {
//     avatarSource: null,
//     videoSource: null,
//     imagename:null,
//     image_uri:null,
//     image_path:null,
//     image_type:null,
//     data:null
//   };

//   constructor(props) {
//     super(props);

//     this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
  
//   }

//   selectPhotoTapped() {
//     const options = {
//       quality: 1.0,
//       maxWidth: 500,
//       maxHeight: 500,
//       storageOptions: {
//         skipBackup: true,
//       },
//     };

//     ImagePicker.showImagePicker(options, response => {
//      // console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled photo picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         let source = {uri: response.uri};
//         alert("Photo Uploaded");
//         console.log(response);
        
//          this.state.imagename= response.fileName;
//          this.uploadImage(response.path);
//          this.state.image_uri=response.uri;
//          this.state.image_path=response.path;
//          this.state.image_type = response.type;
//          this.state.data = response.data;
        
        
//         // You can also display the image using data:
//        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
//         // console.log(this.state.imagename);
//         // console.log(this.state.image_path);
//         // console.log(this.state.image_uri);
        
        
//         //console.log(response.origURL);
        
        

//         this.setState({
//           avatarSource: source,
//         });
//       }
//     });
//   }

//   uploadImage =async (image_uri)=>{
//     // console.log(image_path);
    
//     RNFetchBlob.fetch('POST', 'http://192.168.1.6:3000/lost', {
      
//       'Content-Type' : 'multipart/formdata',
//       'X-AUTH':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTdmOGUzNjllNDljYTI0MzhlMGJkMzgiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg1NDE3ODc2fQ.cIvpR86UblPnWB-ZvhTJ1HVo66XDRC6K6iP7ThcFKhQ'
//     }, [
//       // part file from storage
//       { name : '', filename : this.state.imagename, type:this.image_type, data: RNFetchBlob.wrap(image_uri)},
//       {name:'Childname',data:'yasser tarek'},
//       {name:'Gender',data:'male'},
//       {name:'phone',data:'0111250176'}

//       // elements without property filename will be sent as plain text
//     ]).then((resp) => {
//       console.log(resp);     // ...
//     }).catch((err) => {
//       // ...
//       console.log(err);
      
//     })
   
  
//  }

//   render() {
//     return (
//      <View style={styles.Container} >
//         <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
//           <View 
//            >
//             {this.state.avatarSource === null ? (
//               <Text style={styles.Text}>Select a Photo</Text>
//             ) : (
//               <Image  source={this.state.avatarSource} />
//             )}
//             {this.state.imagename !=null  ? <Text Text style={styles.Text}>{this.state.imagename}</Text>: null }
            
//         <TouchableOpacity style={styles.Button}
        
        
//         onPress={()=>{
//           RNFetchBlob.fetch('POST', 'http://192.168.1.4:3000/found', {
      
//             'Content-Type' : 'multipart/formdata',
//           }, [
//             // part file from storage
//             { name : '', filename : 'Ahmed.jpg', type:'image/jpeg', data: RNFetchBlob.wrap('/storage/emulated/0/Pictures/image-2d1fd220-b32b-4d1f-b0a7-15e25d727e89.jpg')},
//             {name:'name',data:'yasser tarek'},
//             {name:'Gender',data:'male'},
//             {name:'phone',data:'0111250176'}
      
//             // elements without property filename will be sent as plain text
//           ]).then((resp) => {
//             console.log(resp);     // ...
//           }).catch((err) => {
//             // ...
//             console.log(err);
            
//           })
        
//         }
//            }
//                 >
//                     <Text  style={styles.ButtonText}>Post</Text>
//                 </TouchableOpacity>
                
        
            
//           </View>
//         </TouchableOpacity>

      
//       </View>
//     );
//   }
 
// }

// const styles=StyleSheet.create({

//     Container:{
//         borderBottomWidth: 1,
//         color: '#360f9a',
//         borderColor: '#360f9a',
//         flexDirection:'row',
//        marginVertical:20,
        
//     },
//     Text:
//     {
//         color: '#360f9a',
//         marginVertical:10, 
//         marginHorizontal:10, 
//     }
// });








import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import RNFetchBlob from 'rn-fetch-blob';




export default class App extends React.Component {
  state = {
    avatarSource: null,
    videoSource: null,
    imagename:null,
    image_uri:null,
    image_path:null,
    image_type:null,
    data:null
  };

  constructor(props) {
    super(props);

    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
  
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
     // console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};
        alert("Photo Uploaded");
        console.log(response);
        
         this.state.imagename= response.fileName;
         this.uploadImage(response.path);
         this.state.image_uri=response.uri;
         this.state.image_path=response.path;
         this.state.image_type = response.type;
         this.state.data = response.data;
        
        
        // You can also display the image using data:
       // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        // console.log(this.state.imagename);
        // console.log(this.state.image_path);
        // console.log(this.state.image_uri);
        
        
        //console.log(response.origURL);
        
        

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  uploadImage =async (image_uri)=>{
    // console.log(image_path);
    
    RNFetchBlob.fetch('POST', 'http://192.168.1.6:3000/lost', {
      
      'Content-Type' : 'multipart/formdata',
      'X-AUTH':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTdmOGUzNjllNDljYTI0MzhlMGJkMzgiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg1NDE3ODc2fQ.cIvpR86UblPnWB-ZvhTJ1HVo66XDRC6K6iP7ThcFKhQ'
    }, [
      // part file from storage
      { name : '', filename : this.state.imagename, type:this.image_type, data: RNFetchBlob.wrap(image_uri)},
      {name:'Childname',data:'yasser tarek'},
      {name:'Gender',data:'male'},
      {name:'phone',data:'0111250176'}

      // elements without property filename will be sent as plain text
    ]).then((resp) => {
      console.log(resp);     // ...
    }).catch((err) => {
      // ...
      console.log(err);
      
    })
   
  
 }

  render() {
    return (
     <View style={styles.Container} >
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View 
           >
            {this.state.avatarSource === null ? (
              <Text style={styles.Text}>Select a Photo</Text>
            ) : (
              <Image  source={this.state.avatarSource} />
            )}
            {this.state.imagename !=null  ? <Text Text style={styles.Text}>{this.state.imagename}</Text>: null }
            
        <TouchableOpacity style={styles.Button}
        
        
        onPress={()=>{
          RNFetchBlob.fetch('POST', 'http://192.168.1.4:3000/found', {
      
            'Content-Type' : 'multipart/formdata',
          }, [
            // part file from storage
            { name : '', filename : 'Ahmed.jpg', type:'image/jpeg', data: RNFetchBlob.wrap('/storage/emulated/0/Pictures/image-2d1fd220-b32b-4d1f-b0a7-15e25d727e89.jpg')},
            {name:'name',data:'yasser tarek'},
            {name:'Gender',data:'male'},
            {name:'phone',data:'0111250176'}
      
            // elements without property filename will be sent as plain text
          ]).then((resp) => {
            console.log(resp);     // ...
          }).catch((err) => {
            // ...
            console.log(err);
            
          })
        
        }
           }
                >
                    <Text  style={styles.ButtonText}>Post</Text>
                </TouchableOpacity>
                
        
            
          </View>
        </TouchableOpacity>

      
      </View>
    );
  }
 
}

const styles=StyleSheet.create({

    Container:{
        borderBottomWidth: 1,
        color: '#360f9a',
        borderColor: '#360f9a',
        flexDirection:'row',
       marginVertical:20,
        
    },
    Text:
    {
        color: '#360f9a',
        marginVertical:10, 
        marginHorizontal:10, 
    }
});

