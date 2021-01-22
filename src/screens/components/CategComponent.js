import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import SubCategoryComponent from './SubCategoryComponent';

export default function CategComponent({item}) {
  const renderItem = ({item}) => <SubCategoryComponent item={item} />;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>{item.category_name}</Text>
      </View>
      {item.sub_category.length > 0 ? (
        <FlatList
          data={item.sub_category}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          numColumns={3}
        />
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'red'}}>No Sub Category Found !!!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
  },
  headerContainer: {
    marginTop: 20,
    margin: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 10,
    padding: 20,
  },
});
