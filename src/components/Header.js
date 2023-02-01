import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  const name = useSelector(state => state.user.name);
  console.log('rerendered');
  return (
    <View style={{backgroundColor: 'red', height: 50}}>
      <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>
        {name}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
