import React from 'react';
import { View, Image, Text,StyleSheet } from 'react-native';

const PhoneTabletsContent = () => (
  <View style={styles.container} >
    <Image style={styles.Img} source={require('../assests/carsousel/bestannivesaryoffer.jpg')} />
    <Text>Phone & Tablets content goes here.</Text>
  </View>
);

export default PhoneTabletsContent;

const styles = StyleSheet.create({
    Img:{
        width:80,
        height:60,
    },
    container:{
        width:'70%',
    }
})
