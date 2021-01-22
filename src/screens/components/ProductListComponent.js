import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductDetailModal from './ProductDetailModal';

export default function ProductListComponent({item}) {
  const [visible, setVisible] = useState(false);
  console.log(item.status);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={() => setVisible(!visible)}>
        <ProductDetailModal
          headerTitle={item.name}
          id={item.product_id}
          onClose={() => setVisible(false)}
        />
      </Modal>
      <TouchableOpacity activeOpacity={0.8} onPress={() => setVisible(true)}>
        {item.status === 'in_stock' ? (
          <View>
            {item.product_image === false ? (
              <View>
                <View style={styles.discountContainer}>
                  <Text>20%</Text>
                </View>
                <Image
                  source={require('../../assets/no-photo.png')}
                  style={styles.imageStyle}
                />
              </View>
            ) : (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.discountContainer}>
                  <Text>20%</Text>
                </View>
                <Image
                  source={{uri: item.product_image}}
                  style={styles.imageStyle}
                />
              </View>
            )}
            <View style={{margin: 20, marginTop: 0}}>
              <Text numberOfLines={2}>{item.name}</Text>
              <Text style={{textDecorationLine: 'line-through'}}>2500 Ks</Text>
              <View style={styles.basketContainer}>
                <Text numberOfLines={2} style={{fontWeight: 'bold'}}>
                  {item.list_price} Kyats
                </Text>
                <Ionicons name="basket" size={30} color="#F2651C" />
              </View>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.stockContainer}>
              <Text>Out of Stock</Text>
            </View>
            <View style={styles.discountContainer}>
              <Text>20%</Text>
            </View>
            {item.product_image === false ? (
              <Image
                source={require('../../assets/no-photo.png')}
                style={styles.imageStyle}
              />
            ) : (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={{uri: item.product_image}}
                  style={styles.imageStyle}
                />
              </View>
            )}
            <View style={{margin: 20, marginTop: 0}}>
              <Text numberOfLines={2}>{item.name}</Text>
              <Text style={{textDecorationLine: 'line-through'}}>2500 Ks</Text>
              <View style={styles.basketContainer}>
                <Text numberOfLines={2} style={{fontWeight: 'bold'}}>
                  {item.list_price} Kyats
                </Text>

                <Ionicons name="basket" size={30} color="#F2651C" />
              </View>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 / 2,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 10,
    margin: 10,
  },
  imageStyle: {
    height: 150,
    width: 170,
    margin: 10,
    borderRadius: 20,
  },
  basketContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stockContainer: {
    backgroundColor: 'pink',
    position: 'absolute',
    top: 10,
    zIndex: 10,
    padding: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  discountContainer: {
    backgroundColor: 'tomato',
    position: 'absolute',
    top: 10,
    zIndex: 10,
    padding: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    right: 0,
  },
});
