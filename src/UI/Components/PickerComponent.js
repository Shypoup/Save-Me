import React from 'react';
import {
  StyleSheet,
  Text,
  View,Button,Picker
} from 'react-native';


const PickerComponent =()=> {
	
		this.state={
			PickerValue:''
			
		}
		

	clickme=()=>{
		var data = this.state.PickerValue;
		if(data==""){
			alert("Please Select a Option");
		}else{
			alert(data);
		}
		
	}
  
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Screen 1
        </Text>
		<Picker
		style={{width:'80%'}}
		selectedValue={this.state.PickerValue}
		onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
		>
		<Picker.Item label="Select a option" value=""/>
		<Picker.Item label="Html" value="html" />
		<Picker.Item label="Javascript" value="javascript"/>
		</Picker>
		<Button title="Click me" onPress={this.clickme}/>
        
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#360f9a',
    marginBottom: 5,
  },
});

export default PickerComponent;
