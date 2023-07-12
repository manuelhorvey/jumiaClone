import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const FlashSaleHeader = () => {
  // Set the initial time remaining to 1 hour (3600 seconds)
  const [timeRemaining, setTimeRemaining] = useState(3600);

  // Update the time remaining every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((time) => time - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format the time remaining as HH:MM:SS
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.FlashSalesContainer}>
      <View style={styles.row}>
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons name="tag" size={50} color="#FFD700" />
          <View style={styles.textContainer}>
            <Text style={styles.FlashSalesHeader}>Flash Sales | Free Delivery</Text>
            <Text style={styles.timer}>TIME LEFT: {formatTime(timeRemaining)}</Text>
          </View>
        </View>
        <Text style={styles.SeeAll}>SEE ALL</Text>
      </View>
    </View>
  );
};

export default FlashSaleHeader;

const styles = StyleSheet.create({
  FlashSalesContainer: {
    backgroundColor:'#ff0000',
    top: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
   
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    
  },
  headerContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  textContainer: {
    flexDirection: 'column', 
    marginLeft: 8,
  },
  FlashSalesHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#ffff',
    marginLeft: 8,
    
  },
  SeeAll: {
    fontSize: 14,
    fontWeight: 'bold',
    color:'#ffff'
  },
  timer: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffff',
    marginTop: 10,
    margin:8
  },
});
