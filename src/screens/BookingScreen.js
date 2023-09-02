import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Congrats from '../components/Congrats';

const BookingScreen = ({navigation}) => {
  const [check, setCheck] = useState(false);
  return (
    <View style={styles.cont}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <FontAwesomeIcon color={'white'} size={30} icon={'angle-left'} />
      </TouchableOpacity>
      <Text style={styles.title}>Бронирование</Text>

      <View style={styles.list}>
        <Text style={styles.listText}>Электронная почта</Text>
        <TextInput
          style={styles.listInput}
          placeholder="Напишите Ваш Email"
          placeholderTextColor={'white'}></TextInput>
        <Text style={styles.listText}>Телефон</Text>
        <TextInput
          style={styles.listInput}
          placeholder="Напишите Ваш телефон"
          placeholderTextColor={'white'}></TextInput>
        <Text style={styles.listText}>Номер столика</Text>
        <TextInput
          style={styles.listInput}
          placeholder="Напишите номер вашего столика"
          placeholderTextColor={'white'}></TextInput>
        <Text style={styles.listText}>Имя</Text>
        <TextInput
          style={styles.listInput}
          placeholder="Напишите Ваше имя"
          placeholderTextColor={'white'}></TextInput>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => setCheck(true)}>
        <Text style={styles.btnText}>Забронировать</Text>
      </TouchableOpacity>
      {check && <Congrats navigation={navigation} />}
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#16171F',
    height: Dimensions.get('window').height,
  },
  list: {
    width: '90%',
    marginLeft: 20,
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
  listText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
    marginTop: 15,
  },
  listInput: {
    fontSize: 17,
    backgroundColor: '#474747',
    padding: 10,
    paddingLeft: 15,
    borderRadius: 10,
  },
  btn: {
    width: '90%',
    backgroundColor: '#F1BD19',
    marginTop: 'auto',
    marginBottom: 50,
    alignSelf: 'center',
    height: 60,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    paddingTop: 15,
    textAlign: 'center',
  },
});

export default BookingScreen;
