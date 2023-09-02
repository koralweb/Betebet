import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {observer} from 'mobx-react-lite';

const Product = ({prod, productClick}) => {
  return (
    <TouchableOpacity key={prod.title} onPress={() => productClick(prod)}>
      <Image style={styles.image} source={prod.image} />
      <View style={styles.list}>
        <Text style={styles.title}>{prod.title}</Text>
        <Text style={styles.price}>{prod.price}р</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
    marginLeft: 30,
  },
  list: {
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 19,
    fontWeight: '400',
    color: 'white',
    alignSelf: 'center',
  },
});
export default observer(Product);
