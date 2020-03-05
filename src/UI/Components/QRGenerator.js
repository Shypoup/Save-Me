import React from 'react';
import {ScrollView,StyleSheet, View} from 'react-native';
import axios from 'axios';

import QRCode from 'react-native-qrcode';
import URL from '../../../API/Defaults';


export  default class QR extends React.Component{

    
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
        'X-AUTH': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTU5NmU4MDZkYzQ0NDMyNGMyYWI3OTMiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTgyOTE5MzIwfQ.OUdMSqfpUV7MA6QnCP7fGkHelhK9UEaTUtj0KnrMo7k"

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
  
        <View style={styles.Container}>
        <QRCode
        value={this.state.firstName +this.state.lastName +"\n" +this.state.phone +"\n"+this.state.address +"\n"+
                this.state.bloodType +"\n" 
        }
        size={500}
        bgColor='#360f9a'
        fgColor='#fff' 
       
        />
        </View>

 
  </ScrollView>
  )
}}

const styles =StyleSheet.create({
Container:{
  
    marginVertical: 90,
    marginHorizontal:190,
   
    
},

});
