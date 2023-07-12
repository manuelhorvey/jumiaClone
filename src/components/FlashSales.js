import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { FlashSaleData } from '../data/FlashSalesData';

const FlashSales = () => {
  return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.FlashImgContainer}
      >
        {FlashSaleData.map((item, index) => {
          return (
            <View key={item.id} style={styles.FlashSaleContainer}>
              <Image source={item.Image} style={styles.FlashImgStyle} />
              <Text style={styles.Title}>{item.title}</Text>
              <Text style={styles.Price}>{item.price}</Text>
            </View>
          );
        })}
      </ScrollView>
   
  );
};

export default FlashSales;

const styles = StyleSheet.create({
    FlashSaleContainer: {
        paddingTop: 30,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      FlashImgContainer: {
        backgroundColor: '#ffffff',
        top: 6,
        marginTop:20,
      },
      FlashImgStyle: {
        width: 80,
        height:50,
      },
      Title: {
        fontSize:15,
      },
      Price: {
        fontWeight:'bold'
      },
});
