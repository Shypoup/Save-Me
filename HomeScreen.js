import React from 'react';
import {View, StyleSheet,Text,TouchableOpacity} from 'react-native';
import PhotoUpload from 'react-native-photo-upload';
import LostPost from './src/UI/Components/LostPost';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

class HomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
        firstName:" ",
        lastName:" ",
        mail:" ",
        phone:" ",
        address:" ",
        bloodType:" ",
        firstTrusted:" ",
        secondTrusted:" ",
        thirdTrusted:" ",
    };
}
 
// componentDidMount(){
// axios.get('http://192.168.1.8:3000/LostPosts',{
//   headers: {
//     'X-AUTH': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTU1NjQ3ZTdjZmUyMTA4NjAzM2E4MDMiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTgyNjU0NjE5fQ.fsa8nxL1YzLhXFpQMJPcfgeiOeE2K2fCLHDQNJ2Yidg"
               
// }
// }).then(response=>{
// console.log(response.data);

// }).catch(error =>{
// console.log(error);

// });
// }

  render(){
  return (
     
    <ScrollView>
    <View>
    <Text style={{fontSize:20,
    marginHorizontal: 20,
    marginVertical:10, color:"#360f9a"}}>Home</Text>

      <TouchableOpacity
      onPress={() =>this.props.navigation.navigate('other')}
    >
        <Text style={{marginHorizontal:15,marginVertical:7,}}   > More </Text>
    </TouchableOpacity>

    <LostPost 
    Name="Hesham Gamal" 
    ImageSource={require('./src/UI/Components/hesham2.jpg')}
    Age={9}
    City='Cairo'
    LostDate='20/1/2020'
    />   
    <LostPost 
    Name="Hesham Gamal" 
    ImageSource={require('./src/UI/Components/hesham2.jpg')}
    Age={9}
    City='Cairo'
    LostDate='20/1/2020'
    />   
    <LostPost 
    Name="Hesham Gamal" 
    ImageSource={require('./src/UI/Components/hesham2.jpg')}
    Age={9}
    City='Cairo'
    LostDate='20/1/2020'
    />   

    <LostPost 
    Name="Hesham Gamal" 
    ImageSource={require('./src/UI/Components/hesham2.jpg')}
    Age={9}
    City='Cairo'
    LostDate='20/1/2020'
    />   
    <LostPost 
    Name="Hesham Gamal" 
    ImageSource={require('./src/UI/Components/hesham2.jpg')}
    Age={9}
    City='Cairo'
    LostDate='20/1/2020'
    />   
    <LostPost 
    Name="Hesham Gamal" 
    ImageSource={require('./src/UI/Components/hesham2.jpg')}
    Age={9}
    City='Cairo'
    LostDate='20/1/2020'
    />   

<LostPost 
    Name="Hesham Gamal" 
    ImageSource={require('./src/UI/Components/hesham2.jpg')}
    Age={9}
    City='Cairo'
    LostDate='20/1/2020'
    />   
    <LostPost 
    Name="Hesham Gamal" 
    ImageSource={require('./src/UI/Components/hesham2.jpg')}
    Age={9}
    City='Cairo'
    LostDate='20/1/2020'
    />   
    <LostPost 
    Name="Hesham Gamal" 
    ImageSource={require('./src/UI/Components/hesham2.jpg')}
    Age={9}
    City='Cairo'
    LostDate='20/1/2020'
    />   

<LostPost 
    Name="Hesham Gamal" 
    ImageSource={require('./src/UI/Components/hesham2.jpg')}
    Age={9}
    City='Cairo'
    LostDate='20/1/2020'
    />   


    
    
    </View>
    </ScrollView>
  )
}
}

    
export default HomeScreen;