import React,{useState} from 'react';
import {View, StyleSheet,TextInput,Text,TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const Login = ({navigation}) =>{
    const [mail,setMail] =useState('');
    const [password,setPassword] =useState('');
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
      value={mail}
      onChangeText={newvalue => setMail(newvalue)}
      />
   </View>
   {mail.length < 1 ? <Text style={styles.validationText}>Can't be empty</Text>: null }
   

    <View style={styles.TextinputContainer}>
       <Icon name="ios-lock" color="#360f9a" style={styles.Icon} /> 
       <TextInput style={styles.Textinput} placeholder='password' textContentType='password' secureTextEntry={true}  placeholderTextColor='#360f9a'
       
       value={password}
       onChangeText={newvalue => setPassword(newvalue)}
       />  
        </View>
        
        {password.length < 1 ? <Text style={styles.validationText}>Can't be empty</Text>: null }
        

        <TouchableOpacity style={styles.Button}
        // onPress={()=>{
        //     axios.post('http://192.168.1.8:3000/login',{
        //     email:`${mail}`,
        //     password:`${password}`,

        //     headers: {
        //         'Content-Type': 'application/json',
        //     }

        // }).then(response=>{
        //     console.log(response.data);
        // }).catch(error =>{
        //     console.log(error);
            
        // });
    
        // }}
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
    
export default Login;