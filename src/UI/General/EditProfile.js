import React from 'react';
import {View, StyleSheet,TextInput,Text,TouchableOpacity,Picker,Image,ScrollView} from 'react-native';
import axios from 'axios';
import {URL,Token} from '../../../API/Defaults';


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
         
    componentDidMount(){
        axios.get(`${URL}/profile`,{
            headers :{
                'X-AUTH': `${Token}`
        }
        }).then(response=>{
        console.log(response.data);
        console.log(response.data.Fname);
        console.log(response.data.Lname);
        console.log(response.data.phone);
        console.log(response.data.email);
        console.log(response.data.trusted1);
        
        
        this.setState({firstName : response.data.Fname})
        this.setState({lastName : response.data.Lname})
        this.setState({phone : response.data.phone})
        this.setState({mail : response.data.email})
        this.setState({firstTrusted : response.data.trusted1})
        this.setState({secondTrusted : response.data.trusted2})
        this.setState({thirdTrusted : response.data.trusted3})
    }).catch(error =>{
        console.log(error);
        
    });
       }
    

        
        render(){
      return (
    
        <ScrollView>
      <View style ={styles.Container}>
            <Text style={styles.WelcomText} >Edit Profile</Text>
        <Text style={styles.Title}>Your Info</Text>
      <TextInput
       style={styles.TextinputContainer} 
       placeholder='First Name'
        placeholderTextColor='#360f9a'  
     onChangeText={firstName => this.setState({firstName})}
       value={this.state.firstName}
      />
      
       <TextInput
        style={styles.TextinputContainer} 
        placeholder='Last Name'
         placeholderTextColor='#360f9a'  onChangeText={lastName => this.setState({lastName})}
         value={this.state.lastName}
        />

       <TextInput 
       style={styles.TextinputContainer}
        placeholder='Mail' 
        placeholderTextColor='#360f9a'
          onChangeText={mail => this.setState({mail})}
        value={this.state.mail}
       />
      
       <TextInput 
       style={styles.TextinputContainer}
        placeholder='Phone'
         placeholderTextColor='#360f9a'
          textContentType='telephoneNumber' 
          onChangeText={phone => this.setState({phone})}
            value={this.state.phone}
            />
     
       <TextInput
        style={styles.TextinputContainer} 
        placeholder='Address'
         placeholderTextColor='#360f9a' 
         textContentType='fullStreetAddress'
         onChangeText={address => this.setState({address})}
       value={this.state.address}
      />
      
       <TextInput 
       style={styles.TextinputContainer}
        placeholder='Blood Type'
         placeholderTextColor='#360f9a' 
         textContentType='none'
         onChangeText={bloodType => this.setState({bloodType})}
          value={this.state.bloodType}
      />
       
       
       <Text  style={styles.Title}>Trusted persons' Numbers</Text>
       <TextInput 
       style={styles.TextinputContainer} 
       placeholder='Phone1'
        placeholderTextColor='#360f9a'
         textContentType='telephoneNumber' 
         onChangeText={firstTrusted => this.setState({firstTrusted})}
       value={this.state.firstTrusted}
      />
       
       <TextInput
        style={styles.TextinputContainer} 
        placeholder='Phone2'
         placeholderTextColor='#360f9a'
         textContentType='telephoneNumber'
         onChangeText={secondTrusted => this.setState({secondTrusted})}
       value={this.state.secondTrusted}
      />
      
       <TextInput 
       style={styles.TextinputContainer}
        placeholder='Phone3'
        placeholderTextColor='#360f9a' 
        textContentType='telephoneNumber' 
        onChangeText={thirdTrusted => this.setState({thirdTrusted})}
       value={this.state.thirdTrusted}
      />
 


        <TouchableOpacity style={styles.Button}


onPress={()=>{
    axios({
        method:'post',
        url:`${URL}/editProfile`,
        data:{
            Fname:`${this.state.firstName}`,
            Lname:this.state.lastName,
            email:this.state.mail,
            phone:this.state.phone,
            trusted1:this.state.firstTrusted,
            trusted2:this.state.secondTrusted,
            trusted3:this.state.thirdTrusted,

        },
        headers:{
           'X-AUTH':`${Token}`
        }
    }).then((res) => {
        console.log("Response is:",res); 
    }).catch((error) => {
        if(error.response){
           console.log(error.response.data);
           console.log(error.response.status);
           console.log(error.response.headers);
        }else if (error.request) {
           console.log(error.request);
       } else {
           // Something happened in setting up the request and triggered an Error
           console.log('Error', error.message);
       }
       console.log(error.config);
    })

   }}




            // onPress={()=>{
            //     // var config = {
            //     //     headers :{
            //     //         'X-AUTH':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTQ2ZjNlNGQ1Yjk3ODEzODQ1MzNkYzIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTgxNzA4MzYxfQ.c9489sSczuAlFOidLS8e_jY9ezWTHuetjvAzrp5XBsY"
            //     //     }
            //     // }; 
            //     axios.post('http://192.168.1.8:3000/editProfile',{
            //         headers :{
            //         'X-AUTH': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTU1NjQ3ZTdjZmUyMTA4NjAzM2E4MDMiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTgyNjU0NjE5fQ.fsa8nxL1YzLhXFpQMJPcfgeiOeE2K2fCLHDQNJ2Yidg`,
            //       'Content-Type': `application/json`,
           
                    
            //     },
                
                
                    
                  
                
    
    
            // }).then(response=>{
            //     console.log(response.status);
            //     console.log(response.headers);
            // }).catch(error =>{
            //     console.log(headers);
        
            //     console.log(error);
            //     //console.log(error.req._headers);
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
    
