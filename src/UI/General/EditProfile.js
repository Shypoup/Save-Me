import React from 'react';
import {View, StyleSheet,TextInput,Text,TouchableOpacity,Picker,Image,ScrollView} from 'react-native';
import PickerComponent from '../Components/PickerComponent';
import PhotoUpload from 'react-native-photo-upload';
import ImagePicker from '../Components/ImagePicker';
import DatePicker from '../Components/DatePicker';
import axios from 'axios';


export  default class EditProfile extends React.Component{
    //7const Profile =props=>{
        
        constructor(props){
            super(props);
            this.state={
                firstName:" ",
                lastName:" ",
                mail:" ",
                phone:" ",
                address:" ",
                bloodType:" ",
                firstTrusted:" ",
                secondTrusted:" ",
                thirdTrusted:" ",
            };
        }
         
    //     componentDidMount(){
    //     axios.get('http://192.168.1.8:3000/profile',{
    //         headers :{
    //         'X-AUTH':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTQ5OWI4ZjViM2I1YTM1ZDAyMDRkMWIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTgxODgyMjk1fQ.XxABeeIYS_QnkFut2dk3orejkVgL_u6aEBrTdrLuolU"
    //     }
    //     }).then(response=>{
    //     console.log(response.data);
    //     console.log(response.data.Fname);
    //     console.log(response.data.Lname);
    //     console.log(response.data.phone);
    //     console.log(response.data.email);
    //     console.log(response.data.trusted1);
        
        
    //     this.setState({firstName : response.data.Fname})
    //     this.setState({lastName : response.data.Lname})
    //     this.setState({phone : response.data.phone})
    //     this.setState({mail : response.data.email})
        
    // }).catch(error =>{
    //     console.log(error);
        
    // });
    //    }
    
        
        render(){
      return (
    
        <ScrollView>
      <View style ={styles.Container}>
            <Text style={styles.WelcomText} >Edit Profile</Text>
        <Text style={styles.Title}>Your Info</Text>
      <TextInput style={styles.TextinputContainer} placeholder='First Name' placeholderTextColor='#360f9a' >{this.state.firstName}</TextInput>
       <TextInput style={styles.TextinputContainer} placeholder='Last Name' placeholderTextColor='#360f9a' >{this.state.lastName} </TextInput> 
       <TextInput style={styles.TextinputContainer} placeholder='Mail' placeholderTextColor='#360f9a' >{this.state.mail}</TextInput> 
       <TextInput style={styles.TextinputContainer} placeholder='Phone' placeholderTextColor='#360f9a' textContentType='telephoneNumber' >{this.state.phone}</TextInput>  
       <TextInput style={styles.TextinputContainer} placeholder='Address' placeholderTextColor='#360f9a' >{this.state.address}</TextInput>
       <TextInput style={styles.TextinputContainer} placeholder='Blood Type' placeholderTextColor='#360f9a' >{this.state.bloodType}</TextInput>
       <Text  style={styles.Title}>Trusted persons' Numbers</Text>
       <TextInput style={styles.TextinputContainer} placeholder='Phone' placeholderTextColor='#360f9a' textContentType='telephoneNumber' >{this.state.firstTrusted}</TextInput>
       <TextInput style={styles.TextinputContainer} placeholder='Phone' placeholderTextColor='#360f9a' textContentType='telephoneNumber' >{this.state.secondTrusted}</TextInput>
       <TextInput style={styles.TextinputContainer} placeholder='Phone' placeholderTextColor='#360f9a' textContentType='telephoneNumber' >{this.state.thirdTrusted}</TextInput>
 


        <TouchableOpacity style={styles.Button}
            // onPress={()=>{
                // var config = {
                //     headers :{
                //         'X-AUTH':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTQ2ZjNlNGQ1Yjk3ODEzODQ1MzNkYzIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTgxNzA4MzYxfQ.c9489sSczuAlFOidLS8e_jY9ezWTHuetjvAzrp5XBsY"
                //     }
                // }; 
            //     axios.post('http://192.168.1.8:3000/editProfile',{
            //         headers :{
            //         "X-AUTH":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTQ5OWI4ZjViM2I1YTM1ZDAyMDRkMWIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTgxODgyNTAyfQ.Hobpz307DMV1fzXE4gCKNbQBOu3yLhqJqNKhJ-xHiOg",
            //         'Content-Type': 'application/json',
            //     },
                    
            //         Fname :"Gamal",
            //         Lname:"Ali",
            //         email:"gamal@mail.com",
            //         password:"123456",
            //         phone:"12345669",
            //         // trusted1:"45663453",
            //         // trusted2:"45634452",
            //         // trusted3:"45695223",
                    
                
    
    
            // }).then(response=>{
            //     console.log(response.data);
            // }).catch(error =>{
            //     console.log(error);
                
            // });
        
            // }}
        >
            <Text  style={styles.ButtonText}>Edit</Text>
        </TouchableOpacity>
        

       
    </View>
  </ScrollView>
  )
}
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
    
