import React,{useState,Components} from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';



export  default class Profile extends React.Component{
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
    axios.get('http://192.168.43.238:3000/profile',{
        headers :{
        'X-AUTH':`  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTQ2ZjNlNGQ1Yjk3ODEzODQ1MzNkYzIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTgxNzA4MzYxfQ.c9489sSczuAlFOidLS8e_jY9ezWTHuetjvAzrp5XBsY`
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
    
}).catch(error =>{
    console.log(error);
    
});
   }

    
    render(){
  return (
      <ScrollView>
      <View>
          <View style={styles.Container}>
                <View style={styles.PhotoContainer} >
                <Image  style={styles.ProfilePicture} source ={require('../Components/hesham.jpg')}/>
  <Text style={styles.username}>{this.state.firstName} {this.state.lastName}</Text>
                </View>
            </View>
  <View  style={styles.DataContainer} >
<Text style={styles.Title}>Your Data</Text>
  <Text style={styles.user}>{this.state.mail}</Text>
  <Text style={styles.user}>{this.state.phone}</Text>
  <Text style={styles.user}>Pyramids,Giza</Text>
  <Text style={styles.user}>O+</Text>
  <Text style={styles.Title}>Trusted Numbers</Text>
  <Text style={styles.user}>011456364422</Text>
  <Text style={styles.user}>011456364422</Text>
  <Text style={styles.user}>011456364422</Text>
  </View>
  
  <TouchableOpacity 
    onPress={()=> this.props.navigation.navigate('EditProfile')}
    style={styles.Button}
  >
            <Text  style={styles.ButtonText}>Edit Profile</Text>
        </TouchableOpacity>
  <TouchableOpacity 
   onPress={()=> this.props.navigation.navigate('QR')}
  style={styles.Button}
  >
            <Text  style={styles.ButtonText}>Generate QR Code</Text>
        </TouchableOpacity>
<Text style={styles.user}>Hello: {this.state.firstname}</Text>

  </View>
  </ScrollView>
  )
}}

const styles =StyleSheet.create({
Container:{
  // backgroundColor:"#360f9a",
    height:200,
    borderBottomEndRadius:90,
    marginHorizontal:10,
},
PhotoContainer:{
    flexDirection:'row',
    
    
},
ProfilePicture:{
    height:150,
    width:150,
    marginVertical:20,
    borderRadius:75,
    borderWidth:5,
    borderColor:"#360f9a",
   
   
},
username:{
    color:'#360f9a',
    fontSize:25,
    marginVertical:60,
    marginHorizontal:20,
    alignSelf:'flex-end',
    

  
    
},
DataContainer:{
    marginHorizontal:50,
    marginVertical:30,
    marginBottom:60,
},
user:{
    fontSize:20,
    color:'#000',
},
Title:{
    color:'#360f9a',
    
    marginVertical:10,
},
Button:{
    borderRadius : 25,
    backgroundColor: '#360f9a',
    marginVertical:5,
    marginHorizontal: 60,
    

},
ButtonText:{
    fontSize:20,
    color:'white',
    alignSelf:'center',
    fontFamily:'sans-serif-condensed',
    marginVertical:5,
},

});
    
// export default Profile;