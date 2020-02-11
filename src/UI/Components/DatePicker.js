import React, {Component} from 'react';
import {View, Button, Platform,TouchableOpacity,Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
 
export default class DatePicker extends Component {
  state = {
    date: new Date('2020-06-12T14:42:42'),
    mode: 'date',
    show: false,
  }
 
  setDate = (event, date) => {
    date = date || this.state.date;
 
    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  }
 
  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  }
 
  showDatepicker = () => {
    this.show('date');
  }
 
  // showTimepicker = () => {
  //   this.show('time');
  // }
 
  render() {
    const { show, date, mode } = this.state;
 
    return (
      <View>
        <View onPress={this.showDatepicker}>
          {/* <Button onPress={this.showDatepicker} title="Show date picker!" /> */}
          <TouchableOpacity
          onPress={this.showDatepicker}
          >
            <Text>Date</Text>
          </TouchableOpacity>

  
        </View>
        {/* <View>
          <Button onPress={this.showTimepicker} title="Show time picker!" />
        </View> */}
        { show && <DateTimePicker value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={this.setDate} />
        }


         
      </View>
    );
  }
}