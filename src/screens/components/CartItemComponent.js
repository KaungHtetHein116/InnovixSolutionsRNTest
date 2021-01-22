import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AddRemoveButton from './AddRemoveButton';
import {onAddCart, onRemoveCart} from '../../redux/actions/DataAction';
import {useSelector, useDispatch} from 'react-redux';

export default function CartItemComponent({item}) {
  const dispatch = useDispatch();

  const didUpdateCart = (unit) => {
    item.unit = unit;
    dispatch(onAddCart(item));
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={[styles.imgContainer]}>
          <Image
            source={{uri: item.url_link}}
            style={{width: 100, height: 100, borderRadius: 10}}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.nameText}>{item.name}</Text>
            <TouchableOpacity onPress={() => dispatch(onRemoveCart(item))}>
              <EvilIcons name="trash" size={30} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.priceText}>{item.list_price}</Text>
            <AddRemoveButton
              onAdd={() => {
                let unit = isNaN(item.unit) ? 0 : item.unit;
                didUpdateCart(unit + 1);
              }}
              onRemove={() => {
                let unit = isNaN(item.unit) ? 0 : item.unit;
                didUpdateCart(unit > 0 ? unit - 1 : unit);
              }}
              unit={item.unit}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  subContainer: {
    flexDirection: 'row',
  },
  imgContainer: {
    padding: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-evenly',
  },
  nameText: {
    fontWeight: '900',
  },
  priceText: {
    marginTop: 7,
    fontWeight: 'bold',
    color: 'red',
  },
});
