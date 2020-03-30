import React from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode';
import AsyncStorage from '@react-native-community/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {URL} from '../../../API/Defaults';



export  default class Profile extends React.Component{

    
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
            showQR : false,
            Token:'',
        };
    }
       
    getToken = async () => {
        try {
          const value = await AsyncStorage.getItem('token')
          console.log('Done Get Token')
          return value;
        } catch(e) {
            console.log("Somethimg went Wrong Get Token");
        }
      
      }   
          
          
        
        componentDidMount(){
            this.getToken().then((value)=>{
                console.log("GET Token : "+ value);
                this.setState({
                    Token:value
                })
    axios.get(`${URL}/profile`,{
        headers :{
        'X-AUTH': `${this.state.Token}`
    }
    }).then(response=>{
    console.log(response.data);
    this.setState({
        firstName    : response.data.Fname,
        lastName     : response.data.Lname,
        phone        : response.data.phone,
        mail         : response.data.email,
        firstTrusted : response.data.trusted1,
        secondTrusted: response.data.trusted2,
        thirdTrusted : response.data.trusted3,
        address      :response.data.address,
        bloodType    :response.data.bloodType, 
    })
    
}).catch(error =>{
    console.log(error);
    
});
   })
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
  <Text style={styles.user}><Ionicons name="ios-mail" size={18} color="#360f9a" />  {this.state.mail}</Text>
  <Text style={styles.user}><Ionicons name="ios-phone-portrait" size={18} color="#360f9a" />  {this.state.phone}</Text>
  <Text style={styles.user}><Ionicons name="md-locate" size={18} color="#360f9a" />  {this.state.address}</Text>
  <Text style={styles.user}><Ionicons name="md-medical" size={18} color="#360f9a" />  {this.state.bloodType}</Text>
  <Text style={styles.Title}>Trusted Numbers</Text>
  <Text style={styles.user}><Ionicons name="ios-person" size={18} color="#360f9a" />  {this.state.firstTrusted}</Text>
  <Text style={styles.user}><Ionicons name="ios-person" size={18} color="#360f9a" />  {this.state.secondTrusted}</Text>
  <Text style={styles.user}><Ionicons name="ios-person" size={18} color="#360f9a" />  {this.state.thirdTrusted}</Text>
  </View>
  
  <TouchableOpacity 
    onPress={()=> this.props.navigation.navigate('EditProfile')}
    style={styles.Button}
  >
            <Text  style={styles.ButtonText}>Edit Profile</Text>
        </TouchableOpacity>
  <TouchableOpacity 
   onPress={()=> this.setState({showQR : true})}
//    onPress={()=> this.props.navigation.navigate('QR')}
  style={styles.Button}
  >
            <Text  style={styles.ButtonText}>Generate QR Code</Text>
        </TouchableOpacity>
        

        {this.state.showQR ?  <View style={styles.qr}>
            <TouchableOpacity
            onPress={()=> this.setState({showQR : false})}
            >
                <Text style={styles.hideButton}>hide</Text>
            </TouchableOpacity>
        <QRCode
        value={"Name: "+this.state.firstName +this.state.lastName +"\n" + "     Phone:  "+this.state.phone +"\n"+"E-mail:  " +this.state.mail+"Adsress:    "+this.state.address +"\n"+
                "Blood Type :  "+this.state.bloodType +"\n" 
        }
        size={530}
        bgColor='#360f9a'
        fgColor='#fff' 
        
        />
        </View >
           : null
        }

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
    marginBottom: 20,
    

},
ButtonText:{
    fontSize:20,
    color:'white',
    alignSelf:'center',
    fontFamily:'sans-serif-condensed',
    marginVertical:5,
},
qr:{
    marginVertical:10,
    marginHorizontal: 60
},
hideButton:{
    color:'#360f9a',
    fontSize:15,
}

});
    
