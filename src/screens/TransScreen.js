import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import translationsList from '../data/translationList';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const TransScreen = ({navigation}) => {
  const renderList = () => {
    return translationsList
      .filter(el => el.date >= new Date().getDate())
      .map(item => (
        <>
          <View style={styles.list}>
            <View>
              <Text style={styles.liga}>{item.liga}</Text>
              <Text style={styles.comand}>{item.team1}</Text>
              <Text style={styles.comand}>{item.team2}</Text>
              <View style={styles.item}>
                <Text style={styles.data}>{item.date}.08 - </Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
            <View style={styles.circle}></View>
          </View>
        </>
      ));
  };
  return (
    <View style={styles.cont}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}>
        <FontAwesomeIcon icon={'angle-left'} size={30} color={'white'} />
      </TouchableOpacity>
      <Text style={styles.title}>Спортивные трансляции</Text>
      <ScrollView>
        <View key={Math.random()}>{renderList()}</View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#16171F',
  },
  title: {
    fontSize: 25,
    color: 'white',
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 10,
  },
  backBtn: {
    top: 40,
    paddingLeft: 10,
    zIndex: 7,
  },
  list: {
    width: '80%',
    marginLeft: 20,
    marginBottom: 25,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  liga: {
    color: 'white',
    fontSize: 17,
    paddingBottom: 5,
  },
  comand: {
    color: 'silver',
    fontSize: 17,
    paddingBottom: 5,
  },
  item: {
    flexDirection: 'row',
  },
  data: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
  time: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
  circle: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#FF3F2F',
    width: 20,
    height: 20,
  },
});

export default TransScreen;
