import React from 'react';
import {View,Button,StyleSheet,PermissionsAndroid,ToastAndroid,TouchableOpacity,Alert, Dimensions,Linking} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder';
import SendSMS from 'react-native-sms-x';
import{Text ,Icon} from 'react-native-elements';
import QRCode from 'react-native-qrcode';
// import Communications from 'react-native-communications';
// import call from 'react-native-phone-call';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import CountDown from 'react-native-countdown-component';
import { ScrollView } from 'react-native-gesture-handler';


  

const WIDTH = Dimensions.get('window').width;
const HIEGHT = Dimensions.get('window').height;
const MAIN_COLOR = '#b31605';
export default class App extends React.Component{
  
  state={
    addr: {},
    formattedAddress: 'NO',
    delay:true,
    timerPause: false,
    timerCounter: 10,
    timerState:'ON',
    timerId:"1",
    showQr :false,
  };

  makeCall (phoneNumber){

    RNImmediatePhoneCall.immediatePhoneCall(phoneNumber);
  };

  async requestPermission(PERMISSION_TYPE,PERMISSION_NAME){
    
    if (PERMISSION_TYPE === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You've access for this");
    } else {
        try {
            const granted = await PermissionsAndroid.request(PERMISSION_TYPE,
                {
                    'title': `Save me app required ${PERMISSION_NAME}  permission`,
                    'message': `We required ${PERMISSION_NAME} permission in order to get device location ` +
                        'Please grant us.'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return true;

            } else {
                alert(`You don't have access for ${PERMISSION_NAME}`);
                return false;
            }
        } catch (err) {
            alert(err)
        }
    }
  }

   async getLocation (){
    const checkLocationPermission =PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION;
    
      const permission =await this.requestPermission(checkLocationPermission,"Location");
      if(permission){
      await  Geolocation.getCurrentPosition(
          (position) => {
               console.log(position);
               Geocoder.geocodePosition({lat:position.coords.latitude,lng:position.coords.longitude}).then((res) => {
                // let data = res.filter(info => info.position.lng == position.coords.longitude && info.position.lat == position.coords.latitude);
                //  console.log(data);
                console.log(res);
                // this.setState({formattedAddress: res[0].formattedAddress})
               this.setState({formattedAddress: res[0].formattedAddress});
                this.sendSms();
               return  res[0].formattedAddress;
                
            
            }).catch(err => console.log(err))
          }, 
          (error) => {
              // See error code charts below.
              console.log(error.code, error.message);
          },
          { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000, showLocationDialog: false }
      );
      }
      else
      {
        alert("Location Not be getting")            
      }
      return "Returned";
    }

    async sendSms(){
      const checkSMSPermission =PermissionsAndroid.PERMISSIONS.SEND_SMS;
      const permission =await this.requestPermission(checkSMSPermission,"SMS");
        
      if(permission){
        
       
          SendSMS.send(123, "01123121021", `I am in danger. Please help me. My Location is :${this.state.formattedAddress} `,
          //  ToastAndroid.show("Message Sent")
          null
           );
           alert("Message Sent")
        }

      
      else
      {
        alert("SMS permission Not be getting")
      }

    }

    SendSOSDelay=()=>{
      let that = this;
      setTimeout(function(){
        
        Alert.alert("Alert Shows After 5 Seconds of Delay.")
        // that.setState({delay : true})
        // console.log(that.state.delay)
        that.getLocation();
  
      }, 5000);
      
    }

    ChangeTimerState=()=>{
      {this.state.timerPause ==true ? this.setState({timerPause :false ,timerState :"ON" }) : this.setState({timerPause :true, timerState :"Off" }) }
    }
    RestartTimer=()=>{
         this.getLocation();
         this.setState({timerId:Math.random().toString()})
       
    }

    CallConfirm=(ServiceName,ServiceNumber)=>{
      Alert.alert(
        `Call ${ServiceName}`,
        `Do you want to call ${ServiceName} ?`,
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "Call", onPress: () => this.makeCall("01123121021") }
        ],
        { cancelable: false }
      );
    }
    ChangeQRState(){
      {this.state.showQr== false ? this.setState({showQr:true}) : this.setState({showQr:false})}
    }

    

  render(){
    return(
      <ScrollView>
      <View style={styles.container}>
          
        {/* <Text style={{color: MAIN_COLOR , marginBottom:20}} h2>Danger</Text> */}
         {/* <View style={styles.MessageAndCallContainer}> */}
          <TouchableOpacity 
           style={styles.SOSButton}
           title="Send SMS"
           onPress={()=>{  
              // this.sendSms();
              this.getLocation();
             }} >
               <Text style={styles.SOSText}>SOS</Text>
           </TouchableOpacity>
          
          {/* <Text>{this.state.formattedAddress}</Text> */}

        
           <View style={styles.SmallButtonContainer}>
              
              
               <TouchableOpacity 
                  style={styles.SmallButton}
                  onPress={()=>{
                    this.CallConfirm('ambulance' ,1);
                    // this.makeCall("01123121021")
                    }} >
                  <Icon name='ambulance'
                      type='font-awesome'
                      size={25} 
                     iconStyle={{marginTop: 8 , color: '#fff'}}
                   />
                    <Text style={styles.SmallButtonText}>ambulance</Text>
               </TouchableOpacity>

               <TouchableOpacity 
                  style={styles.SmallButton}
                  onPress={()=>{ this.CallConfirm('fire' ,1); }} >
                 <Icon name='fire'
                       type='material-community'
                       size={30} 
                      iconStyle={{marginTop: 8 , color: '#fff'}}
                    />
                 <Text style={styles.SmallButtonText}>fire</Text>
               </TouchableOpacity>

               <TouchableOpacity 
                  style={styles.SmallButton}
                  onPress={()=>{  this.CallConfirm('police' ,1); }} >
                 <Icon name='car'
                       type='material-community'
                       size={30} 
                      iconStyle={{marginTop: 8 , color: '#fff'}}
                    />
                 <Text style={styles.SmallButtonText}>police</Text>
               </TouchableOpacity>
              
              
              {/* </View> */}
               </View>
                
           {this.state.timerPause== false ? null: 
           
                <View style={{alignItems:'center'}}>
               <Text style={{color : MAIN_COLOR}}>SOS will be sent after :</Text>
               <View style={styles.TimerContainer}>
               <CountDown
                  id={this.state.timerId}
                  size={30}
                  until={this.state.timerCounter}
                  style={styles.TimerContainer1}
                  onFinish={() => this.RestartTimer()}
                  digitStyle={{backgroundColor: '#FFF'}}
                  digitTxtStyle={{color: MAIN_COLOR}}
                  timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                  separatorStyle={{color: MAIN_COLOR}}
                  timeToShow={['D','H', 'M', 'S']}
                  timeLabels={{d:null,h:null, m: null, s: null}}
                  showSeparator
                  running={this.state.timerPause}
                  // onPress={()=>this.setState({timerPause :true})}
                />
           
            

              </View>
             </View>
  }
               <TouchableOpacity 
                 style={styles.DelayButton}
                 onPress={()=>{ this.ChangeTimerState()
                            }
                 } >
                 <Text style={styles.DelayButtonText}>Danger Mode<Text style={{fontSize:15, marginRight:10}}> `Turn {this.state.timerState}` </Text></Text>
               </TouchableOpacity>


               <TouchableOpacity 
           style={styles.DelayButton}
           
           onPress={()=>{  
               this.ChangeQRState()
             }} >
               <Icon name='qrcode' type='font-awesome' size={35} 
               iconStyle={{marginTop: 8 , marginRight:5 , color: '#fff'}}
        />
               <Text style={styles.DelayButtonText}>QR Code</Text>
               </TouchableOpacity>
              
            {this.state.showQr ==true ?
                <View style={styles.QRStyle}>
               <QRCode
                      // value={"Name: "+this.state.firstName +this.state.lastName +"\n" + "     Phone:  "+this.state.phone +"\n"+"E-mail:  " +this.state.mail+"Adsress:    "+this.state.address +"\n"+
                      //         "Blood Type :  "+this.state.bloodType +"\n" 
                      // }
                      value="Hello"
                      size={580}
                      bgColor={MAIN_COLOR}
                      fgColor='#fff' 
                      
                      /> 
              </View>  
                    :null }
       
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
     alignItems:'center',
     marginTop:25,
     flex:1
  }, 
  MessageAndCallContainer:{
    // flexDirection:'row'
  },
   QRStyle:{

    height:300,
    width:WIDTH-60,
    marginHorizontal:60,
    marginVertical:30,
    marginBottom:60
    // justifyContent:'center',
    // alignContent:'center',
    // alignItems:'center'
   },

  SOSButton:
  {
    height:200,
    width: WIDTH / 2 ,
    backgroundColor: MAIN_COLOR,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'white',
    // marginVertical:50,

    
  },
  SOSText:
  {
    fontSize:50,
    color: 'white',
    fontWeight:'bold',
  },
  DelayButton:
  {
    height:70,
    width: WIDTH  -60,
    backgroundColor: MAIN_COLOR,
    borderRadius:9,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'white',
    flexDirection:'row'
    
  },
  DelayButtonText:
  {
    fontSize:25,
    color: 'white',
    fontWeight:'bold',
  },

  SmallButtonContainer:
  {
    flexDirection:'row',
    marginBottom:20,
    marginHorizontal: 30,
    marginVertical:30
    
    

  },
  SmallButton:
  {
    height:100,
    width: WIDTH /3 -20,
    backgroundColor: MAIN_COLOR,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'white',
    // marginVertical:10,
    borderRadius:9
  },
  SmallButtonText:
  {
    color:'#fff'
  },

  TimerContainer:{
    marginVertical: 20,
    flexDirection:'row',
    marginHorizontal: 30,
  },
  TimetIconContainer:{
    marginHorizontal:15,
  },

  
})


// import React from 'react';
// import CountDown from 'react-native-countdown-component';
 
// const DangerMode =()=>{
//     return (
//       <CountDown
//         size={30}
//         until={1000}
//         onFinish={() => alert('Finished')}
//         digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: MAIN_COLOR}}
//         digitTxtStyle={{color: MAIN_COLOR}}
//         timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
//         separatorStyle={{color: MAIN_COLOR}}
//         timeToShow={['H', 'M', 'S']}
//         timeLabels={{m: null, s: null}}
//         showSeparator
//       />
//     )
//     }

// export default DangerMode;