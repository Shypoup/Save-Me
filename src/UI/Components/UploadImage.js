
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import FormData from 'form-data';

import axios from 'axios';



export default class App extends React.Component {
  state = {
    avatarSource: null,
    videoSource: null,
    imagename:null,
    image_uri:null,
    image_path:null,
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
         this.state.imagename= response.fileName;
         this.uploadImage(response.uri);
         this.state.image_uri=response.uri;
         this.state.image_path=response.uri.path;
        
        
        // You can also display the image using data:
       // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        console.log(this.state.imagename);
        console.log(response.origURL);
        
        

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  uploadImage =async (image_uri)=>{
    const file ={
      uri:image_uri,
      name:'younis.jpg',
      type:'image/jpeg',
    }
    let Data =new FormData();
    Data.append('childname','Hesham');
    Data.append('Gender','Male');
    Data.append('phone','01112345665');
    Data.append('file',file);
   

    // Data.append('',
    // {type:'image/jpeg',
    //  uri:image_uri,
    // path:this.image_path,
    //   name:'hello.jpg'})
    axios({
      method:'post',
      url:'http://192.168.1.7:3000/lost',
      data :{
        // Childname: 'Hesham',
        // Gender : 'male',
        // phone: '01122378660',
        // 'file': 'file:///storage/emulated/0/Pictures/image-34a759ae-b0f9-4466-ab2e-9bbf43a7fe27.jpg'
       Data 
        
        
      }
      ,
      headers:{
         'X-AUTH':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTU5NmU4MDZkYzQ0NDMyNGMyYWI3OTMiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTgzMjM5MDQwfQ.KZPkxkEMZTgBWfl44c0wy9TLyb2cOWrZ1vYF6JyLYpc",
         'Content-Type': 'application/json',
         //  'accept': 'application/json',
        //  'Accept-Language': 'en-US,en;q=0.8',
        //  'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
       }
  }).then((res) => {
    console.log('Done');
    console.log('---------------------');
     console.log("Response is:",res); 
      
  }).catch((error) => {
    console.log("Failedrr");
      if(error.response){
        console.log(error.response.data);
         console.log(error.response.status);
         console.log(error.response.headers);
       console.log("Failed 1");
      }else if (error.request) {
         console.log(error.request);
         console.log("Failed 2");
     } else {
         // Something happened in setting up the request and triggered an Error
         console.log('Error', error.message);
         console.log("Failed 3");
     }
     console.log(error.config);
    }
    )
  
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
         // alert("You pressed");
          let Data =new FormData();
          Data.append('information','ok');
         
      
          Data.append('photo',
          {type:'image/jpg',
           uri:this.image_uri,
            name:'hello.jpg'})
          axios({
            method:'post',
            url:'http://192.168.1.7:3000/found',Data,
            headers:{
               'X-AUTH':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTU5NmU4MDZkYzQ0NDMyNGMyYWI3OTMiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTgzMjM5MDQwfQ.KZPkxkEMZTgBWfl44c0wy9TLyb2cOWrZ1vYF6JyLYpc",
              
               //  'accept': 'application/json',
              //  'Accept-Language': 'en-US,en;q=0.8',
              //  'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
             }
        }).then((res) => {
          alert("Uploaded");
          console.log('Done');
          console.log('---------------------');
           console.log("Response is:",res); 
            
        }).catch((error) => {
          alert("Failed");
          console.log("Failedss");
          //   if(error.response){
          //     console.log(error.response.data);
          //   //    console.log(error.response.status);
          //   //    console.log(error.response.headers);
          //    console.log("Failed 1");
          //   }else if (error.request) {
          //      console.log(error.request);
          //      console.log("Failed 2");
          //  } else {
          //      // Something happened in setting up the request and triggered an Error
          //      console.log('Error', error.message);
          //      console.log("Failed 3");
          //  }
          //  console.log(error.config);
          }
          )
        
       }
      
        //     axios({
        //         method:'post',
        //         url:'http://192.168.1.7:3000/RoadAccedint',
        //         data:{
        //           uploadData
                    
        //         },
        //         headers:{
        //            'X-AUTH':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTU5NmU4MDZkYzQ0NDMyNGMyYWI3OTMiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTgyOTE5MzIwfQ.OUdMSqfpUV7MA6QnCP7fGkHelhK9UEaTUtj0KnrMo7k",
        //            'accept': 'application/json',
        //            'Accept-Language': 'en-US,en;q=0.8',
        //            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        //          }
        //     }).then((res) => {
        //         console.log("Response is:",res); 
        //     }).catch((error) => {
        //         if(error.response){
        //            console.log(error.response.data);
        //            console.log(error.response.status);
        //            console.log(error.response.headers);
        //         }else if (error.request) {
        //            console.log(error.request);
        //        } else {
        //            // Something happened in setting up the request and triggered an Error
        //            console.log('Error', error.message);
        //        }
        //        console.log(error.config);
        //     })
        
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