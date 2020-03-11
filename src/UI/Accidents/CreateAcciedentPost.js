import React,{useState} from 'react';
import {View, StyleSheet,TextInput,Text,TouchableOpacity,Picker,Image} from 'react-native';
import axios from 'axios';
import UploadImage from '../Components/UploadImage';
// import uploadData from '../Components/UploadImage';
import FormData from 'form-data';

// let dataa=uploadData;

const CreateAcciedentPost = ({navigation}) =>{
    
    return (
       
      <View style ={styles.Container}>



        
    <Text style={styles.WelcomText} >Create Post</Text>
    
       
       <TextInput 
       style={styles.TextinputContainer}
        returnKeyType = { "next" }
        onSubmitEditing={() => { this.Phone.focus(); }}
        blurOnSubmit={false}
        placeholder='Description' 
        placeholderTextColor='#360f9a' />

       <TextInput 
       style={styles.TextinputContainer}
       ref={(input) => { this.Phone = input; }} 
       placeholder='Phone' 
       placeholderTextColor='#360f9a' 
       textContentType='telephoneNumber'
       keyboardType='numeric'
        />
       
       <UploadImage fileName={1} /> 


        <TouchableOpacity style={styles.Button}
        
        
// onPress={()=>{
  
//     axios({
//         method:'post',
//         url:'http://192.168.1.7:3000/RoadAccedint',
//         data:{
         
//             dataa
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

//    }}
        >
            <Text  style={styles.ButtonText}>Post</Text>
        </TouchableOpacity>
        

    

    </View>
  
  )
}

const styles =StyleSheet.create({
    Container:{
        marginHorizontal: 50,
    },
    
    WelcomText:{
        color:'#360f9a',
        fontSize : 28,
       alignSelf:'center',
       margin:20,
       
    },
    TextinputContainer:{
        borderBottomWidth: 1,
        //borderRadius : 25,
        //borderWidth: 2,
        borderColor: '#360f9a',
        flexDirection:'row',
        
        paddingHorizontal:20,
        marginVertical:10,
        
    },
    Textinput :{
      
        fontSize : 15,
        color : '#000',
        
       
    },
    Icon:{
        fontSize: 40, 
    },
    Button:{
        borderRadius : 25,
        backgroundColor: '#360f9a',
        marginVertical:20,

    },
    ButtonText:{
        fontSize:30,
        color:'white',
        alignSelf:'center',
        fontFamily:'sans-serif-condensed',
        marginVertical:5,
    },
    CreateAccountContainer:{
        flexDirection:'row',
        alignContent:'center',
        marginHorizontal: 40,
        
    },
    createTextNormal:{
        fontSize:15,
    },
    createTextColored:{
        fontSize:15,
        color:'#360f9a',
    },
    validationText:{
        color:'#360f9a',
        marginTop: -9,
        marginHorizontal:40,
    },
    Picker:{
        borderBottomWidth: 2,
        borderColor: '#360f9a',
        flexDirection:'row',
        paddingHorizontal:30,
        marginVertical:10,
        color:'#360f9a',
        
    },
    PickerContainer:{
        borderBottomWidth: 1,
        borderColor: '#360f9a',
        paddingBottom: -2,
    },
});
    
export default CreateAcciedentPost;