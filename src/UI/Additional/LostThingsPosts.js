

import React from 'react';
import {FlatList,ActivityIndicator,Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import axios from 'axios';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import {URL} from '../../../API/Defaults';
// import Modal from './src/UI/Components/Modal';

const MAIN_COLOR = '#b31605';


export default class LostThingsPosts extends React.Component{
  
    constructor(props){
        super(props);
        this.state={
        isloading: true,
        datasource:'',
        inforamation:[],
        ipAddress:'',
        Token:''

        }
    }
  
    
getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      console.log('Done Get Token')
      return value;
    } catch(e) {
        console.log("Somethimg went Wrong Get Token");
    }
  
  }   
      
      
    
    componentDidMount(){
        this.getToken().then((value)=>{
            console.log("GET Token : "+ value);
            this.setState({
                Token:value
            })
            
         axios.get(`${URL}/RoadAccedint`,{
                        headers :{
                        
                        'X-AUTH': `${this.state.Token}`
                        }
                    }).then(response=>{
                    console.log(response.data);
                    console.log(response.data.length);
                    console.log("Done");
                  
             
                    this.setState({
                        isloading: false,
                        datasource:response.data, 
                        
                    })
                   
                    
                }).catch(error =>{
                    console.log(error);
                    
                })
            })           
            }

        

          render()
         
          
          {
              if(this.state.isloading){
                  return(
                    <View style={{flex:1, padding:20, justifyContent:'center', alignItems:'center'}}>
                          
                    <ActivityIndicator size={"large"}/>
                    <Text style={{margin:10}}>Please check internet connection</Text>
                   </View>

                  )
              }
              return(
                <View style={{flex:1, paddingTop:20}}>
              
                <Text style={styles.headerText}>Lost Things </Text>
                
                    <FlatList
                        data={this.state.datasource}
                        renderItem={({item})=>  
                        <TouchableOpacity
                        
                        onPress={()=> this.props.navigation.navigate('Post Details',{item: item})
                                    
                                }
                        >
                        <Card title={item.childname}
                        // image={{uri: `${item.main_image_URL}`}}
                        // imageStyle={styles.cardImage}
                    >
                        <View style={styles.postContainer} >

                
                                <View style={styles.postText}>
                                    <Text style={styles.postText}>Age: <Text style={styles.innerPostText}>{item.information}</Text></Text>
                                    <Text style={styles.postText}>Gender: <Text style={styles.innerPostText}>{item.street}</Text></Text>
                                    {/* <Text style={styles.postText}>Phone: <Text style={styles.innerPostText}>{item.phone}</Text></Text> */}
                                    {/* <Text style={styles.postText}>Found Date: <Text style={styles.innerPostText}>{item.time}</Text></Text> */}
                                    <Text style={styles.postText}>City: <Text style={styles.innerPostText}>{item.city}</Text></Text>
                                    {/* <Text style={styles.postText}>Lost Date: <Text style={styles.innerPostText}>{item.time}</Text></Text>  */}
                                    {/* <Text style={styles.postText}>Description: <Text style={styles.innerPostText}>{item.descreption}</Text></Text> */}
                                </View>
                                <Image style={styles.postImage} source={{uri: `${item.photo_URL}`}}/>
                  
                  
                      </View>
                                         
                      <TouchableOpacity style={styles.IconContainer}
                            onPress={()=> console.warn("Icon Pressed")}
                            >
                            <Icon name='ban'
                                type='font-awesome'
                                size={23} 
                                iconStyle={styles.Icon}
                                
                            />
                            <Text style={{color:MAIN_COLOR ,marginLeft:3}}>report</Text>
                      </TouchableOpacity>
                                            </Card>
                                            </TouchableOpacity>
                                }
                        keyExtractor={item => item._id}
                            />
                        </View>
              )
          }      
    }
    
const styles =StyleSheet.create({
    postContainer :{
    
    flexDirection:'row',
   
    },
    headerText:{
        fontSize:20,
        marginHorizontal: 20,
        marginTop:-10,
        marginBottom:5,
        fontWeight: "bold",
        color: MAIN_COLOR,
        
    },
    postImage:{
        flex: 1,
        width: "100%",
        height: 200,
        resizeMode:  'contain',
         alignSelf:'flex-end',
         marginHorizontal:10,
         
      
    },
    postTextContainer:{
       
        alignItems:'flex-start',
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
    seeMore:{
        
        color:'gray',
        fontSize:15,
        marginTop:30,
    
    },
    cardImage:{
        resizeMode:"contain",
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    IconContainer:{
        justifyContent:'center',
        alignItems:'flex-start'
    },
    Icon:
    {
      marginHorizontal:9,
      color: MAIN_COLOR,
      alignSelf:'flex-start'
    }
    });
    
