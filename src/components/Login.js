import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Login = () => {
    const onPressLogin = () => {
        navigation.navigate('LogInScreen')
    };
  return (
    <View style={styles.Container}>
      <View>
      <Text style={{color:'#ffff', paddingHorizontal:10}}>Welcome</Text>
      <Text style={{color:'#ffff', paddingHorizontal:10}}>Enter your Account</Text>
      </View>
      <Button
        onPress={onPressLogin}
        title="LOGIN"
        color="#e65c00"
        accessibilityLabel="Log into your account"
      />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    Container:{
        backgroundColor:'#1a1a00',
        flexDirection:'row',
        justifyContent:'space-between',
       
    },
})