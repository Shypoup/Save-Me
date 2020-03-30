import React from 'react';
import {View, StyleSheet,TextInput,Text,TouchableOpacity,Picker,Image,ScrollView} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import {URL} from '../../../API/Defaults';


export  default class EditProfile extends React.Component{
        
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
      <View style ={styles.Container}>
            <Text style={styles.WelcomText} >Edit Profile</Text>


            <Text style={styles.Title}>Your Info</Text>

             <View style={styles.TextinputContainer} >
             <EntypoIcons name="edit" style={styles.iconStyle} /> 
              <TextInput
                style={styles.input} 
                placeholder='First Name'
                placeholderTextColor='#360f9a'  
                onChangeText={firstName => this.setState({firstName})}
                value={this.state.firstName}
                returnKeyType = { "next" }
                onSubmitEditing={() => { this.lastName.focus(); }}
                blurOnSubmit={false}
              />
            </View>


            <View style={styles.TextinputContainer} >
             <EntypoIcons name="edit" style={styles.iconStyle} /> 
              <TextInput
                style={styles.input}
                placeholder='Last Name'
                placeholderTextColor='#360f9a'  onChangeText={lastName => this.setState({lastName})}
                value={this.state.lastName}
                ref={ref => {this.lastName = ref;}} 
                returnKeyType = { "next" }
                onSubmitEditing={() => { this.Mail.focus(); }}
                blurOnSubmit={false}
                />

                </View>

            <View style={styles.TextinputContainer} >
             <EntypoIcons name="email" style={styles.iconStyle} /> 
              <TextInput
                style={styles.input}
                placeholder='Mail' 
                placeholderTextColor='#360f9a'
                onChangeText={mail => this.setState({mail})}
                value={this.state.mail}
                ref={ref => {this.Mail = ref;}} 
                returnKeyType = { "next" }
                onSubmitEditing={() => { this.Phone.focus(); }}
                blurOnSubmit={false}
              />
             </View> 


            <View style={styles.TextinputContainer} >
             <EntypoIcons name="phone" style={styles.iconStyle} /> 
              <TextInput
                style={styles.input}
                placeholder='Phone'
                placeholderTextColor='#360f9a'
                textContentType='telephoneNumber' 
                onChangeText={phone => this.setState({phone})}
                value={this.state.phone}
                ref={ref => {this.Phone = ref;}} 
                returnKeyType = { "next" }
                onSubmitEditing={() => { this.Address.focus(); }}
                blurOnSubmit={false}
                    />
              </View>
            


            <View style={styles.TextinputContainer} >
              <Icon name="location-city" style={styles.iconStyle} />
              <TextInput
                style={styles.input}
                placeholder='Address'
                placeholderTextColor='#360f9a' 
                textContentType='fullStreetAddress'
                onChangeText={address => this.setState({address})}
                value={this.state.address}
                ref={ref => {this.Address = ref;}} 
                returnKeyType = { "next" }
                onSubmitEditing={() => { this.bloodType.focus(); }}
                blurOnSubmit={false}
              />
              </View>



              
            <View style={styles.TextinputContainer} >
             <EntypoIcons name="drop" style={styles.iconStyle} /> 
              <TextInput
                style={styles.input}
                placeholder='Blood Type'
                placeholderTextColor='#360f9a' 
                textContentType='none'
                onChangeText={bloodType => this.setState({bloodType})}
                  value={this.state.bloodType}
                    ref={ref => {this.bloodType = ref;}} 
              returnKeyType = { "next" }
                onSubmitEditing={() => { this.Phone1.focus(); }}
                blurOnSubmit={false}
              />
            </View>  
              
            
            <Text  style={styles.Title}>Trusted persons' Numbers</Text>
             
             
            <View style={styles.TextinputContainer} >
              <Ionicons name="md-person" style={styles.iconStyle}/>
              <TextInput
                style={styles.input}
                placeholder='Phone1'
                placeholderTextColor='#360f9a'
                textContentType='telephoneNumber' 
                onChangeText={firstTrusted => this.setState({firstTrusted})}
                value={this.state.firstTrusted}
                ref={ref => {this.Phone1 = ref;}} 
                returnKeyType = { "next" }
                onSubmitEditing={() => { this.Phone2.focus(); }}
                blurOnSubmit={false}
                keyboardType='numeric'
              />
            </View>
            
            
            
            <View style={styles.TextinputContainer} >
             <Ionicons name="md-person" style={styles.iconStyle}/>
              <TextInput
                style={styles.input}
                placeholder='Phone2'
                placeholderTextColor='#360f9a'
                textContentType='telephoneNumber'
                onChangeText={secondTrusted => this.setState({secondTrusted})}
                value={this.state.secondTrusted}
                ref={ref => {this.Phone2 = ref;}} 
                returnKeyType = { "next" }
                onSubmitEditing={() => { this.Phone3.focus(); }}
                blurOnSubmit={false}
                keyboardType='numeric'
              />
            </View>
              
            <View style={styles.TextinputContainer} >
             <Ionicons name="md-person" style={styles.iconStyle}/>
              <TextInput
                style={styles.input}
                placeholder='Phone3'
                placeholderTextColor='#360f9a' 
                textContentType='telephoneNumber' 
                onChangeText={thirdTrusted => this.setState({thirdTrusted})}
              value={this.state.thirdTrusted}
                ref={ref => {this.Phone3 = ref;}} 
                keyboardType='numeric'
              />
        
              </View>

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
                            address:this.state.address,
                            bloodType:this.state.bloodType,
                            trusted1:this.state.firstTrusted,
                            trusted2:this.state.secondTrusted,
                            trusted3:this.state.thirdTrusted,

                        },
                        headers:{
                          'X-AUTH':`${this.state.Token}`
                        }
                    }).then((res) => {
                        console.log("Response is:",res); 
                        this.props.navigation.pop();
                    }).catch((error) => {
                        if(error.response){
                          console.log(error.response.data);
                          
                        }else if (error.request) {
                          console.log(error.request);
                      } else {
                          
                          console.log('Error', error.message);
                      }
                      console.log(error.config);
                    })

                  }}
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
    Title:{
    color:'#360f9a',
    marginTop:10,
    },
    
    TextinputContainer:{
        borderBottomWidth: 1,
        borderColor: '#360f9a',
        flexDirection:'row',
        paddingHorizontal:20,
        marginVertical:10,
        flex:1,
        
    },
    input:{
        flex:1
    },
    iconStyle:{
      color:'#360f9a',
      fontSize:18,
      marginTop:15,
      marginRight:5,
      marginLeft:-10,
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
    
