import React,{useState} from 'react';
import {View, StyleSheet,TextInput,Text,TouchableOpacity,Picker,Image} from 'react-native';
import PickerComponent from '../Components/PickerComponent';
import PhotoUpload from 'react-native-photo-upload';
import ImagePicker from '../Components/ImagePicker';
import DatePicker from '../Components/DatePicker';
import UploadImage from '../Components/UploadImage';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';


const CreatePost = ({navigation}) =>{
    
    const [cityPicker,setCityPicker] =useState('0');
        
    
    
    return (
       <ScrollView>
      <View style ={styles.Container}>



        
    <Text style={styles.WelcomText} >Create Post</Text>
    
       <TextInput style={styles.TextinputContainer} placeholder='Name' placeholderTextColor='#360f9a' />
       <TextInput style={styles.TextinputContainer} placeholder='Age' placeholderTextColor='#360f9a' />

       <View style={styles.PickerContainer}>
       <Picker
		style={styles.Picker}
		selectedValue={cityPicker}
		onValueChange={newvalue => setCityPicker(newvalue)}
		>
		<Picker.Item label="Select a city " value="0"/>
		<Picker.Item label="Cairo" value="Cairo" />
		<Picker.Item label="Giza" value="Giza"/>
        <Picker.Item label="Alex" value="Alex" />
		<Picker.Item label="Paris" value="Paris"/>
        <Picker.Item label="London" value="London" />
		<Picker.Item label="New York" value="90"/>
		</Picker>
       </View>

        
       <TextInput style={styles.TextinputContainer} placeholder='Lost Date' placeholderTextColor='#360f9a' />
       <TextInput style={styles.TextinputContainer} placeholder='Description' placeholderTextColor='#360f9a' />
       <TextInput style={styles.TextinputContainer} placeholder='Phone' placeholderTextColor='#360f9a' textContentType='telephoneNumber' />
       
            <UploadImage  />
        

        <TouchableOpacity style={styles.Button}
        
        // onPress={()=>{
        //     // var config = {
        //     //     headers :{
        //     //         'X-AUTH':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTQ2ZjNlNGQ1Yjk3ODEzODQ1MzNkYzIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTgxNzA4MzYxfQ.c9489sSczuAlFOidLS8e_jY9ezWTHuetjvAzrp5XBsY"
        //     //     }
        //     // }; 
        //     axios.post('http://192.168.1.8:3000//hbd',{
        //         headers :{
        //         'X-AUTH': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTU1NjQ3ZTdjZmUyMTA4NjAzM2E4MDMiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTgyNjU0NjE5fQ.fsa8nxL1YzLhXFpQMJPcfgeiOeE2K2fCLHDQNJ2Yidg`,
        //       'Content-Type': `application/json`,
                    
                
        //     },
                    
        //     Fname :"Gamal",
            
                
                
                
            


        // }).then(response=>{
        //     console.log(response.data);
        // }).catch(error =>{
        //     console.log(error);
           
            
        // });
    
        // }}
        
        
        
        >
            <Text  style={styles.ButtonText}>Post</Text>
        </TouchableOpacity>
        

        {/* <DatePicker /> */}

        

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
    
export default CreatePost;