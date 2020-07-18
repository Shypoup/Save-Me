import React,{useState} from 'react';
import {View, StyleSheet,TextInput,Text,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from'axios';
import { ScrollView } from 'react-native-gesture-handler';
import {URL} from '../../../API/Defaults';

const MAIN_COLOR = '#b31605';

export default class Register extends  React.Component {

    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            phone:'',
            mail:'',
            password:'',
            confirmPassword:'',
        };
    }

  render(){
  
  return (
      
      <ScrollView>
      <View style ={styles.Container}>

 



    <Text style={styles.WelcomText} >Register</Text>
    
    <View style={styles.TextinputContainer}>
       <Icon name="ios-person" color={MAIN_COLOR} style={styles.Icon} />     
       <TextInput style={styles.Textinput}
       returnKeyType = { "next" }
        onSubmitEditing={() => { this.lastName.focus(); }}
        blurOnSubmit={false}
        placeholder='First Name' 
        placeholderTextColor={MAIN_COLOR}
       value={this.state.firstName}
  
       onChangeText={firstName => this.setState({firstName})}
       />
    </View>
    {this.state.firstName.length < 1 ? <Text style={styles.validationText}>Can't be empty</Text>: null }
    


    <View style={styles.TextinputContainer}>
       <Icon name="ios-person" color={MAIN_COLOR} style={styles.Icon} />     
       <TextInput style={styles.Textinput}
       
       returnKeyType = { "next" }
        onSubmitEditing={() => { this.Phone.focus(); }}
        blurOnSubmit={false}
        placeholder='Last Name' placeholderTextColor={MAIN_COLOR}
       value={this.state.lastName}
       ref={ref => {this.lastName = ref}} 
    
       onChangeText={lastName => this.setState({lastName})}

       />
    </View>
    {this.state.lastName.length < 1 ? <Text style={styles.validationText}>Can't be empty</Text>: null }
   
   
   {/* Phone  */}
    <View style={styles.TextinputContainer}>
    <Icon name="md-phone-portrait" color={MAIN_COLOR} style={styles.Icon} />     
       <TextInput style={styles.Textinput}
      
       returnKeyType = { "next" }
        onSubmitEditing={() => { this.Mail.focus(); }}
        blurOnSubmit={false}
        placeholder='Phone' 
        placeholderTextColor={MAIN_COLOR} 
        textContentType='telephoneNumber' 
       value={this.state.phone}
    //    onChangeText={newvalue => setPhone(newvalue)}
       onChangeText={phone => this.setState({phone})}
       ref={(input) => { this.Phone = input; }}  
       keyboardType='numeric'
       />
    </View>



    <View style={styles.TextinputContainer}>
       <Icon name="ios-mail" color={MAIN_COLOR} style={styles.Icon} />     
       <TextInput style={styles.Textinput}
       ref={ref => {this.Mail = ref}} 
       returnKeyType = { "next" }
        onSubmitEditing={() => { this.password.focus(); }}
        blurOnSubmit={false}
        placeholder='Mail' placeholderTextColor={MAIN_COLOR} textContentType='emailAddress' 
       value={this.state.mail}

       onChangeText={mail => this.setState({mail})}
       />
    </View>
    {this.state.mail.length < 1  ? <Text style={styles.validationText}>Can't be empty</Text>: null }




    <View style={styles.TextinputContainer}>
       <Icon name="ios-lock" color={MAIN_COLOR} style={styles.Icon} /> 
       <TextInput style={styles.Textinput}
       ref={ref => {this.password = ref;}} 
       returnKeyType = { "next" }
        onSubmitEditing={() => { this.confirmPassword.focus(); }}
        blurOnSubmit={false}
        placeholder='password' textContentType='password' secureTextEntry={true}  placeholderTextColor={MAIN_COLOR}
       value={this.state.password}
       onChangeText={password => this.setState({password})}
    //    onChangeText={newvalue => setPassword(newvalue)}
       />  
        </View>
        
        {this.state.password.length < 1 ? <Text style={styles.validationText}>Can't be empty</Text>: null }


        <View style={styles.TextinputContainer}>
       <Icon name="ios-lock" color={MAIN_COLOR} style={styles.Icon} /> 
       <TextInput style={styles.Textinput} 
       value={this.state.confirmPassword}
       ref={ref => {this.confirmPassword = ref;}} 
       placeholder='Confirm password' 
       textContentType='password' 
       secureTextEntry={true}  
       placeholderTextColor={MAIN_COLOR}  
    //    onChangeText={newvalue => setConfirmPassword(newvalue)}
       onChangeText={confirmPassword => this.setState({confirmPassword})}
       />  
        </View>
        
        {this.state.confirmPassword.length < 1 ? <Text style={styles.validationText}>Can't be empty</Text>: null }
        

        <TouchableOpacity style={styles.Button}
         onPress={()=>{
            axios.post(`${URL}/register`,{
            Fname: `${this.state.firstName}`,
            Lname:`${this.state.lastName}`,
            phone:`${this.state.phone}`,
            email:`${this.state.mail}`,
            password:`${this.state.password}`,

        }).then(response=>{
            console.log(response.data);
            this.props.navigation.navigate("Login");
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
        <Text style={styles.createTextColored} onPress={()=> this.props.navigation.navigate('Login')}>Login</Text>
        </View>

        {/* <View style={styles.shape3}/> */}
    </View>
    </ScrollView>
  )
}
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
       fontWeight:'bold'
       
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
    
