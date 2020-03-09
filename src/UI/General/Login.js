import React,{useState} from 'react';
import {View, StyleSheet,TextInput,Text,TouchableOpacity,ScrollView,AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {URL} from '../../../API/Defaults';
const ACCESS_TOKEN ='access_token';



export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            mail:"",
            password:""
            
        };
    }

    async storeToken(accessToken){
    try{
        await AsyncStorage.setItem(ACCESS_TOKEN,accessToken);
        this.getToken();
    }catch(error){
        console.log("Somethimg went Wrong");
    }
}

async getToken(){
    try{
      let token =  await AsyncStorage.getItem(ACCESS_TOKEN);
      console.log("Token is : "+token)
        
    }catch(error){
        console.log("Somethimg went Wrong");
    }
}
async removeToken(){
    try{
        await AsyncStorage.removeItem(ACCESS_TOKEN);
        this.getToken();
    }catch(error){
        console.log("Somethimg went Wrong");
    }
}

render(){

    return (


        <ScrollView>
        <View style ={styles.Container}>

    
    <View style={styles.shape2}>
        <View style={styles.shape}/>
      
    </View>
 



    <Text style={styles.WelcomText} >Welcome back !</Text>
    
    <View style={styles.TextinputContainer}>
       <Icon name="ios-mail" color="#360f9a" style={styles.Icon} />     
       <TextInput style={styles.Textinput} placeholder='Mail' placeholderTextColor='#360f9a' 
      value={this.state.mail}
      onChangeText={mail => this.setState({mail})}
      />
   </View>
   {this.state.mail.length < 1 ? <Text style={styles.validationText}>Can't be empty</Text>: null }
   

    <View style={styles.TextinputContainer}>
       <Icon name="ios-lock" color="#360f9a" style={styles.Icon} /> 
       <TextInput style={styles.Textinput} placeholder='password' textContentType='password' secureTextEntry={true}  placeholderTextColor='#360f9a'
       
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
            let accessToken=response.data.token;
            console.log("Show Token : "+ response.data.tokens[0].token);
            this.storeToken(accessToken);
            
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
        <Text style={styles.createTextColored} onPress={()=> navigation.navigate('Register')}>Create One</Text>
        </View>

        <View style={styles.shape3}/>
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
        color:'#360f9a',
        fontSize : 28,
       alignSelf:'center',
       margin:40,
       
    },
    TextinputContainer:{
        
        borderRadius : 25,
        borderWidth: 1,
        borderColor: '#360f9a',
        flexDirection:'row',
        
        paddingHorizontal:20,
        marginVertical:10,
        
    },
    Textinput :{
      
        fontSize : 18,
        color : '#000',
        paddingLeft :20,
       
    },
    Icon:{
        marginVertical:8,
        fontSize: 25,
    },
    Button:{
        borderRadius : 25,
        backgroundColor: '#360f9a',
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
        color:'#360f9a',
    },
    validationText:{
        color:'#360f9a',
        marginTop: -9,
        marginHorizontal:40,
    },

    shape:{
        height:140,
        width:140,
        borderRadius:100,
        backgroundColor: '#360f9a',
        marginHorizontal: 15,
        
    },
    shape2:{
        height:150,
        width:150,
        borderRadius:100,
        borderRadius : 75,
        borderWidth: 2,
        borderColor: '#360f9a',
        marginHorizontal: -50,
        alignSelf:'flex-end'
    },
    shape3:{
        height:140,
        width:140,
        borderRadius:100,
        backgroundColor: '#360f9a',
        marginHorizontal: -120,
        alignSelf:'flex-start',
        marginVertical: 15,
        
    },
});
    
