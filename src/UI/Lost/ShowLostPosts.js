// import React from 'react';
// import {FlatList,ActivityIndicator,Text,View,Image,StyleSheet} from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
// import {URL} from '../../../API/Defaults';



// export default class LostPosts extends React.Component{
  
//     constructor(props){
//         super(props);
//         this.state={
//         isloading: true,
//         datasource:'',
//         Token:''
//         }
//     }
          
// getToken = async () => {
//     try {
//       const value = await AsyncStorage.getItem('token')
//       console.log('Done Get Token')
//       return value;
//     } catch(e) {
//         console.log("Somethimg went Wrong Get Token");
//     }
  
//   }     
    
//     componentDidMount(){
//         this.getToken().then((value)=>{
//             console.log("GET Token : "+ value);
//             this.setState({
//                 Token:value
//             })
//          axios.get(`${URL}/LostPosts`,{
//                         headers :{
//                         'X-AUTH': `${this.state.Token}`
//                     }
//                     }).then(response=>{
//                     console.log(response.data);
//                     console.log(response.data.length);
                  
             
//                     this.setState({
//                         isloading: false,
//                         datasource:response.data, 
                        
//                     })
                   
                    
//                 }).catch(error =>{
//                     console.log(error);
                    
//                 })
                   
//                 }
//         )}



//           render()
         
          
//           {
//             //   if(this.state.isloading){
//             //       return(
//             //           <View style={{flex:1, padding:20}}>
                          
//             //               <ActivityIndicator/>
//             //           </View>

//             //       )
              
//               return(
//                 <View style={{flex:1, paddingTop:20}}>
              
//                 <Text style={styles.headerText}>Lost Posts </Text>
                
//                     <FlatList
//                         data={this.state.datasource}
                        
//               renderItem={({item})=><TouchableOpacity
//               onPress={()=>console.warn("Pressed")}
//               >
              
//               <View> 
//                   <View style={styles.postContainer}>
    
//     <View style={styles.postText}>
//     <Text style={styles.postText}>Name:<Text style={styles.innerPostText}> {item.childname}</Text></Text>
//               <Text style={styles.postText}>Age: <Text style={styles.innerPostText}>{item.age}</Text></Text>
//     <Text style={styles.postText}>Gender: <Text style={styles.innerPostText}>{item.gender}</Text></Text>
//     <Text style={styles.postText}>Phone: <Text style={styles.innerPostText}>{item.phone}</Text></Text>
//     <Text style={styles.postText}>Lost Date: <Text style={styles.innerPostText}>{item.time}</Text></Text> 
//     {/* <TouchableOpacity
//       onPress={() =>props.navigation.navigate('LostDetail')}
//     >
//         <Text style={styles.seeMore}   >See More </Text>
//     </TouchableOpacity> */}
    
//     </View>
//     <Image style={styles.postImage} source={{uri: `${item.main_image_URL}`}}/>
//     </View> 
           
//                    </View>
//                    </TouchableOpacity>
//                   }
//                         keyExtractor={item => item._id}
//                         />
//                     </View>
                    
//               )
//           }      
//     }
    
// const styles =StyleSheet.create({
//     postContainer :{
//     marginHorizontal: 20,
//     marginVertical:5,
//     flexDirection:'row',
//     borderWidth : 0.3,
//     borderColor: '#360f9a',
//     borderRadius:9,
//     alignItems:'flex-start',
//     backgroundColor:'white'
//     },
//     headerText:{
//         fontSize:20,
//         marginHorizontal: 20,
//         marginTop:-10,
//         marginBottom:5,
//         fontWeight: "bold",
//         color: '#360f6f',
//         //fontStyle: 'italic',
//     },
//     postImage:{
//         flex: 1,
//         width: 200,
//         height: 200,
//         resizeMode:  'contain',
//          alignSelf:'flex-end',
//          marginHorizontal:10,
         
      
//     },
//     postTextContainer:{
//         // alignSelf:'flex-start',
//         alignItems:'flex-start',
//         flex:1,
        
//     },
//     postText:{
//         color: '#360f9a',
//         fontSize:16,
//         marginVertical:5,
//         marginHorizontal:5,
    
//     },
//     innerPostText:{
//         color: '#000',
//         fontSize:15,
    
//     },
//     seeMore:{
        
//         color:'gray',
//         fontSize:15,
//         marginTop:30,
    
//     }
//     });
    



import React from 'react';
import {FlatList,ActivityIndicator,Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import axios from 'axios';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import {URL} from '../../../API/Defaults';
// import Modal from './src/UI/Components/Modal';



export default class ShowLostPosts extends React.Component{
  
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
            
         axios.get(`${URL}/LostPosts`,{
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
              
                <Text style={styles.headerText}>Lost Posts </Text>
                
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
                                         
                      <TouchableOpacity style={styles.IconContainer}
                            onPress={()=> console.warn("Icon Pressed")}
                            >
                            <Icon name='ban'
                                type='font-awesome'
                                size={23} 
                                iconStyle={styles.Icon}
                                
                            />
                            <Text style={{color:'#360f6f' ,marginLeft:3}}>report</Text>
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
      color: '#360f9a',
      alignSelf:'flex-start'
    }
    });
    
