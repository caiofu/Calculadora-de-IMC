import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/componets/Title';
import Main from './src/componets/Main';
import Form from './src/componets/Form';


export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop:80,
   
  },
});
