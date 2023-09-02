import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Menu = ({navigation, setMenu}) => {
  return (
    <>
      <View style={styles.cont}>
        <View style={styles.wrp}></View>
        <TouchableOpacity style={styles.icon} onPress={() => setMenu(false)}>
          <FontAwesomeIcon color={'white'} size={30} icon={'close'} />
        </TouchableOpacity>
        <Text style={styles.listTitle}>Добро пожаловать!</Text>
        <View style={styles.list}>
          <TouchableOpacity onPress={() => navigation.push('Home')}>
            <Text style={styles.listText}>Главная</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('Shop')}>
            <Text style={styles.listText}>Магазин</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.push('Booking')}>
            <Text style={styles.listText}>Бронирование</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('Trans')}>
            <Text style={styles.listText}>Трансляции</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('Contact')}>
            <Text style={styles.listText}>Контакты</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.basket}
          onPress={() => navigation.push('Basket')}>
          <FontAwesomeIcon color={'black'} size={30} icon={'shopping-basket'} />
        </TouchableOpacity>
      </View>
    </>
  );
};
const windowWidth = Dimensions.get('window').width;
console.log(windowWidth);
const left = 1000 / 2 - windowWidth / 2;
const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },
  wrp: {
    position: 'absolute',
    height: 1000,
    width: 1000,
    borderRadius: 500,
    backgroundColor: '#16171F',
    top: -600,
    left: -left,
    zIndex: 2,
  },

  listTitle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 35,
    fontWeight: '800',
    marginBottom: 150,
    marginTop: 70,
    zIndex: 3,
  },
  icon: {
    top: 40,
    left: 10,
    zIndex: 3,
  },

  list: {
    position: 'relative',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    padding: 15,
    zIndex: 3,
  },
  listText: {
    width: 250,
    textAlign: 'center',
    backgroundColor: '#16171F',
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 15,
    padding: 5,
    borderRadius: 10,
  },
  basket: {
    backgroundColor: '#ECECEC',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 20,
    alignItems: 'center',
    padding: 5,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default Menu;
