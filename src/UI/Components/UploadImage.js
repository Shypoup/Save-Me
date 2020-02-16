
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class App extends React.Component {
  state = {
    avatarSource: null,
    videoSource: null,
    imagename:null,
  };

  constructor(props) {
    super(props);

    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
  
  }

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
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        //let source = {uri: response.uri};
        alert("Photo Uploaded");
         this.state.imagename= response.fileName;
        // You can also display the image using data:
        let source = { uri: 'data:image/jpeg;base64,' + response.data };
        console.log(this.state.imagename);
        this.setState({
          avatarSource: source,
        });
      }
    });
  }



  render() {
    return (
      <View style={styles.Container} >
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
    );
  }
 
}

const styles=StyleSheet.create({

    Container:{
        borderBottomWidth: 1,
        color: '#360f9a',
        borderColor: '#360f9a',
        flexDirection:'row',
       marginVertical:20,
        
    },
    Text:
    {
        color: '#360f9a',
        marginVertical:10, 
        marginHorizontal:10, 
    }
});