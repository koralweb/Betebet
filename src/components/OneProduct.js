import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import products from '../mobx/products';
import Counter from './Cart/Counter';

const OneProduct = ({prod, close}) => {
  const [added, setAdded] = useState(prod.added);

  const addProduct = () => {
    setAdded(true);
    products.addProduct(prod.id, 1);
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={close} style={styles.backBtn}>
        <FontAwesomeIcon icon={'angle-left'} size={30} color={'black'} />
      </TouchableOpacity>
      <Image source={prod.image} style={styles.image} />

      <View style={styles.cart}>
        <Text style={styles.title}>{prod.title}</Text>
        <Text style={styles.desc}>{prod.desc}</Text>

        <View style={styles.wrp}>
          <Text style={styles.price}>{prod.price}р</Text>
          <Counter style={styles.titlePrice} />
        </View>
      </View>
      {added ? (
        <View style={styles.butten}>
          <Text style={styles.btnText}>Добавлено!</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={addProduct} style={styles.btn}>
          <View style={styles.btnCont}>
            <FontAwesomeIcon
              color={'white'}
              size={30}
              icon={'shopping-basket'}
            />
            <Text style={styles.btnText}>Добавить</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#16171F',
    //zIndex: 5,
  },
  backBtn: {
    position: 'absolute',
    top: 40,
    paddingLeft: 10,
    zIndex: 8,
  },
  image: {
    width: '100%',
    height: 400,
    alignSelf: 'center',
  },
  cart: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '300',
    color: 'white',
    marginBottom: 15,
  },
  wrp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 100,
  },
  price: {
    fontSize: 30,
    fontWeight: '400',
    color: 'white',
  },
  desc: {
    fontSize: 17,
    fontWeight: '400',
    color: 'white',
  },
  btn: {
    width: '90%',
    backgroundColor: '#F1BD19',
    marginTop: 'auto',
    marginBottom: 50,
    alignSelf: 'center',
    height: 60,
    borderRadius: 10,
    alignContent: 'center',
  },
  btnText: {
    fontSize: 20,
    paddingLeft: 15,
  },
  btnCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  butten: {
    width: '90%',
    backgroundColor: '#F1BD19',
    marginTop: 'auto',
    marginBottom: 50,
    alignSelf: 'center',
    height: 60,
    borderRadius: 10,
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 13,
  },
});

export default OneProduct;
