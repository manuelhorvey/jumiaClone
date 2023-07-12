import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeOfficeHeader = () => {
  return (
    <View style={styles.HomeOfficeContainer}>
    <Text style={styles.HomeOfficeText}>Home and Office | Top Deals</Text>
  </View>
  )
}

export default HomeOfficeHeader

const styles = StyleSheet.create({
    HomeOfficeContainer:{
        top:11,
        backgroundColor:'#669999',
    },
    HomeOfficeText:{
        paddingTop:5,
        paddingBottom:5,
        fontWeight:'bold',
        margin:7,
  
    }
})