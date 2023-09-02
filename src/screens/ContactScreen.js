import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const ContactScreen = ({navigation, close}) => {
  return (
    <View style={styles.cont}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <FontAwesomeIcon color={'white'} size={30} icon={'angle-left'} />
      </TouchableOpacity>
      <Text style={styles.title}>Контакты</Text>

      <View style={styles.list}>
        <Text style={styles.inner}>Электронная почта</Text>
        <Text style={styles.item}>Email</Text>
        <Text style={styles.inner}>Телефон</Text>
        <Text style={styles.item}>Телефон</Text>
        <Text style={styles.inner}>Индекс</Text>
        <Text style={styles.item}>Индекс</Text>
        <Text style={styles.inner}>Дата</Text>
        <Text style={styles.item}>Дата</Text>
      </View>
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
  list: {
    width: '90%',
    marginLeft: 20,
  },
  inner: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
    marginTop: 15,
  },
  item: {
    fontSize: 17,
    color: 'white',
    backgroundColor: '#474747',
    padding: 10,
    borderRadius: 10,
  },
});

export default ContactScreen;
