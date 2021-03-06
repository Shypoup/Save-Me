import React,{useState} from 'react';
import {View, StyleSheet,TextInput,Text,TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {URL} from '../../../API/Defaults';
import AsyncStorage from '@react-native-community/async-storage';

const MAIN_COLOR = '#b31605';




export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            mail:"",
            password:"",
            Token:''
            
        };
    }

storeToken = async (accessToken) => {
    try {
      await AsyncStorage.setItem('token', accessToken)
      console.log('Done Store Token')
    } catch(e) {
        console.log("Somethimg went Wrong Store Token");
    }
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

  





render(){
    
    return (


        <ScrollView>
        <View style ={styles.Container}>

    
   
 



    <Text style={styles.WelcomText} >Login</Text>
    
    <View style={styles.TextinputContainer}>
       <Icon name="ios-mail" 
       color={MAIN_COLOR} 
       style={styles.Icon} />     
       <TextInput 
        style={styles.Textinput} 
        placeholder='Mail' 
        placeholderTextColor={MAIN_COLOR} 
        value={this.state.mail}
        onChangeText={mail => this.setState({mail})}
        returnKeyType = { "next" }
        onSubmitEditing={() => { this.password.focus(); }}
        blurOnSubmit={false}
      />
   </View>
   {this.state.mail.length < 1 ? <Text style={styles.validationText}>Can't be empty</Text>: null }
   

    <View style={styles.TextinputContainer}>
       <Icon name="ios-lock" color={MAIN_COLOR} style={styles.Icon} /> 
       <TextInput 
        style={styles.Textinput}
        placeholder='password' 
        textContentType='password' 
        secureTextEntry={true} 
        placeholderTextColor={MAIN_COLOR}
        ref={(input) => { this.password = input; }} 
        value={this.state.password}
        onChangeText={password => this.setState({password})}
       />  
        </View>
        
        {this.state.password.length < 1 ? <Text style={styles.validationText}>Can't be empty</Text>: null }
        

        <TouchableOpacity style={styles.Button}
        onPress={()=>{
            axios.post(`${URL}/login`,{
            email:`${this.state.mail}`,
            password:`${this.state.password}`,

            headers: {
                'Content-Type': 'application/json',
            }
            
        }).then(response=>{
            // let res=await response.token;
           console.log(response.data);
            let accessToken=response.data.tokens[1].token;
            
            this.storeToken(accessToken);
            console.log("Show Token : "+ accessToken);
            this.getToken().then((value)=>{
                console.log("GET Token : "+ value);
            })
           
           

            this.props.navigation.navigate('Ho');
        }).catch(error =>{
            console.log(error);
            
        });
    
        }}
        >
            <Text  style={styles.ButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.CreateAccountContainer}>
        <Text style={styles.createTextNormal}>Don't have an account ? </Text>
        <Text style={styles.createTextColored} onPress={()=> this.props.navigation.navigate('Register')}>Create One</Text>
        </View>

      
    </View>
    </ScrollView>
  )
}
}
const styles =StyleSheet.create({
    Container:{
        marginHorizontal: 30,
    },
    
    WelcomText:{
        color:MAIN_COLOR,
        fontSize : 38,
       alignSelf:'center',
       margin:40,
       fontWeight:'bold'
       
    },
    TextinputContainer:{
        
        borderRadius : 25,
        borderWidth: 0.5,
        borderColor: MAIN_COLOR,
        flexDirection:'row',
        flex:1,
        paddingHorizontal:20,
        marginTop:20,
        marginBottom:10
        
    },
    Textinput :{
      
        fontSize : 15,
        color : '#000',
        paddingLeft :20,
        flex:1,
    },
    Icon:{
        marginVertical:8,
        fontSize: 25,
    },
    Button:{
        borderRadius : 25,
        backgroundColor: MAIN_COLOR,
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
        color:MAIN_COLOR,
    },
    validationText:{
        color:MAIN_COLOR,
        marginTop: -9,
        marginHorizontal:40,
        fontSize:10,
    },

    shape:{
        height:140,
        width:140,
        borderRadius:100,
        backgroundColor: MAIN_COLOR,
        marginHorizontal: 15,
        
    },
    shape2:{
        height:150,
        width:150,
        borderRadius:100,
        borderRadius : 75,
        borderWidth: 2,
        borderColor: MAIN_COLOR,
        marginHorizontal: -50,
        alignSelf:'flex-end'
    },
    shape3:{
        height:140,
        width:140,
        borderRadius:100,
        backgroundColor: MAIN_COLOR,
        marginHorizontal: -120,
        alignSelf:'flex-start',
        marginVertical: 15,
        
    },
});
    
