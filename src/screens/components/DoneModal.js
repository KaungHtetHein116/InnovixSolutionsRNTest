import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View, Image} from 'react-native';

const DoneModal = ({onClose}) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/mark.png')}
        />
        <Text style={[styles.modalText, {fontSize: 20}]}>Congrats</Text>
        <Text style={styles.modalText}>
          Your order ID-xxxxxxxx has been placed successfully
        </Text>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            onClose();
          }}>
          <Text style={styles.textStyle}>Continue Shopping</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F2651C',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
});

export default DoneModal;
