import React from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';




const LostPost =(props)=>{
   
  return (
     
  <View>
<View style={styles.postContainer}>
    
    <View style={styles.postText}>
    <Text style={styles.postText}>Name:<Text style={styles.innerPostText}> {props.Name}</Text></Text>
    <Text style={styles.postText}>Age: <Text style={styles.innerPostText}>{props.Age}</Text></Text>
    <Text style={styles.postText}>City: <Text style={styles.innerPostText}>{props.City}</Text></Text>
    <Text style={styles.postText}>Lost Date: <Text style={styles.innerPostText}>{props.LostDate}</Text></Text> 
    {/* <TouchableOpacity
      onPress={() =>props.navigation.navigate('LostDetail')}
    >
        <Text style={styles.seeMore}   >See More </Text>
    </TouchableOpacity> */}
    
    </View>
    <Image style={styles.postImage} source ={props.ImageSource}/>
    </View>
    </View>
    
  )
}

const styles =StyleSheet.create({
postContainer :{
marginHorizontal: 20,
marginVertical:5,
flexDirection:'row',
borderWidth : 0.3,
borderColor: '#360f9a',
borderRadius:9,
alignItems:'flex-start',
},
postImage:{
    flex: 1,
    width: 200,
    height: 200,
    resizeMode:  'contain',
     alignSelf:'flex-end',
     marginHorizontal:10,
     
  
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

    
export default LostPost;