import React from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NotificationCard from '../Components/NotificationCard';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Notifications =( props) =>{
   
  return (
     <ScrollView>
  <View>
        <Text style={styles.headerText}><Icon name="ios-notifications" size={25} color="#2c0f7f"/>  Notifications   </Text>
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
    </View>
    </ScrollView>
  )
}

const styles =StyleSheet.create({
postContainer :{
marginHorizontal: 20,
marginVertical:5,
flexDirection:'row',
borderWidth : 0.2,
borderColor: '#360f9a',
borderRadius:2,
alignItems:'flex-start',
height:140,
},
headerText:{
    fontSize:25,
    marginHorizontal: 20,
    marginVertical:10,
    fontWeight: "bold",
    color: '#360f6f',
    //fontStyle: 'italic',
},
postTextContainer:{
    // alignSelf:'flex-start',
    alignItems:'flex-start',
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

    
export default Notifications;