import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function AddRemoveButton({onAdd, unit, onRemove}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.numCircle} onPress={() => onRemove()}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 20, margin: 10}}>{unit}</Text>
      <TouchableOpacity style={styles.numCircle} onPress={() => onAdd()}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  numCircle: {
    width: 30,
    height: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
    borderRadius: 10,
  },
});
