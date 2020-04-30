// import React, { Component, useState } from "react";
// import {
//   Alert,
//   Modal,
//   StyleSheet,
//   Text,
//   TouchableHighlight,
//   View
// } from "react-native";

// const ModalShow = (navigation ) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             <TouchableHighlight
//               style={styles.options}
//               onPress={() => {
//                 console.warn("Modal Works !!!!!")
//               }}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </TouchableHighlight>
//             <TouchableHighlight
//               style={styles.options}
//               onPress={() => {
//                 setModalVisible(!modalVisible);
//               }}
//             >
//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </TouchableHighlight>
//           </View>
//         </View>
//       </Modal>

//       <TouchableHighlight
//         style={styles.openButton}
//         onPress={() => {
//           setModalVisible(true);
//         }}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </TouchableHighlight>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     width:600,
//     flex: 1,
//     justifyContent: "center",
//     alignItems: 'center',
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
    
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5
//   },
//   openButton: {
//     backgroundColor: "#F194FF",
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   textStyle: {
//     color: "#000",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   },
//   options:{
//     marginVertical:5,
//     borderColor:'black'
//   }
// });

// export default ModalShow;


import React, {Component} from 'react';
import {Button, Text, View,StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
 
export default class ModalTester extends Component {
  state = {
    isModalVisible: false,
  };
 
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
 
  render() {
    return (
      <View style={{flex: 1}}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.ModalContainer}>
            <Text style={styles.option}>Edit</Text>
            <Text style={styles.option}>Delete</Text>
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles= StyleSheet.create({
    ModalContainer:{
      backgroundColor: '#fff',
      
      justifyContent:'flex-end',
      
    },
    option:{
      fontSize:20,
      marginHorizontal:50,
      marginVertical:20,
    },
});