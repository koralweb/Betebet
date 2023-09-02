import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import products from '../../mobx/products';
import Counter from './Counter';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Product = ({prod}) => {
  return (
    <View style={styles.cont}>
      <Image source={prod.image} style={styles.image} />
      <View style={styles.item}>
        <Text style={styles.title}>{prod.title}</Text>
        <Text style={styles.price}>{prod.price}р</Text>
      </View>

      <View style={styles.wrp}>
        <TouchableOpacity
          style={styles.remove}
          onPress={() => products.removeProduct(prod.id)}>
          <FontAwesomeIcon icon={'trash'} color={'red'} />
        </TouchableOpacity>
        <Counter />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  item: {
    width: Dimensions.get('window').width - 230,
    marginLeft: 5,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    color: 'white',
    paddingLeft: 10,
  },
  remove: {
    alignItems: 'flex-end',
    marginBottom: 25,
    paddingTop: 10,
    paddingRight: 10,
  },
  price: {
    color: 'white',
    fontWeight: '500',
    paddingLeft: 10,
  },
  wrp: {
    paddingRight: 10,
  },
});
export default Product;
