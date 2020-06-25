import React from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode';
import AsyncStorage from '@react-native-community/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import {URL} from '../../../API/Defaults';
import { isMoment } from 'moment';

const MAIN_COLOR = '#b31605';

export  default class Profile extends React.Component{

    
    constructor(props){
        super(props);
        this.state={
            //Personal Data
            firstName:"name ",
            lastName:"name",
            mail:"Not determined yet",
            phone:"Not determined yet",
            address:"Not determined yet",
            //Medical Data
            bloodType:"Not determined yet",
            doctorName:"Not determined yet",
            doctorNumber:"Not determined yet",
            pathography:"Not determined yet",
            //Trusted Data
            firstTrusted:"Not determined yet",
            secondTrusted:"Not determined yet",
            thirdTrusted:"Not determined yet",
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
      
      removeToken = async () => {
        try {
          await AsyncStorage.removeItem('token')
        } catch(e) {
            console.log('Remove token Error.')
        }
      
        console.log('Remove token Done.')
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
        address      :response.data.address,
        bloodType    :response.data.bloodType, 
        firstTrusted : response.data.trusted1,
        secondTrusted: response.data.trusted2,
        thirdTrusted : response.data.trusted3,
       
        
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
                <TouchableOpacity 
                style={styles.logout}
                onPress={()=>{
                    axios.delete(`${URL}/logout`,{
                    headers: {
                        'Content-Type': 'application/json',
                        'X-AUth': `${this.state.Token}`
                    }
                    
                }).then(response=>{
                  
                   this.removeToken();
                    this.props.navigation.navigate('Login');
                }).catch(error =>{
                    console.log(error);
                    
                });
            
                }}
                >
                    <MaterialCommunityIcons name="logout" size={25} color={MAIN_COLOR} />
                </TouchableOpacity>





                
                <View style={styles.PhotoContainer} >
                
                {/* <Image  style={styles.ProfilePicture} source ={require('../Components/photo.png')}/> */}
                
  <Text style={styles.username}>{this.state.firstName} {this.state.lastName}</Text>
                </View>
                
            </View>
  <View  style={styles.DataContainer} >
<Text style={styles.Title}>Personal Data :</Text>
  <Text style={styles.user}><EntypoIcons name="email" size={18} color={MAIN_COLOR} />  {this.state.mail}</Text>
  <Text style={styles.user}><EntypoIcons name="phone" size={18} color={MAIN_COLOR} />  {this.state.phone}</Text>
  <Text style={styles.user}><Icon name="location-city" size={18} color={MAIN_COLOR} /> {this.state.address}</Text>
  {/* <Text style={styles.user}><EntypoIcons name="drop" size={18} color={MAIN_COLOR} />  {this.state.bloodType}</Text> */}
 <Text/><Text/>

  <Text style={styles.Title}>Medical Data :</Text>
  <Text style={{color:MAIN_COLOR , marginTop:5}} >Doctor name:</Text>
  <Text style={styles.user}><Fontisto name="doctor" size={18} color={MAIN_COLOR} />  {this.state.doctorName}</Text>
  <Text style={{color:MAIN_COLOR  , marginTop:5}}>Doctor phone:</Text>
  <Text style={styles.user}><EntypoIcons name="phone" size={18} color={MAIN_COLOR} />  {this.state.doctorNumber}</Text>
  <Text style={{color:MAIN_COLOR  , marginTop:5}}>Pathography:</Text>
  <Text style={styles.user}><FontAwesome5 name="notes-medical" size={18} color={MAIN_COLOR} /> {this.state.pathography}</Text>
  <Text style={{color:MAIN_COLOR  , marginTop:5}}>Blood type:</Text>
  <Text style={styles.user}><EntypoIcons name="drop" size={18} color={MAIN_COLOR} />  {this.state.bloodType}</Text>
  
  <Text/><Text/>

  <Text style={styles.Title}>Trusted Numbers : </Text>
  <Text style={styles.user}><Ionicons name="md-person" size={18} color={MAIN_COLOR} />  {this.state.firstTrusted}</Text>
  <Text style={styles.user}><Ionicons name="md-person" size={18} color={MAIN_COLOR} />  {this.state.secondTrusted}</Text>
  <Text style={styles.user}><Ionicons name="md-person" size={18} color={MAIN_COLOR} />  {this.state.thirdTrusted}</Text>
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
        bgColor={MAIN_COLOR}
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
  // backgroundColor:{MAIN_COLOR},
    height:200,
    borderBottomEndRadius:90,
    marginHorizontal:10,
    
},
PhotoContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
    
},
ProfilePicture:{
    height:150,
    width:150,
    marginVertical:20,
    borderRadius:75,
    borderWidth:5,
    borderColor:MAIN_COLOR,
    
   
   
},
username:{
    color:MAIN_COLOR,
    fontSize:30,
    marginVertical:60,
    marginHorizontal:20,
    alignSelf:'center',
    fontWeight:'bold'
 
    
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
    color:MAIN_COLOR,
    
    marginVertical:10,
},
Button:{
    borderRadius : 25,
    backgroundColor: MAIN_COLOR,
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
    color:MAIN_COLOR,
    fontSize:15,
},
logout:{
    alignSelf:'flex-end',
    marginTop:10,
    marginRight:5,
}

});
    
