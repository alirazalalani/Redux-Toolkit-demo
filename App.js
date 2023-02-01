import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
// import { Header } from 'react-native/Libraries/NewAppScreen'
import Header from './src/components/Header';
import Update from './src/components/Update';
import Warning from './src/components/Warning';

const App = () => {
  const [name, setName] = useState('John');
  return (
    // <Provider store={store}>
    <View style={{flex: 1}}>
      <Header />
      <Warning />
      <Update />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
