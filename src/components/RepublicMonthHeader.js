import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RepublicMonthSalesHeader = () => {
  return (
    <View style={styles.RepublicMonthSaleContainer}>
    <Text style={styles.RepublicMonthSalesHeader}>RepublicMonthSale</Text>
  </View>
  )
}

export default RepublicMonthSalesHeader

const styles = StyleSheet.create({
  RepublicMonthSaleContainer:{
        top:27,
        backgroundColor:'#669999',
    },
    RepublicMonthSalesHeader:{
        paddingTop:5,
        paddingBottom:5,
        fontWeight:'bold',
        margin:7,
    }
})