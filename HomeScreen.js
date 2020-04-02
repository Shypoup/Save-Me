import React from 'react';
import {FlatList,ActivityIndicator,Text,View,Image,StyleSheet} from 'react-native';
import axios from 'axios';
import {URL,Token} from './API/Defaults';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

import AsyncStorage from '@react-native-community/async-storage';

import Modal from './src/UI/Components/Modal';


export default class HomeScreen extends React.Component{
  
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
            
         axios.get(`${URL}/FoundPosts`,{
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
                      <View style={{flex:1, padding:20}}>
                          <ActivityIndicator/>
                      </View>

                  )
              }
              return(
                <View style={{flex:1, paddingTop:20}}>
              
                <Text style={styles.headerText}>Found Posts </Text>
                
                    <FlatList
                        data={this.state.datasource}
                        
              renderItem={({item})=>  <Card title={item.name}
                        // image={{uri: `${item.main_image_URL}`}}
              >
                     <View style={styles.postContainer}>

              
                            <View style={styles.postText}>
                                <Text style={styles.postText}>Age: <Text style={styles.innerPostText}>{item.age}</Text></Text>
                                <Text style={styles.postText}>Gender: <Text style={styles.innerPostText}>{item.gender}</Text></Text>
                                {/* <Text style={styles.postText}>Phone: <Text style={styles.innerPostText}>{item.phone}</Text></Text> */}
                                <Text style={styles.postText}>Found Date: <Text style={styles.innerPostText}>{item.time}</Text></Text>
                                <Text style={styles.postText}>City: <Text style={styles.innerPostText}>{item.city}</Text></Text>
                                {/* <Text style={styles.postText}>Lost Date: <Text style={styles.innerPostText}>{item.time}</Text></Text>  */}
                                {/* <Text style={styles.postText}>Description: <Text style={styles.innerPostText}>{item.descreption}</Text></Text> */}
                            </View>
                            <Image style={styles.postImage} source={{uri: `${item.main_image_URL}`}}/>
                   </View>
                                         </Card>
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
        color: '#360f6f',
        
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
    
