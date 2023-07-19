import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const FeedHeader = () => {
  const navigation=useNavigation()
  return (
    <View style ={styles.Header}>
      <Text style={styles.TextStyle}>Feed</Text>
      <View style={styles.row}>
      <View style={styles.searchIcon}>
      <Ionicons name="search" size={27} color="#909594"/>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('CartScreen')}>
      <AntDesign name ="shoppingcart" size={27} color="#909594" />
      </TouchableOpacity>
      </View>
    </View>
  )
} 

export default FeedHeader

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