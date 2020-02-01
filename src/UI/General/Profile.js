import React from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';



     



const Profile =()=>{
  return (
      <View>
          <View style={styles.Container}>
  <View style={styles.PhotoContainer} >
  <Image  style={styles.ProfilePicture} source ={require('../Components/hesham.jpg')}/>
  <Text style={styles.username}>Hesham Gamal</Text>
  </View>
  <View  style={styles.DataContainer} >
  <Text style={styles.user}>hesham@mail.com</Text>
  <Text style={styles.user}>01111111111111</Text>
  <Text style={styles.user}>My Adress</Text>
  </View>
  </View>
  
  <TouchableOpacity style={styles.Button}>
            <Text  style={styles.ButtonText}>Edit Profile</Text>
        </TouchableOpacity>
  </View>
  
  )
}

const styles =StyleSheet.create({
Container:{
    backgroundColor:"#360f9a",
    height:400,
    borderBottomEndRadius:90,
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
    color:'rgb(255,255,255)',
    fontSize:30,
    marginVertical:60,
    marginHorizontal:20,
    alignSelf:'flex-end',
    

  
    
},
DataContainer:{
    marginHorizontal:20,
    marginVertical:20,
},
user:{
    fontSize:20,
    color:'rgb(255,255,255)',
},
Button:{
    borderRadius : 25,
    backgroundColor: '#360f9a',
    marginVertical:150,
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