// import React, {Component} from 'react';
// import {View, Button, Platform,TouchableOpacity,Text} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
 
// export default class DatePicker extends Component {
//   state = {
//     date: new Date('2020-06-12T14:42:42'),
//     mode: 'date',
//     show: false,
//   }
 
//   setDate = (event, date) => {
//     date = date || this.state.date;
 
//     this.setState({
//       show: Platform.OS === 'ios' ? true : false,
//       date,
//     });
//   }
 
//   show = mode => {
//     this.setState({
//       show: true,
//       mode,
//     });
//   }
 
//   showDatepicker = () => {
//     this.show('date');
//   }
 
//   // showTimepicker = () => {
//   //   this.show('time');
//   // }
 
//   render() {
// // const { show, date, mode } = this.state;
 
// //     return (
// //       <View>
// //         <View onPress={this.showDatepicker}>
// //           {/* <Button onPress={this.showDatepicker} title="Show date picker!" /> */}
// //           <TouchableOpacity
// //           onPress={this.showDatepicker}
// //           >
// //             <Text>Date</Text>    
// //           </TouchableOpacity>

  
// //         </View>
// //         {/* <View>
// //           <Button onPress={this.showTimepicker} title="Show time picker!" />
// //         </View> */}
// //         { show && <DateTimePicker value={date}
// //                     mode={mode}
// //                     is24Hour={true}
// //                     display="default"
// //                     onChange={this.setDate} />
// //         }

// //       <View>{date}</View>
         
// //       </View>
// //     );
// //   }
// // }



import React, { useState } from "react";
import { Button, View ,Text} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from  'moment';
 
export default class DatePicker extends React.Component{

  constructor(props) {
    super(props);
  }
state= {
  isDatePickerVisible : false,
  chosenDate: '',
  }

  render(){ 
  const showDatePicker = () => {
    
    this.setState({isDatePickerVisible : true})
  };
 
  const hideDatePicker = () => {
 
    this.setState({isDatePickerVisible : false})
  };
 
  const handleConfirm = date => {
    console.warn("A date has been picked: ", date);
    this.setState({chosenDate: moment(date).format('DD MM YYYY')})
    hideDatePicker();
  };
 
  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={this.state.isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <Text>{this.state.chosenDate}</Text>
    </View>
  );
};
 
}