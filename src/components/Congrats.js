import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const Congrats = ({prod, navigation}) => {
  return (
    <View style={styles.cont}>
      <Text style={styles.titleText}>Ваш заказ успешно записан!</Text>
      <TouchableOpacity
        style={styles.butten}
        onPress={() => navigation.push('Home')}>
        <Text style={styles.btn}>На главную</Text>
      </TouchableOpacity>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16171F',
  },
  titleText: {
    fontSize: 30,
    fontWeight: '500',
    color: 'white',
  },
  butten: {
    alignSelf: 'center',
    marginTop: 250,
    backgroundColor: '#F1BD19',
    width: '90%',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    paddingTop: 10,
  },
  btn: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export default Congrats;
