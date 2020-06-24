//Import default Packages & COmponents
import React from 'react';
import {View, StyleSheet,TextInput,Text,TouchableOpacity,Picker,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from '@react-native-community/async-storage';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from  'moment';

// imoprt Reusable Components
import {URL} from '../../../API/Defaults';

const MAIN_COLOR = '#b31605';




export default class CreateFoundPost extends React.Component{

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
      selectPhotoTapped() {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true,
          },
        };
    
        ImagePicker.showImagePicker(options, response => {
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            let source = {uri: response.uri};
            alert("Photo Uploaded");
             this.state.imagename= response.fileName;
             this.state.image_path=response.path;
             this.state.image_type = response.type;
             this.state.data = response.data;
            
            this.setState({
              avatarSource: source,
            });
          }
        });
    }
    /***********End Of Image Picker Package  */




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
                        returnKeyType = { "next" }
                        onSubmitEditing={() => { this.Age.focus(); }}
                        blurOnSubmit={false}
                        placeholder='Name' 
                        placeholderTextColor={MAIN_COLOR}
                        value={this.state.name}
                        onChangeText={name => this.setState({name})}
                        
                        />

                    <TextInput 
                        style={styles.TextinputContainer}
                        style={styles.TextinputContainer}
                        ref={ref => {this.Age = ref;}} 
                        returnKeyType = { "next" }
                        onSubmitEditing={() => { this.Description.focus(); }}
                        blurOnSubmit={false}
                        placeholder='Age' placeholderTextColor={MAIN_COLOR}
                        value={this.state.age}
                        onChangeText={age => this.setState({age})}
                        />

                        
                    

                    <TextInput 
                        style={styles.TextinputContainer}
                        ref={ref => {this.Description = ref; }} 
                        returnKeyType = { "next" }
                        onSubmitEditing={() => { this.Phone.focus(); }}
                        blurOnSubmit={false} 
                        placeholder='Description' 
                        placeholderTextColor={MAIN_COLOR}
                        value={this.state.description}
                        onChangeText={description => this.setState({description})}
                        />

                    <TextInput 
                        style={styles.TextinputContainer} 
                        ref={(input) => { this.Phone = input; }} 
                        placeholder='Phone' 
                        placeholderTextColor={MAIN_COLOR}
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
                        selectedValue={this.state.gender}
                        onValueChange={(itemValue) => this.setState({gender:itemValue})}
                        >
                        <Picker.Item  label="Select a Gender " value="0"/>
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female"/>
                        </Picker>
                    </View>



                    {/* Date Picker  */}

                    <View style={styles.PickerContainer}>
                        <View style={styles.Text} onPress={this.showDatePicker}>
                        
                        <TouchableOpacity
                        onPress={this.showDatePicker}
                        >
                         
                       
                         {this.state.chosenDate == '' ?<Text style={styles.Text} >Date</Text> :   <Text style={styles.Text}>{this.state.chosenDate}</Text>}
                        </TouchableOpacity>

                
                        </View>
                        
                                  



                        
                    </View>
                    
                    <DateTimePickerModal
                                isVisible={this.state.isDatePickerVisible}
                                mode="date"
                                onConfirm={this.handleConfirm}
                                onCancel={this.hideDatePicker}
                            /> 
                                
                  
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
                            if(this.clickme()){
                                alert("Please Fill all Fields");
                            }else{

                            
                            
                            RNFetchBlob.fetch('POST', `${URL}/lost`, {
                    
                                'Content-Type' : 'multipart/formdata',
                                'X-AUTH': `${this.state.Token}`
                            }, [
                                // part file from storage
                                { name : '', filename : this.state.imagename, type:this.image_type, data: RNFetchBlob.wrap(this.state.image_path)},
                                {name:'childname',data:`${this.state.name}`},
                                {name:'age',data:`${this.state.age}`},
                                {name:'descreption',data:`${this.state.description}`},
                                {name:'phone',data:`${this.state.phone}`},
                                {name:'gender',data:`${this.state.gender}`},
                                {name:'time',data:`${this.state.chosenDate}`},
                                {name:'city',data:`${this.state.city}`},
                                
                                
                                

                        
                                // elements without property filename will be sent as plain text
                            ]).then((resp) => {
                                console.log(resp);     // ...
                                this.props.navigation.navigate('Home');
                            }).catch((err) => {
                                console.log(err);
                                
                            })
                            
                    }  
                        
                            
                                

                    
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
        color:MAIN_COLOR,
        fontSize : 28,
       alignSelf:'center',
       margin:20,
       
    },
    TextinputContainer:{
        borderBottomWidth: 1,
        //borderRadius : 25,
        //borderWidth: 2,
        borderColor: MAIN_COLOR,
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
        backgroundColor: MAIN_COLOR,
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
        color:MAIN_COLOR,
    },
    validationText:{
        color:MAIN_COLOR,
        marginTop: -9,
        marginHorizontal:40,
    },
    Picker:{
        borderBottomWidth: 2,
        borderColor: MAIN_COLOR,
        flexDirection:'row',
        paddingHorizontal:30,
        marginVertical:10,
        color:MAIN_COLOR,
        
    },
    PickerContainer:{
        borderBottomWidth: 1,
        borderColor: MAIN_COLOR,
        paddingBottom: -2,
      
    },

    Text:
    {
        color: MAIN_COLOR,
        marginVertical:10, 
        marginHorizontal:10, 
    }
});
