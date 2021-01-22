import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function SubCategoryComponent({item}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('ProductListScreen', {
          id: item.category_id,
          headerTitle: item.category_name,
        })
      }>
      <Image
        source={{uri: item.category_image}}
        style={{height: 100, width: 100, margin: 10}}
      />
      <View style={{margin: 10}}>
        <Text numberOfLines={2}>{item.category_name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 / 3,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
