import React from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



const LostPostDetail =(props)=>{
  return (
     
  <ScrollView>
    <View>
  <View style={styles.postContainer}>
  <Image style={styles.postImage} source ={require('../Components/hesham2.jpg')}/>
    <View style={styles.postText}>
    <Text style={styles.postText}>Name:<Text style={styles.innerPostText}>Hesham Gamal Ali  {props.Name}</Text></Text>
    <Text style={styles.postText}>Age: <Text style={styles.innerPostText}>22{props.Age}</Text></Text>
    <Text style={styles.postText}>City: <Text style={styles.innerPostText}>Cairo{props.City}</Text></Text>
    <Text style={styles.postText}>Lost Date: <Text style={styles.innerPostText}>20/1/2020{props.LostDate}</Text></Text> 
    <Text style={styles.postText}>Description: <Text style={styles.innerPostText}>For mac you may need to change gradlew to ./gradlew

          For the command prompt you may need to change the && to &
          For powershell you may need to change the && to ; and gradlew to .\gradlew.bat
          Each command can also be run individually like so cd android
           then gradlew clean then cd .. then react-native run-android{props.Description}</Text>
  </Text>
    
  <Text style={styles.postText}>Phone: <Text style={styles.innerPostText}>01123121021-01202145697{props.Phone}</Text></Text>
    </View>
    
    </View>

    
    </View>
    </ScrollView>
  )
}


const styles =StyleSheet.create({
  postContainer :{
  marginHorizontal: 20,
  marginVertical:5,
  
  borderWidth : 0.3,
  borderColor: '#360f9a',
  borderRadius:9,
  alignItems:'stretch',
  },
  postImage:{
      
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
  seeMore:{
      
      color:'gray',
      fontSize:15,
      marginTop:30,
  
  }
  });


    
export default LostPostDetail;