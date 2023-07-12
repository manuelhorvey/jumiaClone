import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const OrderHeader = () => {
  return (
    <LinearGradient
            colors={['#80aaff', '#80aaff', '#80aaff']}
            style={styles.OderContainer}
          >
      <Text style={styles.OderText}  >Call to Order : 0244900681 </Text>
    </LinearGradient>
  )
}

export default OrderHeader

const styles = StyleSheet.create({
        OderContainer:{
            padding:12,
            alignItems:'center',
        },
        OderText:{
            fontSize:13,
            color:'#ffff',
            fontWeight:'bold',
        }
})