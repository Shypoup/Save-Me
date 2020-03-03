import React from 'react';
import {View, StyleSheet,Text,TouchableOpacity} from 'react-native';




 const SelectPost =({navigation})=>{
   
  return (
     
  <View style={styles.Container}>

    

         
  <TouchableOpacity 
   onPress={()=> navigation.navigate('CreateLost')}
  style={styles.Button}
  >
            <Text  style={styles.ButtonText}>Create Lost Post</Text>
        </TouchableOpacity>


        <TouchableOpacity 
   onPress={()=> navigation.navigate('Car accident')}
  style={styles.Button}
  >
            <Text  style={styles.ButtonText}>Create Accident Post</Text>
        </TouchableOpacity>
    
    </View>
    
    
  )
}

const styles =StyleSheet.create({
    Container:{
      // backgroundColor:"#360f9a",
        height:200,
        borderBottomEndRadius:90,
        marginHorizontal:10,
        marginVertical:300,
    },
    PhotoContainer:{
        flexDirection:'row',
        
        
    },
    ProfilePicture:{
        height:150,
        width:150,
        marginVertical:20,
        borderRadius:75,
        borderWidth:5,
        borderColor:"#360f9a",
       
       
    },
    username:{
        color:'#360f9a',
        fontSize:25,
        marginVertical:60,
        marginHorizontal:20,
        alignSelf:'flex-end',
        
    
      
        
    },
    DataContainer:{
        marginHorizontal:50,
        marginVertical:30,
        marginBottom:60,
    },
    user:{
        fontSize:20,
        color:'#000',
    },
    Title:{
        color:'#360f9a',
        
        marginVertical:10,
    },
    Button:{
        borderRadius : 25,
        backgroundColor: '#360f9a',
        marginVertical:5,
        marginHorizontal: 60,
        
    
    },
    ButtonText:{
        fontSize:20,
        color:'white',
        alignSelf:'center',
        fontFamily:'sans-serif-condensed',
        marginVertical:5,
    },
    
    });

export default SelectPost;