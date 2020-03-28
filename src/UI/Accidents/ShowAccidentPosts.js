import React from 'react';
import {FlatList,ActivityIndicator,Text,View,Image,StyleSheet} from 'react-native';
import axios from 'axios';
import {URL,Token} from '../../../API/Defaults';
export default class AccidentsPosts extends React.Component{
  
    constructor(props){
        super(props);
        this.state={
        isloading: true,
        datasource:'',
        Token:'',
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
                  
                   
                    console.log();
                    console.log();
                    this.setState({
                        isloading: false,
                        datasource:response.data, 
                        
                    })
                    
                }).catch(error =>{
                    console.log(error);
                    
                })
                   
                }
        )}


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
               
            
                    <FlatList
                        data={this.state.datasource}
                        renderItem={({item})=><View> 
                   <View style={styles.postContainer}>
    
                    <View style={styles.postText}>
                    <Text style={styles.postText}>Description:</Text>
                    <Text style={styles.innerPostText}> {item.inforamation}</Text>
                    

                    {/* <TouchableOpacity
                    onPress={() =>props.navigation.navigate('LostDetail')}
                    >
                        <Text style={styles.seeMore}   >See More </Text>
                    </TouchableOpacity> */}
                    
                    </View>
                    <View style={styles.ImageContainer}>
                    <Image style={styles.postImage} source={{uri: `${item.photo_URL}`}}/>
                    </View>
                    </View> 
                              
                                </View>
                                }
                                keyExtractor={item => item._id}
                                        />
                                    
              )
          }      
    }
    
const styles =StyleSheet.create({
    postContainer :{
    marginHorizontal: 20,
    marginVertical:5,
    flexDirection:'row',
    borderWidth : 0.3,
    borderColor: '#360f9a',
    borderRadius:9,
    alignItems:'stretch',
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
        flex:1,
        
    },
    postText:{
        color: '#360f9a',
        fontSize:16,
        marginVertical:5,
        marginHorizontal:5,
        alignSelf:'flex-start'
    
    },
    innerPostText:{
        color: '#000',
        fontSize:15,
        width:150,
    
    },
    ImageContainer:{
        alignSelf:'flex-end',
    },
    seeMore:{
        
        color:'gray',
        fontSize:15,
        marginTop:30,
    
    }
    });
    
