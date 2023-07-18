import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const AccountSettings = () => {
  return (
    <View style={styles.AccSettingscontainer}>
      <Text style={styles.Accounttxt}>MY SETTINGS</Text>
      <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
      <Text style={{paddingBottom:10}}>Address Book</Text>
      <AntDesign name ="right" size={20} color="#909594" />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
      <Text style={{paddingBottom:10}}>Close Account</Text>
      <AntDesign name ="right" size={20} color="#909594" />
      </View>
      </View>
    </View>
  )
}

export default AccountSettings

const styles = StyleSheet.create({
    AccSettingscontainer:{
        alignContent:'center',
        margin:5,
        
    },
    Accounttxt:{
        fontSize:15,
        fontWeight:'bold',
        paddingBottom:5,
    },
    container:{
        backgroundColor:'#ffff',
    }
})