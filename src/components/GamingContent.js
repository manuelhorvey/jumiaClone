import React from 'react';
import { View, Image, Text,StyleSheet } from 'react-native';

const GamingContent = () => (
  <View style={styles.container}>
    <Image style={styles.Img} source={require('../assests/carsousel/RMS_d.jpg')} />
    <Text>Grocery content goes here.</Text>
  </View>
);

export default GamingContent;

const styles = StyleSheet.create({
  Img:{
      width:50,
      height:50,
  },
  container:{
    width:'70%',
  }
})