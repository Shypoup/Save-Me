import React,{useState} from 'react';
import {View, StyleSheet,TextInput,Text,TouchableOpacity,Picker,Image} from 'react-native';
import axios from 'axios';
import UploadImage from '../Components/UploadImage';
// import uploadData from '../Components/UploadImage';
import FormData from 'form-data';
import ImagePicker from 'react-native-image-crop-picker';
import RNFetchBlob from 'rn-fetch-blob';
import {URL} from '../../../API/Defaults';

// let dataa=uploadData;

export default class CreateAcciedentPost extends React.Component{
    state={
        descreption:'',
        phone:'',
        city:'',
        photo:'',
    }

    render(){
    return (
       
      <View style ={styles.Container}>



        
    <Text style={styles.WelcomText} >Create Post</Text>
    
                <TouchableOpacity 
                    style={styles.TextinputContainer}
                    onPress={ async()=>
                        await  ImagePicker.openPicker({
                            multiple: true
                          }).then(images => {
                            console.log(images);
                            console.log(images[0].path);
                            
                            this.setState=({photo: images[0].path })
                                
                            
            
                          })
                    }
                    >
                    <Text style={styles.Text}>Select Photos</Text>
                    </TouchableOpacity>
                 
                 <TextInput 
                        style={styles.TextinputContainer} 
                        placeholder='Description' 
                        placeholderTextColor='#360f9a'
                        />

                 <TextInput 
                        style={styles.TextinputContainer} 
                        placeholder='Phone' 
                        placeholderTextColor='#360f9a'
                        />
                
               
      
 


        <TouchableOpacity style={styles.Button}

        
 onPress={ async ()=>{
    
    var bodyy = new FormData();
    bodyy.append('', this.state.photo);
    

    RNFetchBlob.fetch('POST', `${URL}/RoadAccedint`, {

        'Content-Type' : 'multipart/formdata',
        'X-AUTH': ` eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg0OGUxNTRiNDlmMzNiY2M2ZDhkYjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTg1ODYzNjk4fQ.o6ph_027WSz_bx8AK4YnRRxzPoLHcoTnZJP2FBwd7ys`
    }, [
        // part file from storage
        { name : '', filename : 'image', type:'image/jpeg', data: this.state.photo},
        {name:'information',data:`Hello`},
        {name:'city',data:`Cairo`},
        {name:'street',data:`Elbahr alazam`},
        
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
        

    

    </View>
  
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
        marginHorizontal:-2, 
    }
});
    
