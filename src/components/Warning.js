import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Warning = () => {
  const name = useSelector(state => state.user.name);

  return (
    <View style={{backgroundColor: 'yellow'}}>
      <Text style={{fontSize: 20}}>
        Deleting account cannot be undone {name} You should confirm your
        password to delte your account.
      </Text>
    </View>
  );
};

export default Warning;

const styles = StyleSheet.create({});
