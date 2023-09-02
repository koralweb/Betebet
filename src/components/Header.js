import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Menu from './Menu';

const Header = ({navigation}) => {
  const [menu, setMenu] = useState(false);
  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={() => setMenu(true)}>
        <FontAwesomeIcon color={'black'} size={30} icon={'bars'} />
      </TouchableOpacity>
      {menu && <Menu navigation={navigation} setMenu={setMenu} />}
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    position: 'relative',
    paddingTop: 40,
    paddingLeft: 10,
    zIndex: 2,
  },
});

export default Header;
