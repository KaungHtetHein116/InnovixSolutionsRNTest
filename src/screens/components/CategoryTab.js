import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {getCategData} from '../../redux/actions/DataAction';
import {useSelector, useDispatch} from 'react-redux';
import CategComponent from './CategComponent';

export default function CategoryTab() {
  const categData = useSelector((state) => state.data.categ);
  const loading = useSelector((state) => state.data.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategData());
  }, []);
  return (
    <View>
      {loading ? (
        <View style={{justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={'#F2651C'} />
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          data={categData}
          renderItem={({item}) => <CategComponent item={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
