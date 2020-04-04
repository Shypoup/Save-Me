import React from 'react';
import {View, StyleSheet,Text,Image,Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



const LostPostDetail =({ route, navigation })=>{

  const { item } = route.params;
  const { otherParam } = route.params;
  return (
     
  <ScrollView>
    <View>
  <View style={styles.postContainer}>
  <Image style={styles.postImage} source={{uri: `${item.main_image_URL}`}}/>
    <View style={styles.postText}>
    <Text style={styles.postText}>Name:<Text style={styles.innerPostText}> {item.name} {item.childname}</Text></Text>
    <Text style={styles.postText}>Age: <Text style={styles.innerPostText}>{item.age}</Text></Text>
    <Text style={styles.postText}>City: <Text style={styles.innerPostText}>{item.city}</Text></Text>
    <Text style={styles.postText}>Gende: <Text style={styles.innerPostText}>{item.gender}</Text></Text>
    <Text style={styles.postText}> Date: <Text style={styles.innerPostText}>{item.time}</Text></Text> 
    <Text style={styles.postText}> Phone: <Text style={styles.innerPostText}>{item.phone}</Text></Text>
    <Text style={styles.postText}>Description: <Text style={styles.innerPostText}>{item.descreption}</Text>
  </Text>
    
    </View>
    
    </View>

    
    </View>
    </ScrollView>
  )
}


const styles =StyleSheet.create({
  postContainer :{
  backgroundColor:'white',
  marginHorizontal: 20,
  marginVertical:5,
  
  borderWidth : 0.3,
  borderColor: '#360f9a',
  borderRadius:9,
  alignItems:'stretch',
  },
  postImage:{
      resizeMode:'contain',
      height: 300,
      width:350,
      marginHorizontal:10,
      marginVertical:10,
       
    
  },
  postTextContainer:{
      // alignSelf:'flex-start',
     
      flex:1,
      
  },
  postText:{
      color: '#360f9a',
      fontSize:16,
      marginVertical:5,
      marginHorizontal:5,
  
  },
  innerPostText:{
      color: '#000',
      fontSize:15,
  
  },

  });


    
export default LostPostDetail;

