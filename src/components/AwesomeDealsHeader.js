import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AwesomeDealsHeader = () => {
  return (
    <View style={styles.AwesomeDealsContainer}>
    <Text style={styles.AwesomeDealsHeader}>Don't Miss These Awesome Deals</Text>
  </View>
  )
}

export default AwesomeDealsHeader

const styles = StyleSheet.create({
    AwesomeDealsContainer:{
        top:11,
        backgroundColor:'#669999',
    },
    AwesomeDealsHeader:{
        paddingTop:5,
        paddingBottom:5,
        fontWeight:'bold',
        margin:7,
  
    }
})