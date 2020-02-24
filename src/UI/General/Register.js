import React,{useState} from 'react';
import {View, StyleSheet,TextInput,Text,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from'axios';
import { ScrollView } from 'react-native-gesture-handler';



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

    <View style={styles.shape2}>
        <View style={styles.shape}/>
    </View>
 



    <Text style={styles.WelcomText} >Welcome!</Text>
    
    <View style={styles.TextinputContainer}>
       <Icon name="ios-person" color="#360f9a" style={styles.Icon} />     
       <TextInput style={styles.Textinput} placeholder='First Name' placeholderTextColor='#360f9a'
       value={firstName}
       onChangeText={newvalue => setFirstName(newvalue)}
       />
    </View>
    {firstName.length < 1 ? <Text style={styles.validationText}>Can't be empty</Text>: null }
    
    <View style={styles.TextinputContainer}>
       <Icon name="ios-person" color="#360f9a" style={styles.Icon} />     
       <TextInput style={styles.Textinput} placeholder='Last Name' placeholderTextColor='#360f9a'
       value={lastName}
       onChangeText={newvalue => setLastName(newvalue)}
       />
    </View>
    {lastName.length < 1 ? <Text style={styles.validationText}>Can't be empty</Text>: null }
    <View style={styles.TextinputContainer}>
    <Icon name="ios-mobile" color="#360f9a" style={styles.Icon} />     
       <TextInput style={styles.Textinput} placeholder='Phone' placeholderTextColor='#360f9a' textContentType='telephoneNumber' 
       value={phone}
       onChangeText={newvalue => setPhone(newvalue)}
       />
    </View>
    <View style={styles.TextinputContainer}>
       <Icon name="ios-mail" color="#360f9a" style={styles.Icon} />     
       <TextInput style={styles.Textinput} placeholder='Mail' placeholderTextColor='#360f9a' textContentType='emailAddress' 
       value={mail}
       onChangeText={newvalue => setMail(newvalue)}
       />
    </View>
    {mail.length < 1  ? <Text style={styles.validationText}>Can't be empty</Text>: null }

    <View style={styles.TextinputContainer}>
       <Icon name="ios-lock" color="#360f9a" style={styles.Icon} /> 
       <TextInput style={styles.Textinput} placeholder='password' textContentType='password' secureTextEntry={true}  placeholderTextColor='#360f9a'
       value={password}
       onChangeText={newvalue => setPassword(newvalue)}
       />  
        </View>
        
        {password.length < 1 ? <Text style={styles.validationText}>Can't be empty</Text>: null }


        <View style={styles.TextinputContainer}>
       <Icon name="ios-lock" color="#360f9a" style={styles.Icon} /> 
       <TextInput style={styles.Textinput} placeholder='Confirm password' textContentType='password' secureTextEntry={true}  placeholderTextColor='#360f9a' 
       
       value={confirmPassword}
       onChangeText={newvalue => setConfirmPassword(newvalue)}
       />  
        </View>
        
        {confirmPassword.length < 1 ? <Text style={styles.validationText}>Can't be empty</Text>: null }
        

        <TouchableOpacity style={styles.Button}
         onPress={()=>{
            axios.post('http://192.168.227.1:3000/register',{
            Fname: `${firstName}`,
            Lname:`${lastName}`,
            phone:`${phone}`,
            email:`${mail}`,
            password:`${password}`,

        }).then(response=>{
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
            
        });
    
        }}
        >
            <Text  style={styles.ButtonText}>Register</Text>
        </TouchableOpacity>

        <View style={styles.CreateAccountContainer}>
        <Text style={styles.createTextNormal}>Already have an account ? </Text>
        <Text style={styles.createTextColored} onPress={()=> navigation.navigate('Login')}>Login</Text>
        </View>

        <View style={styles.shape3}/>
    </View>
    </ScrollView>
  )
}

const styles =StyleSheet.create({
    Container:{
        marginHorizontal: 30,
        marginTop:-30,
    },
    
    WelcomText:{
        color:'#360f9a',
        fontSize : 28,
       alignSelf:'center',
       margin:20,
       
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
        fontSize:12,
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
        marginHorizontal: -110,
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
    
export default Register;


// import React, {Component} from 'react'
// import {View, Button} from 'react-native'

// import TextField from 'textfield'
// import validation from 'validation'
// import validate from 'validation_wrapper'

// export default class Register extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       email: '',
//       emailError: '',
//       password: '',
//       passwordError: ''
//     }
//   }

//   register() {
//     const emailError = validate('email', this.state.email)
//     const passwordError = validate('password', this.state.password)

//     this.setState({
//       emailError: emailError,
//       passwordError: passwordError
//     })

//     if (!emailError && !passwordError) {
//       alert('Details are valid!')
//     }
//   }

//   render() {
//     return (
//       <View>
//         <TextField
//           onChangeText={value => this.setState({email: value.trim()})}
//           onBlur={() => {
//             this.setState({
//               emailError: validate('email', this.state.email)
//             })
//           }}
//           error={this.state.emailError}/>

//         <TextField
//           onChangeText={value => this.setState({password: value.trim()})}
//           onBlur={() => {
//             this.setState({
//               passwordError: validate('password', this.state.password)
//             })
//           }}
//           error={this.state.passwordError}
//           secureTextEntry={true}/>

//         <Button
//           title='Register'
//           onPress={this.validateRegister}/>

//       </View>
//     )
//   }}