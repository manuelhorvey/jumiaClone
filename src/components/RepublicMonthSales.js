import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { RepublicMonthData } from '../data/RepublicMonthData';

const truncateText = (text, limit) => {
  if (text.length <= limit) {
    return text;
  }
  return text.substring(0, limit) + '...';
};

const RepublicMonthSales = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.RepublicImgContainer}
    >
      {RepublicMonthData.map((item, index) => {
        const truncatedTitle = truncateText(item.title, 25); // Adjust the character limit as needed
        return (
          <View key={item.id} style={styles.RepublicSaleContainer}>
            <Image source={item.Image} style={styles.RepublicImgStyle} />
            <Text style={styles.Title}>{truncatedTitle}</Text>
            <Text style={styles.Price}>{item.price}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default RepublicMonthSales;

const styles = StyleSheet.create({
  RepublicSaleContainer: {
    paddingTop: 30,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  RepublicImgContainer: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  RepublicImgStyle: {
    width: 80,
    height: 50,
  },
  Title: {
    fontSize: 15,
  },
  Price: {
    fontWeight: 'bold',
  },
});
