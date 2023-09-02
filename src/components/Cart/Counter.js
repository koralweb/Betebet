import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Counter = () => {
  const [cnt, setCnt] = useState(1);

  const inc = () => {
    setCnt(cnt + 1);
  };

  const dec = () => {
    if (cnt === 1) {
      return;
    }
    setCnt(cnt - 1);
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={dec}>
        <Text style={styles.minus}>-</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{cnt}</Text>
      <TouchableOpacity onPress={inc}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    width: 90,
    justifyContent: 'center',
  },
  text: {
    fontSize: 21,
    fontWeight: '600',
    color: '#F1BD19',
    paddingLeft: 8,
    paddingRight: 8,
  },
  minus: {
    fontSize: 21,
    fontWeight: '600',
    color: '#F1BD19',
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 20,
    borderColor: '#F1BD19',
    borderWidth: 1,
  },
  plus: {
    fontSize: 21,
    fontWeight: '600',
    color: 'white',
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#F1BD19',
    borderRadius: 20,
  },
});

export default Counter;
