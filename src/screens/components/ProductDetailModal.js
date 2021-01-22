import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {onAddCart} from '../../redux/actions/DataAction';

export default function ProductDetailScreen({headerTitle, id, onClose}) {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  console.log(data.status);
  useEffect(() => {
    axios
      .get(
        `http://backend.sbbabyshop.com/detail/product/list/?product_id=${id}`,
      )
      .then((res) => {
        setData(res.data.data[0]);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => onClose()}>
            <MaterialIcons name="arrow-back" size={30} color={'black'} />
          </TouchableOpacity>
          <Text style={{fontSize: 20, color: 'black'}}>{headerTitle}</Text>
          <TouchableOpacity onPress={() => alert('Search')}>
            <Feather name="search" size={30} color={'black'} />
          </TouchableOpacity>
        </View>
        <View>
          <Image source={{uri: data.url_link}} style={styles.image} />
        </View>
        <View style={styles.priceTitleContainer}>
          <View style={styles.titleContainer}>
            <Text>{data.name}</Text>
            <Text></Text>
            <EvilIcons name="heart" size={30} color="pink" />
          </View>
          <View style={styles.priceContainer}>
            <Text style={{textDecorationLine: 'line-through', color: 'grey'}}>
              2500 KS
            </Text>
            <View style={{marginLeft: 20}}>
              <Text>{data.list_price} KS</Text>
            </View>
            <View style={styles.percentContainer}>
              <Text>20%</Text>
            </View>
            <View style={{backgroundColor: 'tomato', padding: 4}}>
              <Text>လက်ဆောင်</Text>
            </View>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={{fontSize: 20, marginBottom: 20}}>
            Product Description
          </Text>
          <Text style={{color: 'grey'}}>{data.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          disabled={data.status === 'out_of_stock' ? true : false}
          onPress={() => {
            dispatch(onAddCart(data));
            let unit = isNaN(data.unit) ? 0 : data.unit;
            data.unit = unit + 1;
          }}
          style={[styles.btnContainer, {flex: 1}]}
          activeOpacity={0.8}>
          {data.status === 'out_of_stock' ? (
            <Text>OUT OF STOCK</Text>
          ) : (
            <Text>ADD TO CART</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    margin: 5,
  },
  image: {
    height: 300,
    width: '100%',
    elevation: 10,
    borderRadius: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceTitleContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    margin: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentContainer: {
    backgroundColor: 'tomato',
    marginHorizontal: 20,
    padding: 5,
  },
  description: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    margin: 10,
  },
  footerContainer: {
    padding: 10,
    flexDirection: 'row',
    bottom: 0,
  },
  btnContainer: {
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2651C',
  },
});
