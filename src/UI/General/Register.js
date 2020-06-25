import React,{useState} from 'react';
import {View, StyleSheet,TextInput,Text,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from'axios';
import { ScrollView } from 'react-native-gesture-handler';
import {URL} from '../../../API/Defaults';

const MAIN_COLOR = '#b31605';


const Register = ({navigation}) =>{
  const [firstName,setFirstName] =useState('');
  const [lastName,setLastName] =useState('');
  const [phone,setPhone]=useState('');
  const [mail,setMail] =useState('');
  const [password,setPassword] =useState('');
  const [confirmPassword,setConfirmPassword] =useState('');
  
  return (
      <ScrollView>
      <View style ={styles.Container}>
{/* 
    <View style={styles.shape2}>
        <View style={styles.shape}/>
    </View> */}
 



    <Text style={styles.WelcomText} >Welcome!</Text>
    
    <View style={styles.TextinputContainer}>
       <Icon name="ios-person" color={MAIN_COLOR} style={styles.Icon} />     
       <TextInput style={styles.Textinput}
       returnKeyType = { "next" }
        onSubmitEditing={() => { this.lastName.focus(); }}
        blurOnSubmit={false}
        placeholder='First Name' placeholderTextColor={MAIN_COLOR}
       value={firstName}
       onChangeText={newvalue => setFirstName(newvalue)}
       />
    </View>
    {firstName.length < 1 ? <Text style={styles.validationText}>Can't be empty</Text>: null }
    
    <View style={styles.TextinputContainer}>
       <Icon name="ios-person" color={MAIN_COLOR} style={styles.Icon} />     
       <TextInput style={styles.Textinput}
       ref={ref => {this.lastName = ref;}} 
       returnKeyType = { "next" }
        onSubmitEditing={() => { this.Phone.focus(); }}
        blurOnSubmit={false}
        placeholder='Last Name' placeholderTextColor={MAIN_COLOR}
       value={lastName}
       onChangeText={newvalue => setLastName(newvalue)}
       />
    </View>
    {lastName.length < 1 ? <Text style={styles.validationText}>Can't be empty</Text>: null }
    <View style={styles.TextinputContainer}>
    <Icon name="md-phone-portrait" color={MAIN_COLOR} style={styles.Icon} />     
       <TextInput style={styles.Textinput}
       ref={ref => {this.Phone = ref;}} 
       returnKeyType = { "next" }
        onSubmitEditing={() => { this.Mail.focus(); }}
        blurOnSubmit={false}
        placeholder='Phone' 
        placeholderTextColor={MAIN_COLOR} 
        textContentType='telephoneNumber' 
       value={phone}
       onChangeText={newvalue => setPhone(newvalue)}
       keyboardType='numeric'
       />
    </View>
    <View style={styles.TextinputContainer}>
       <Icon name="ios-mail" color={MAIN_COLOR} style={styles.Icon} />     
       <TextInput style={styles.Textinput}
       ref={ref => {this.Mail = ref;}} 
       returnKeyType = { "next" }
        onSubmitEditing={() => { this.password.focus(); }}
        blurOnSubmit={false}
        placeholder='Mail' placeholderTextColor={MAIN_COLOR} textContentType='emailAddress' 
       value={mail}
       onChangeText={newvalue => setMail(newvalue)}
       />
    </View>
    {mail.length < 1  ? <Text style={styles.validationText}>Can't be empty</Text>: null }

    <View style={styles.TextinputContainer}>
       <Icon name="ios-lock" color={MAIN_COLOR} style={styles.Icon} /> 
       <TextInput style={styles.Textinput}
       ref={ref => {this.password = ref;}} 
       returnKeyType = { "next" }
        onSubmitEditing={() => { this.confirmPassword.focus(); }}
        blurOnSubmit={false}
        placeholder='password' textContentType='password' secureTextEntry={true}  placeholderTextColor={MAIN_COLOR}
       value={password}
       onChangeText={newvalue => setPassword(newvalue)}
       />  
        </View>
        
        {password.length < 1 ? <Text style={styles.validationText}>Can't be empty</Text>: null }


        <View style={styles.TextinputContainer}>
       <Icon name="ios-lock" color={MAIN_COLOR} style={styles.Icon} /> 
       <TextInput style={styles.Textinput} 
       value={confirmPassword}
       ref={ref => {this.confirmPassword = ref;}} 
       placeholder='Confirm password' 
       textContentType='password' 
       secureTextEntry={true}  
       placeholderTextColor={MAIN_COLOR}  
       onChangeText={newvalue => setConfirmPassword(newvalue)}
       />  
        </View>
        
        {confirmPassword.length < 1 ? <Text style={styles.validationText}>Can't be empty</Text>: null }
        

        <TouchableOpacity style={styles.Button}
         onPress={()=>{
            axios.post(`${URL}/register`,{
            Fname: `${firstName}`,
            Lname:`${lastName}`,
            phone:`${phone}`,
            email:`${mail}`,
            password:`${password}`,

        }).then(response=>{
            console.log(response.data);
            navigation.navigate("Login");
        }).catch(error =>{
            console.log(error);
            
            
        });
    
        }
        
        }
        >
            <Text  style={styles.ButtonText}>Register</Text>
        </TouchableOpacity>

        <View style={styles.CreateAccountContainer}>
        <Text style={styles.createTextNormal}>Already have an account ? </Text>
        <Text style={styles.createTextColored} onPress={()=> navigation.navigate('Login')}>Login</Text>
        </View>

        {/* <View style={styles.shape3}/> */}
    </View>
    </ScrollView>
  )
}

const styles =StyleSheet.create({
    Container:{
        marginHorizontal: 30,
        marginTop:30,
    },
    
    WelcomText:{
        color:MAIN_COLOR,
        fontSize : 28,
       alignSelf:'center',
       margin:20,
       
    },
    TextinputContainer:{
        
        borderRadius : 25,
        borderWidth: 0.5,
        borderColor: MAIN_COLOR,
        flexDirection:'row',
        flex:1,
        paddingHorizontal:20,
        marginVertical:10,
        
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
        marginHorizontal: -110,
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
    
export default Register;