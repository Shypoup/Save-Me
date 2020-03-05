import React from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode';
import {URL,Token} from '../../../API/Defaults';



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
  <Text style={styles.user}>Giza</Text>
  <Text style={styles.user}>A+</Text>
  <Text style={styles.Title}>Trusted Numbers</Text>
  <Text style={styles.user}>{this.state.firstTrusted}</Text>
  <Text style={styles.user}>{this.state.secondTrusted}</Text>
  <Text style={styles.user}>{this.state.thirdTrusted}</Text>
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
    
