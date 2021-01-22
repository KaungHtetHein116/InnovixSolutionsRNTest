import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import ProductListComponent from './components/ProductListComponent';

export default function ProductListScreen({route}) {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const {id, headerTitle} = route.params;
  useEffect(() => {
    axios
      .get(`http://backend.sbbabyshop.com/list/product/?categ_id=${id}`)
      .then((res) => {
        setData(res.data.data.product_list);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={30} color={'black'} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, color: 'black'}}>{headerTitle}</Text>
        <TouchableOpacity onPress={() => alert('Search')}>
          <Feather name="search" size={30} color={'black'} />
        </TouchableOpacity>
      </View>
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => <ProductListComponent item={item} />}
          numColumns={2}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: 'red'}}>Empty</Text>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 60,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    margin: 5,
  },
});
