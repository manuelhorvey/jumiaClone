import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppInfo = () => {
  return (
    <View style={styles.AppInfocontainer}>
      <Text style={styles.AppInfotxt}>AppInfo</Text>
      <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
      <Text style={{paddingBottom:10}}>App Version 14.1.0</Text>
      <Text>UPDATED</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
      <Text style={{paddingBottom:10}}>Cache Used </Text>
      <Text>CLEAR</Text>
      </View>
      </View>
    </View>
  )
}

export default AppInfo

const styles = StyleSheet.create({
    AppInfocontainer:{
        alignContent:'center',
        margin:5,
        
    },
    AppInfotxt:{
        fontSize:15,
        fontWeight:'bold',
        paddingBottom:5,
    },
    container:{
        backgroundColor:'#ffff',
    }
})