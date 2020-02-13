import React from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';



     



const Profile =props=>{
  return (
      <View>
          <View style={styles.Container}>
                <View style={styles.PhotoContainer} >
                <Image  style={styles.ProfilePicture} source ={require('../Components/hesham.jpg')}/>
                <Text style={styles.username}>Hesham Gamal</Text>
                </View>
            </View>
  <View  style={styles.DataContainer} >
<Text style={styles.Title}>Your Data</Text>
  <Text style={styles.user}>hesham@mail.com</Text>
  <Text style={styles.user}>011456364422</Text>
  <Text style={styles.user}>Pyramids,Giza</Text>
  <Text style={styles.user}>O+</Text>
  <Text style={styles.Title}>Trusted Numbers</Text>
  <Text style={styles.user}>011456364422</Text>
  <Text style={styles.user}>011456364422</Text>
  <Text style={styles.user}>011456364422</Text>
  </View>
  
  <TouchableOpacity 
    onPress={()=> props.navigation.navigate('EditProfile')}
    style={styles.Button}
  >
            <Text  style={styles.ButtonText}>Edit Profile</Text>
        </TouchableOpacity>
  <TouchableOpacity 
   onPress={()=> props.navigation.navigate('QR')}
  style={styles.Button}>
            <Text  style={styles.ButtonText}>Generate QR Code</Text>
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
    
export default Profile;