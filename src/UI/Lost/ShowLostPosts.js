import React from 'react';
import {FlatList,ActivityIndicator,Text,View,Image,StyleSheet} from 'react-native';
import axios from 'axios';
import {URL,Token} from '../../../API/Defaults';
export default class LostPosts extends React.Component{
  
    constructor(props){
        super(props);
        this.state={
        isloading: true,
        datasource:'',
        inforamation:[],
        }
    }
    
   
    componentDidMount(){
        var obj;
         axios.get(`${URL}/LostPosts`,{
                        headers :{
                        'X-AUTH': `${Token}`
                    }
                    }).then(response=>{
                    console.log(response.data);
                    console.log(response.data.length);
                  
             
                    this.setState({
                        isloading: false,
                        datasource:response.data, 
                        
                    })
                   
                    
                }).catch(error =>{
                    // console.log(error);
                    
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
                        
              renderItem={({item})=><View> 
                  <View style={styles.postContainer}>
    
    <View style={styles.postText}>
    <Text style={styles.postText}>Name:<Text style={styles.innerPostText}> {item.childname}</Text></Text>
    <Text style={styles.postText}>Age: <Text style={styles.innerPostText}>9</Text></Text>
    <Text style={styles.postText}>Gender: <Text style={styles.innerPostText}>{item.Gender}</Text></Text>
    <Text style={styles.postText}>Phone: <Text style={styles.innerPostText}>{item.phone}</Text></Text>
    <Text style={styles.postText}>Lost Date: <Text style={styles.innerPostText}>{item.time}</Text></Text> 
    {/* <TouchableOpacity
      onPress={() =>props.navigation.navigate('LostDetail')}
    >
        <Text style={styles.seeMore}   >See More </Text>
    </TouchableOpacity> */}
    
    </View>
    <Image style={styles.postImage} source={{uri: `${item.main_image_URL}`}}/>
    </View> 
           
                   </View>
                  }
                        keyExtractor={item => item._id}
                        />
                    </View>
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
    alignItems:'flex-start',
    },
    headerText:{
        fontSize:20,
        marginHorizontal: 20,
        marginTop:-10,
        marginBottom:5,
        fontWeight: "bold",
        color: '#360f6f',
        //fontStyle: 'italic',
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
    
