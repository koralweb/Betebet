import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import products from '../mobx/products';
import Product from '../components/Product';
import OneProduct from '../components/OneProduct';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import productsList from '../data/productsList';
import Header from '../components/Header';

const classArr = ['все'];
productsList.forEach(el => {
  if (!classArr.includes(el.class)) {
    classArr.push(el.class);
  }
});

const ShopScreen = ({navigation}) => {
  const [oneProduct, setOneProduct] = useState(null);
  const [currentClass, setCurrentClass] = useState('все');

  const productClick = prod => {
    setOneProduct(prod);
  };
  const closeOneProduct = () => {
    setOneProduct(null);
  };

  const renderProducts = () => {
    return products.list
      .filter(element => {
        if (currentClass === 'все') return element;
        if (currentClass === element.class) return element;
        return false;
      })
      .map(prod => (
        <Product productClick={productClick} prod={prod} key={prod.title} />
      ));
  };

  function renderClassList() {
    return classArr.map(el => (
      <TouchableOpacity
        key={el}
        onPress={() => {
          setCurrentClass(el);
        }}>
        <Text style={styles.class}>{el}</Text>
      </TouchableOpacity>
    ));
  }

  return (
    <View style={styles.cont}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}>
        <FontAwesomeIcon icon={'angle-left'} size={30} color={'white'} />
      </TouchableOpacity>

      <Text style={styles.titleText}>Меню</Text>

      <View style={styles.list}>{renderClassList()}</View>

      <ScrollView horizontal={true} style={styles.product}>
        {renderProducts()}
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.push('Basket')}
        style={styles.btn}>
        <FontAwesomeIcon color={'white'} size={40} icon={'shopping-basket'} />
      </TouchableOpacity>

      {oneProduct && <OneProduct prod={oneProduct} close={closeOneProduct} />}
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#16171F',
    height: Dimensions.get('window').height,
  },

  backBtn: {
    top: 40,
    paddingLeft: 10,
  },
  titleText: {
    fontSize: 25,
    color: 'white',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 50,
    marginTop: 20,
  },
  class: {
    borderRadius: 30,
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    width: 60,
    height: 60,
    textAlign: 'center',
    paddingTop: 17,
    fontSize: 15,
    fontWeight: '500',
  },
  product: {
    width: '90%',
  },
  btn: {
    marginTop: 'auto',
    marginBottom: 40,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    width: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default ShopScreen;
