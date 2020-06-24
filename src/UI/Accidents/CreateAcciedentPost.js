// import React,{useState} from 'react';
// import {View, StyleSheet,TextInput,Text,TouchableOpacity,Picker,Image} from 'react-native';
// import axios from 'axios';
// import UploadImage from '../Components/UploadImage';
// // import uploadData from '../Components/UploadImage';
// import FormData from 'form-data';
// import ImagePicker from 'react-native-image-crop-picker';
// import RNFetchBlob from 'rn-fetch-blob';
// import {URL} from '../../../API/Defaults';

// // let dataa=uploadData;

// export default class CreateAcciedentPost extends React.Component{
//     state={
//         descreption:'',
//         phone:'',
//         city:'',
//         photo:'',
//     }

//     render(){
//     return (
       
//       <View style ={styles.Container}>



        
//     <Text style={styles.WelcomText} >Create Post</Text>
    
//                 <TouchableOpacity 
//                     style={styles.TextinputContainer}
//                     onPress={ async()=>
//                         await  ImagePicker.openPicker({
//                             multiple: true
//                           }).then(images => {
//                             console.log(images);
//                             console.log(images[0].path);
                            
//                             this.setState=({photo: images[0].path })
                                
                            
            
//                           })
//                     }
//                     >
//                     <Text style={styles.Text}>Select Photos</Text>
//                     </TouchableOpacity>
                 
//                  <TextInput 
//                         style={styles.TextinputContainer} 
//                         placeholder='Description' 
//                         placeholderTextColor='#360f9a'
//                         />

//                  <TextInput 
//                         style={styles.TextinputContainer} 
//                         placeholder='Phone' 
//                         placeholderTextColor='#360f9a'
//                         />
                
               
      
 


//         <TouchableOpacity style={styles.Button}

        
//  onPress={ async ()=>{
    
//     var bodyy = new FormData();
//     bodyy.append('', this.state.photo);
    

//     RNFetchBlob.fetch('POST', `${URL}/RoadAccedint`, {

//         'Content-Type' : 'multipart/formdata',
//         'X-AUTH': ` eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg0OGUxNTRiNDlmMzNiY2M2ZDhkYjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg1ODYzNjk4fQ.o6ph_027WSz_bx8AK4YnRRxzPoLHcoTnZJP2FBwd7ys`
//     }, [
//         // part file from storage
//         { name : '', filename : 'image', type:'image/jpeg', data: this.state.photo},
//         {name:'information',data:`Hello`},
//         {name:'city',data:`Cairo`},
//         {name:'street',data:`Elbahr alazam`},
        
//         // elements without property filename will be sent as plain text
//     ]).then((resp) => {
//         console.log(resp);     // ...
//         this.props.navigation.navigate('Home');
//     }).catch((err) => {
//         console.log(err);
        
//     })
    
// }  

    
        


// }

    
//       >
//             <Text  style={styles.ButtonText}>Post</Text>
//         </TouchableOpacity>
        

    

//     </View>
  
//   )
// }
// }
// const styles =StyleSheet.create({
//     Container:{
//         marginHorizontal: 50,
//     },
    
//     WelcomText:{
//         color:'#360f9a',
//         fontSize : 28,
//        alignSelf:'center',
//        margin:20,
       
//     },
//     TextinputContainer:{
//         borderBottomWidth: 1,
//         //borderRadius : 25,
//         //borderWidth: 2,
//         borderColor: '#360f9a',
//         flexDirection:'row',
        
//         paddingHorizontal:20,
//         marginVertical:10,
        
//     },
//     Textinput :{
      
//         fontSize : 15,
//         color : '#000',
        
       
//     },
//     Icon:{
//         fontSize: 40, 
//     },
//     Button:{
//         borderRadius : 25,
//         backgroundColor: '#360f9a',
//         marginVertical:20,

//     },
//     ButtonText:{
//         fontSize:30,
//         color:'white',
//         alignSelf:'center',
//         fontFamily:'sans-serif-condensed',
//         marginVertical:5,
//     },
//     CreateAccountContainer:{
//         flexDirection:'row',
//         alignContent:'center',
//         marginHorizontal: 40,
        
//     },
//     createTextNormal:{
//         fontSize:15,
//     },
//     createTextColored:{
//         fontSize:15,
//         color:'#360f9a',
//     },
//     validationText:{
//         color:'#360f9a',
//         marginTop: -9,
//         marginHorizontal:40,
//     },
//     Picker:{
//         borderBottomWidth: 2,
//         borderColor: '#360f9a',
//         flexDirection:'row',
//         paddingHorizontal:30,
//         marginVertical:10,
//         color:'#360f9a',
        
//     },
//     PickerContainer:{
//         borderBottomWidth: 1,
//         borderColor: '#360f9a',
//         paddingBottom: -2,
//     },
//     Text:
//     {
//         color: '#360f9a',
//         marginVertical:10, 
//         marginHorizontal:-2, 
//     }
// });
    



//Import default Packages & COmponents
import React from 'react';
import {View, StyleSheet,TextInput,Text,TouchableOpacity,Picker,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from '@react-native-community/async-storage';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from  'moment';

// imoprt Reusable Components
import {URL} from '../../../API/Defaults';






export default class CreateAcciedentPost extends React.Component{

    state = {
        //data
         name:'',
         age:'',
         lostDate:'',
         description:'',
         phone:'',
         city:'0',
         gender:'0',



         //Date Picker
         isDatePickerVisible : false,
         chosenDate: '',
         

        // Image Picker
        avatarSource: null, 
        imagename:null,
        image_path:null,
        image_type:null,
        finished: false,
        images:[],
        images:'',

        //Token 
        Token:'',
        
      };
    
      constructor(props) {
        super(props);
    
        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
      
      }
      


      //Get Token 
      getToken = async () => {
        try {
          const value = await AsyncStorage.getItem('token')
          console.log('Done Get Token')
          return value;
        } catch(e) {
            console.log("Somethimg went Wrong Get Token");
        }
      
      }  

 //Picker
 clickme=()=>{
    var name =this.state.name;
    var age=this.state.age;
    var des=this.state.description;
    var img=this.state.image_path;
    var time=this.state.chosenDate;
    var genderSelect = this.state.gender;
    var citySelect=this.state.city;
    
    if(name=="" || age=="" || des=="" || img=="" || genderSelect=="0" || citySelect=="0" || time==""){
       
        return true;
    }else{
        return false;
    }
    
}








/*********************Date Picker */
 showDatePicker = () => {
    
    this.setState({isDatePickerVisible : true})
  };
 
  hideDatePicker = () => {
    this.setState({isDatePickerVisible : false})
  };
 
   handleConfirm = date => {
    // console.warn("A date has been picked: ", date);
    this.setState({chosenDate: moment(date).format('DD/MM/YYYY')})
    this.hideDatePicker();
  };
 


 /***********Image Picker Package  */
    async  selectPhotoTapped() {
        // const options = {
        //   quality: 1.0,
        //   maxWidth: 500,
        //   maxHeight: 500,
        //   storageOptions: {
        //     skipBackup: true,
        //   },
        // ImagePicker.openPicker({
        //     // width: 300,
        //     // height: 400,
        //     multiple: true,
        //     mediaType: "video",
        //     mediaType:"image ",
        //     // cropping: true
        //   }).then(images => {
        //     console.log(images);
        //     console.log(images[0].height);
            
        //     this.setState({image_path:images[0].path , imagename:`Image${Math.random()*1000}` , imagesArray:this.state.imagesArray.push(images[0].path,2)})
        //     console.log("This.state :" +this.state.imagesArray)

        //   })

    // const x=     await ImagePicker.openCamera({
    //         // width: 300,
    //         // height: 400,
    //         multiple: true,
    //         // mediaType: "video",

            
    //         // mediaType:"image ",
    //         // cropping: true
    //       }).then(image => {
    //         console.log(image);
    //         // console.log(images[0].height);
            
    //         this.setState({image_path:image.path , imagename:`Image${Math.random()*1000}` , image_type :image.mime })
    //         console.log("This.state :" +this.state.image_path)

    //       });

     
    ImagePicker.openPicker({
        multiple: true,
        waitAnimationEnd: false,
        // includeExif: true,
        forceJpg: true,
        maxFiles: 5,
        compressImageQuality: 0.8,
        mediaType: 'photo'
      }).then(images => {
        this.setState({
          image: null,
          images: images.map(i => {
            console.log('received image', i);
            return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
          })
        });
        console.log( this.state.images)
      }).catch(e => alert(e));
    
        

    /***********End Of Image Picker Package  */



        }
    componentDidMount(){
        this.getToken().then((value)=>{
            console.log("GET Token : "+ value);
            this.setState({
                Token:value
            })
      
       
    
})
    }    

    render(){
        const { show, date, mode } = this.state;
    return (
       <ScrollView>
      <View style ={styles.Container}>
          

              <Text style={styles.WelcomText} > Lost Post</Text>
                    
                
                        
                    

                    <TextInput 
                        style={styles.TextinputContainer}
                        ref={ref => {this.Description = ref; }} 
                        returnKeyType = { "next" }
                        onSubmitEditing={() => { this.Phone.focus(); }}
                        blurOnSubmit={false} 
                        placeholder='Description' 
                        placeholderTextColor='#360f9a'
                        value={this.state.description}
                        onChangeText={description => this.setState({description})}
                        />

                    <TextInput 
                        style={styles.TextinputContainer} 
                        ref={(input) => { this.Phone = input; }} 
                        placeholder='Phone' 
                        placeholderTextColor='#360f9a' 
                        textContentType='telephoneNumber'
                        keyboardType='numeric'
                        value={this.state.phone}
                        onChangeText={phone => this.setState({phone})}
                        />

                    
                     {/* Select An Image */}
                     <View style={styles.TextinputContainer} >
                        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                        <View 
                        >
                            {this.state.avatarSource === null ? (
                            <Text style={styles.Text}>Select a Photo</Text>
                            ) : (
                            <Image  source={this.state.avatarSource} />
                            )}
                            {this.state.imagename !=null  ? <Text Text style={styles.Text}>{this.state.imagename}</Text>: null }

                        </View>
                        </TouchableOpacity>
                        </View>
                    {/* End Select An Image */}

               


                
                        
                                  



                        
                  
                    
                   
                  
                        <View style={styles.PickerContainer}>
                    <Picker
                        style={styles.Picker}
                        selectedValue={this.state.city}
                        onValueChange={(itemValue) => this.setState({city:itemValue})}
                        >
                        <Picker.Item label="Select a city " value="0"/>
                        <Picker.Item label="Cairo" value="Cairo" />
                        <Picker.Item label="Giza" value="Giza"/>
                        <Picker.Item label="Alex" value="Alex" />
                        <Picker.Item label="Ismailia" value="Ismailia"/>
                        <Picker.Item label="Port Said" value="Port Said" />
                        <Picker.Item label="Suez" value="Suez"/>
                        <Picker.Item label="El Mahalla El Kubra" value="El Mahalla El Kubra"/>
                        <Picker.Item label="Luxor" value="Luxor"/>
                        <Picker.Item label="Mansoura" value="Mansoura"/>
                        <Picker.Item label="Tanta" value="Tanta"/>
                        <Picker.Item label="Asyut" value="Asyut"/>
                        <Picker.Item label="Faiyum" value="Faiyum"/>
                        <Picker.Item label="Damietta" value="Damietta"/>
                        <Picker.Item label="Aswan" value="Aswan"/>
                        <Picker.Item label="Minya" value="Minya"/>
                        <Picker.Item label="Damanhur" value="Damanhur"/>
                        <Picker.Item label="Beni Suef" value="Beni Suef"/>
                        <Picker.Item label="Hurghada" value="Hurghada"/>
                        <Picker.Item label="Qena" value="Qena"/>
                        <Picker.Item label="Sohag" value="Sohag"/>
                        <Picker.Item label="Arish" value="Arish"/>
                        <Picker.Item label="Banha" value="Banha"/>
                        </Picker>
                    </View>
                    
                            

                  








                        

                        <TouchableOpacity style={styles.Button}
                        
                        onPress={()=>{
                            // if(this.clickme()){
                            //     alert("Please Fill all Fields");
                            // }else{

                            
                            
                            RNFetchBlob.fetch('POST', `${URL}/RoadAccedint`, {
                    
                                'Content-Type' : 'multipart/formdata',
                                'X-AUTH': `${this.state.Token}`
                            }, [
                                // part file from storage
                                { name : '', filename : this.state.imagename, type:this.state.image_type, data: RNFetchBlob.wrap(this.state.image_path)},
                                
                                // {name:'descreption',data:`${this.state.description}`},
                                // {name:'phone',data:`${this.state.phone}`},
                                // {name:'gender',data:`${this.state.gender}`},
                                // {name:'time',data:`${this.state.chosenDate}`},
                                // {name:'city',data:`${this.state.city}`},
                                   {name:'information',data:`Test`},
                                   {name:'city',data:`Test`},
                                   {name:'street',data:`Test`},
                                   
                                
                                
                                

                        
                                // elements without property filename will be sent as plain text
                            ]).then((resp) => {
                                console.log(resp);     // ...
                                this.props.navigation.navigate('Home');
                            }).catch((err) => {
                                console.log(err);
                                
                            })
                            
                    }  
                        
                            
                                

                    
                    }
                        
                        
                
                        >
                            <Text  style={styles.ButtonText}>Post</Text>
                        </TouchableOpacity>
                        

                        {/* <DatePicker /> */}

                        

                    </View>
                    </ScrollView>
  )
}
}







const styles =StyleSheet.create({
    Container:{
        marginHorizontal: 50,
    },
    
    WelcomText:{
        color:'#360f9a',
        fontSize : 28,
       alignSelf:'center',
       margin:20,
       
    },
    TextinputContainer:{
        borderBottomWidth: 1,
        //borderRadius : 25,
        //borderWidth: 2,
        borderColor: '#360f9a',
        flexDirection:'row',
        
        paddingHorizontal:20,
        marginVertical:10,
        
    },
    Textinput :{
      
        fontSize : 15,
        color : '#000',
        
       
    },
    Icon:{
        fontSize: 40, 
    },
    Button:{
        borderRadius : 25,
        backgroundColor: '#360f9a',
        marginVertical:20,

    },
    ButtonText:{
        fontSize:30,
        color:'white',
        alignSelf:'center',
        fontFamily:'sans-serif-condensed',
        marginVertical:5,
    },
    CreateAccountContainer:{
        flexDirection:'row',
        alignContent:'center',
        marginHorizontal: 40,
        
    },
    createTextNormal:{
        fontSize:15,
    },
    createTextColored:{
        fontSize:15,
        color:'#360f9a',
    },
    validationText:{
        color:'#360f9a',
        marginTop: -9,
        marginHorizontal:40,
    },
    Picker:{
        borderBottomWidth: 2,
        borderColor: '#360f9a',
        flexDirection:'row',
        paddingHorizontal:30,
        marginVertical:10,
        color:'#360f9a',
        
    },
    PickerContainer:{
        borderBottomWidth: 1,
        borderColor: '#360f9a',
        paddingBottom: -2,
      
    },

    Text:
    {
        color: '#360f9a',
        marginVertical:10, 
        marginHorizontal:10, 
    }
});

