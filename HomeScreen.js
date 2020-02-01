import React from 'react';
import {View, StyleSheet,Text} from 'react-native';



const HomeScreen =()=>{
  return (
      <View>
  <Text style={styles.Textinput}>Hello Home  </Text>


  </View>
  )
}

const styles =StyleSheet.create({

Textinput :{
    fontSize : 40,
    color : 'red'
}

});
    
export default HomeScreen;