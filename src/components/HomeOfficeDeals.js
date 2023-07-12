import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { HomeOfficeData } from '../data/HomeOfficeData';


const truncateText = (text, limit) => {
  if (text.length <= limit) {
    return text;
  }
  return text.substring(0, limit) + '...';
};

const HomeOfficeDeals = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.HomeOfficeImgContainer}
    >
      {HomeOfficeData.map((item, index) => {
        const truncatedTitle = truncateText(item.title, 25); // Adjust the character limit as needed
        return (
          <View key={item.id} style={styles.HomeOfficeDealsContainer}>
            <Image source={item.Image} style={styles.HomeOfficeImgStyle} />
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
  HomeOfficeDealsContainer: {
    paddingTop: 30,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HomeOfficeImgContainer: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  HomeOfficeImgStyle: {
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
