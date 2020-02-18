import React from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NotificationCard from '../Components/NotificationCard';



const Notifications =( props) =>{
   
  return (
     <ScrollView>
  <View>
        <Text style={styles.headerText}>Notifications</Text>
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
    fontSize:20,
    marginHorizontal: 20,
    marginVertical:10,
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