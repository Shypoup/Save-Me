import React from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';




const NotificationCard =( props) =>{
   
  return (
     
  <View>
        
<View style={styles.postContainer}>
  
        <Text style={styles.postText}>You have new notification,press to see more details</Text>
   
    </View>
    </View>
    
  )
}

const styles =StyleSheet.create({
postContainer :{
marginHorizontal: 20,
marginVertical:8,
flexDirection:'row',
borderWidth : 0.4,
borderColor: '#360f9a',
borderRadius:2,
alignItems:'flex-start',
height:100,
},

postTextContainer:{
    // alignSelf:'flex-start',
    alignItems:'flex-start',
    flex:1,
    
},
postText:{
   color: '#360f9a',
    fontSize:20,
    marginVertical:10,
    marginHorizontal:10,

},
innerPostText:{
    color: '#000',
    fontSize:15,

},



});

    
export default NotificationCard;