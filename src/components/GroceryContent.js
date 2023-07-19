import React from 'react';
import { View, Image, Text,StyleSheet } from 'react-native';


const GroceryContent = () => (
  <View style={styles.container}>
<Text>ALL PRODUCTS</Text>
  </View>
);

export default GroceryContent;

const styles = StyleSheet.create({
  container:{
    width:'65%',
    height:'5%',
    backgroundColor:"tomato",
    alignItems:'flex-start',
    margin:10,
    padding:10,
    paddingBottom:10
  }
})