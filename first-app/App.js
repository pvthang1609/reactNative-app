import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import cowardlyLion from './assets/img/cowardlyLion.png'
import cyclops from './assets/img/cyclops.png'
import dwarf from './assets/img/dwarf.png'
import frogPrince from './assets/img/frogPrince.png'
import mermaid from './assets/img/mermaid.png'
import pinocchio from './assets/img/pinocchio.png'
import poisonous from './assets/img/poisonous.png'
import vampire from './assets/img/vampire.png'


import Item from './components/Item'


export default function App() {
  return (
    <View  style={styles.container}>
      <ScrollView style={styles.inner__container}>
        <Item title='Cowardly Lion' src={cowardlyLion}/>
        <Item title='Cyclops' src={cyclops}/>
        <Item title='Dwarf' src={dwarf}/>
        <Item title='Mermaid' src={mermaid}/>
        <Item title='Pinocchio' src={pinocchio}/>
        <Item title='Poisonous' src={poisonous}/>
        <Item title='Vampire' src={vampire}/>
        <Item title='Frog Prince' src={frogPrince}/>
        <Item title='Frog Prince' src={frogPrince}/>
        <Item title='Frog Prince' src={frogPrince}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner__container: {
    width: '100%',
    padding: 20,
  }
});
