import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { AwesomeDealsData } from '../data/AwesomeDealData';


const AwesomeDeals = () => {
    return (
      <View style={styles.AwesomeDealsContainer}>
        {AwesomeDealsData.map((item, index) => {
          return (
            <View key={index}>
              <Image source={item.Image} style={styles.AwesomeDealsImgStyle} />
            </View>
          );
        })}
      </View>
    );
  };

export default AwesomeDeals;

const styles = StyleSheet.create({
    AwesomeDealsContainer: {
      top: 20,
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      flexDirection: 'row',
    },
    AwesomeDealsImgStyle: {
     width:120,
     height:120,
     alignItems: 'center',
    },
  });
