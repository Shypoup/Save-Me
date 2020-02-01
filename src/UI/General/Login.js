import React from 'react';
import {View, StyleSheet,TextInput,Text,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



const Login = ({navigation}) =>{
  return (
      <View style ={styles.Container}>
  {/* <Text style={styles.Textinput}>Hello Login  </Text>
  <Text>
      Lorem <Icon name="ios-book" color="#000000"  /> Ipsum
    </Text> */}
    
    <View style={styles.shape2}>
        <View style={styles.shape}/>
        {/* <View style={styles.shape3}/> */}
    </View>
 



    <Text style={styles.WelcomText} >Welcome back !</Text>
    
    <View style={styles.TextinputContainer}>
       <Icon name="ios-person" color="#360f9a" style={styles.Icon} />     
       <TextInput style={styles.Textinput} placeholder='Username' placeholderTextColor='#360f9a' />
    </View>
    {/* <Text style={styles.validationText}>Can't be empty</Text> */}

    <View style={styles.TextinputContainer}>
       <Icon name="ios-lock" color="#360f9a" style={styles.Icon} /> 
       <TextInput style={styles.Textinput} placeholder='password' textContentType='password' secureTextEntry={true}  placeholderTextColor='#360f9a' />  
        </View>
        {/* <Text style={styles.validationText}>Can't be empty</Text> */}
        

        <TouchableOpacity style={styles.Button}>
            <Text  style={styles.ButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.CreateAccountContainer}>
        <Text style={styles.createTextNormal}>Don't have an account ? </Text>
        <Text style={styles.createTextColored} onPress={()=> navigation.navigate('register')}>Create One</Text>
        </View>

        <View style={styles.shape3}/>
    </View>
  
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
        borderWidth: 2,
        borderColor: '#360f9a',
        flexDirection:'row',
        
        paddingHorizontal:20,
        marginVertical:10,
        
    },
    Textinput :{
      
        fontSize : 20,
        color : '#000',
        paddingLeft :20,
       
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