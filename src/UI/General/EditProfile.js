import React,{useState} from 'react';
import {View, StyleSheet,TextInput,Text,TouchableOpacity,Picker,Image,ScrollView} from 'react-native';
import PickerComponent from '../Components/PickerComponent';
import PhotoUpload from 'react-native-photo-upload';
import ImagePicker from '../Components/ImagePicker';
import DatePicker from '../Components/DatePicker';



const EditProfile = () =>{
    
  
        
    
    
    return (
        <ScrollView>
      <View style ={styles.Container}>
            <Text style={styles.WelcomText} >Edit Profile</Text>
        <Text style={styles.Title}>Your Info</Text>
       <TextInput style={styles.TextinputContainer} placeholder='First Name' placeholderTextColor='#360f9a' >Hesham</TextInput>
       <TextInput style={styles.TextinputContainer} placeholder='Last Name' placeholderTextColor='#360f9a' >Gamal </TextInput> 
       <TextInput style={styles.TextinputContainer} placeholder='Mail' placeholderTextColor='#360f9a' >hesham.mail.com</TextInput> 
       <TextInput style={styles.TextinputContainer} placeholder='Phone' placeholderTextColor='#360f9a' textContentType='telephoneNumber' >0114563456</TextInput>  
       <TextInput style={styles.TextinputContainer} placeholder='Address' placeholderTextColor='#360f9a' >pyramids,Giza</TextInput>
       <TextInput style={styles.TextinputContainer} placeholder='Blood Type' placeholderTextColor='#360f9a' >O+</TextInput>
       <Text  style={styles.Title}>Trusted persons' Numbers</Text>
       <TextInput style={styles.TextinputContainer} placeholder='Phone' placeholderTextColor='#360f9a' textContentType='telephoneNumber' >01245636463</TextInput>
       <TextInput style={styles.TextinputContainer} placeholder='Phone' placeholderTextColor='#360f9a' textContentType='telephoneNumber' >01124569463</TextInput>
       <TextInput style={styles.TextinputContainer} placeholder='Phone' placeholderTextColor='#360f9a' textContentType='telephoneNumber' >01123645663</TextInput>



        <TouchableOpacity style={styles.Button}>
            <Text  style={styles.ButtonText}>Edit</Text>
        </TouchableOpacity>
        

       
    </View>
  </ScrollView>
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
    Title:{
        color:'#360f9a',
        marginTop:10,
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
        fontSize:25,
        color:'white',
        alignSelf:'center',
        fontFamily:'Arial',
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
    
export default EditProfile;