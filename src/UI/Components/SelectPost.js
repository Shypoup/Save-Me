import React from 'react';
import {View, StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import {Text,Icon} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MAIN_COLOR = '#b31605';
const WIDTH = Dimensions.get('window').width;
const HIEGHT = Dimensions.get('window').height;


 export default class CreatePost extends React.Component{

   render(){
  return (
     
  <View style={styles.Container}>
      <View style={styles.header}>
    <Text h2 style={styles.headerText} >Create Post   </Text>
    <Ionicons name='ios-add-circle' size={32} color={MAIN_COLOR} style={styles.headerIcon}/>
    </View>

            
            <TouchableOpacity 
                    onPress={()=> this.props.navigation.navigate('CreateLost')}
                    style={styles.Button}
            >
                  <Text  style={styles.ButtonText}> Lost Post</Text>
                  <Ionicons name='ios-people' size={32} color={MAIN_COLOR} style={styles.ButtonIcon}/>
             </TouchableOpacity>
             

        <TouchableOpacity 
            onPress={()=> this.props.navigation.navigate('Create Founded')}
            style={styles.Button}
            >
            <Text  style={styles.ButtonText}> Founded Post</Text>
            <Ionicons name='ios-people' size={32} color={MAIN_COLOR} style={styles.ButtonIcon}/>
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={()=> this.props.navigation.navigate('Car accident')}
            style={styles.Button}
            >
            <Text  style={styles.ButtonText}> Accident Post</Text>
            <Icon name='car' type='font-awesome' size={28}    iconStyle={styles.ButtonIcon}  />
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={()=> this.props.navigation.navigate('LostThings Post')}
            style={styles.Button}
            >
            <Text  style={styles.ButtonText}>Lost things </Text>
            <Icon name='id-card' type='font-awesome' size={28}    iconStyle={styles.ButtonIcon}  />
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={()=> this.props.navigation.navigate('Humanitarian')}
            style={styles.Button}
            >
            <Text  style={styles.ButtonText}> humanitarian situation</Text>
            <Icon name='heart' type='font-awesome' size={28}    iconStyle={styles.ButtonIcon}  />
        </TouchableOpacity>
    
    </View>
    
    
  )
}}

const styles =StyleSheet.create({
    Container:{
      // backgroundColor:"#360f9a",
        height:200,
        borderBottomEndRadius:90,
        marginHorizontal:10,
        alignContent:'center',
        alignItems:'center'
       
        
    },

    header:{
        flexDirection:'row',
        alignContent:'space-between',
        // alignSelf:'center',
        marginVertical:10,
        
    },
    headerText:{
        color:MAIN_COLOR,
    },
    headerIcon:{
        marginVertical:15,
        alignSelf:'flex-end'
    },

    Button:{
    height:HIEGHT*0.15,
    width: WIDTH  -60,
    backgroundColor: MAIN_COLOR,
    borderRadius:9,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'white',
    flexDirection:'row',
    marginVertical:2,

        
    
    },
    ButtonText:{
        fontSize:25,
        color: 'white',
        fontWeight:'bold',
    },
    ButtonIcon:{
        marginTop: 8 ,
         marginHorizontal:5 ,
          color: '#fff'
    }
    
    });
