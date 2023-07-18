import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const HelpHeader = () => {
  return (
    <View style ={styles.Header}>
      <Text style={styles.TextStyle}>Help</Text>
      <View style={styles.row}>
      <View style={styles.searchIcon}>
      <Ionicons name="search" size={27} color="#909594"/>
      </View>
      <AntDesign name ="shoppingcart" size={27} color="#909594" />
      </View>
    </View>
  )
} 

export default HelpHeader

const styles = StyleSheet.create({
    Header:{
        backgroundColor:'#1a1a00',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    TextStyle:{
        color:'#ffff',
        fontSize:20,
        fontWeight:'bold',
        margin:10
    },
    row:{
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:15,
    },
    searchIcon:{
        paddingHorizontal:10
    }
})