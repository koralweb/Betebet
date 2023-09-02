import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import products from '../mobx/products';
import Product from '../components/Cart/Product';
import {observer} from 'mobx-react-lite';
import EmptyCart from '../components/EmptyCart';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const BasketScreen = ({navigation}) => {
  const renderProducts = () => {
    return products.list
      .filter(el => el.added)
      .map(prod => {
        return <Product key={prod.title} prod={prod} />;
      });
  };

  const totalPrice = () => {
    const addArr = products.list.filter(el => el.added);
    let totalPrice = 0;
    addArr.forEach(product => {
      totalPrice = product.count * product.price + totalPrice;
    });
    return totalPrice;
  };
  return (
    <View style={styles.cont}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <FontAwesomeIcon color={'white'} size={30} icon={'angle-left'} />
      </TouchableOpacity>

      {products.list.some(el => el.added) ? (
        <>
          <Text style={styles.title}>Корзина</Text>

          <ScrollView>{renderProducts()}</ScrollView>

          <View style={{marginTop: 'auto'}}>
            <Text style={styles.solid}></Text>
            <View style={styles.totalSum}>
              <Text style={styles.sum}>Сумма заказа:</Text>
              <Text style={styles.sum}>{totalPrice()}р</Text>
            </View>
            <TouchableOpacity style={styles.butten}>
              <Text style={styles.btn}>Оформить заказ</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <EmptyCart />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#16171F',
    height: Dimensions.get('window').height,
  },
  icon: {
    left: 10,
    top: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    color: 'white',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  solid: {
    width: '100%',
    height: 2,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  totalSum: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sum: {
    color: 'white',
    marginBottom: 50,
    fontSize: 18,
  },
  btn: {
    fontSize: 20,
    paddingTop: 15,
    textAlign: 'center',
  },
  butten: {
    width: '90%',
    backgroundColor: '#F1BD19',
    marginTop: 'auto',
    marginBottom: 50,
    alignSelf: 'center',
    height: 60,
    borderRadius: 10,
  },
});

export default observer(BasketScreen);
