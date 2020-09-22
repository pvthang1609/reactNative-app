import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Item from './components/Item'


export default function App() {
  return (
    <View style={styles.container}>
      <Item title='Cowardly Lion'/>
      <Item title='Cowardly Lion'/>
      <Item title='Cowardly Lion'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
