import React from 'react';
import {View, StyleSheet,Text,Image,Button,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {URL} from '../../../API/Defaults';
import axios from 'axios';

const MAIN_COLOR = '#b31605';

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

                

                 
    <TouchableOpacity style={styles.IconContainer}
                 onPress={()=> console.warn("Icon Pressed")}
                 >
                <Icon name='ban'
                      type='font-awesome'
                      size={23} 
                     iconStyle={styles.Icon}
                     
                   />
                <Text style={{color:MAIN_COLOR }}>report</Text>
                </TouchableOpacity>

    
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
  borderColor: MAIN_COLOR,
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
      color: MAIN_COLOR,
      fontSize:16,
      marginVertical:5,
      marginHorizontal:5,
  
  },
  innerPostText:{
      color: '#000',
      fontSize:15,
  
  },
  IconContainer:{
    justifyContent:'center',
    alignItems:'flex-start',
    margin:10,
    marginVertical:20
},
Icon:
{
  marginHorizontal:8,
  color: MAIN_COLOR,
  alignSelf:'flex-start'
}

  });


    
export default LostPostDetail;

