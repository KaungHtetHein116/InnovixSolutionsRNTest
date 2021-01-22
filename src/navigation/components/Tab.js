import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import _ from 'lodash';

export default function Tab({color, tab, onPress, icon}) {
  const [itemCount, setItemCount] = useState(0);
  const cart = useSelector((state) => state.data.Cart);

  useEffect(() => {
    if (!_.isEmpty(cart)) {
      itemsInCart();
    } else {
      setItemCount(0);
    }
  }, [cart]);

  let totalItem = 0;
  const itemsInCart = () => {
    cart.map((item) => {
      totalItem = totalItem + item.unit;
    });
    setItemCount(totalItem);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {tab.name === 'Cart' && (
        <View style={styles.badgeContainer}>
          <Text>{itemCount}</Text>
        </View>
      )}
      <FontAwesome name={icon} size={25} color={color} />
      <Text>{tab.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    height: 60,
  },
  badgeContainer: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'tomato',
    height: 30,
    width: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    top: 4,
    right: 30,
  },
});
