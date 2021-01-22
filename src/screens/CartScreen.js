import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import CartItemComponent from './components/CartItemComponent';
import _ from 'lodash';
import DoneModal from './components/DoneModal';

export default function CartScreen() {
  const cart = useSelector((state) => state.data.Cart);
  const [totalAmount, setTotalAmount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!_.isEmpty(cart)) {
      onCalculateAmount();
    } else {
      setTotalAmount(0);
    }
  }, [cart]);

  let total = 0;
  const onCalculateAmount = () => {
    cart.map((item) => {
      total = total + item.list_price * item.unit;
    });
    setTotalAmount(total);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={30} color={'black'} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, color: 'black'}}>Shopping Cart</Text>
        <TouchableOpacity onPress={() => alert('Search')}>
          <Feather name="search" size={30} color={'black'} />
        </TouchableOpacity>
      </View>
      {cart.length > 0 ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            // paddingBottom: 70,
          }}>
          <View>
            <FlatList
              data={cart}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({item}) => <CartItemComponent item={item} />}
            />
          </View>
        </View>
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Empty</Text>
        </View>
      )}
      {cart.length > 0 ? (
        <View style={styles.footerContainer}>
          <View style={styles.totalContainer}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>{totalAmount} Ks</Text>
          </View>
          <TouchableOpacity
            style={styles.btnContainer}
            activeOpacity={0.8}
            onPress={() => setVisible(true)}>
            <Text style={{color: 'white'}}>CHECKOUT</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
      ) : null}
      <Modal
        transparent
        animationType="slide"
        visible={visible}
        onRequestClose={() => setVisible(!visible)}>
        <DoneModal onClose={() => setVisible(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
    paddingBottom: 60,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    margin: 5,
    backgroundColor: 'white',
  },
  footerContainer: {
    bottom: 0,
    backgroundColor: 'white',
  },
  btnContainer: {
    flex: 1,
    padding: 27,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#F2651C',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
