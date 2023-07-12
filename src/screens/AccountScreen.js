import { StyleSheet, Text, View } from 'react-native'
import {React,useEffect} from 'react'

const AccountScreen = ({navigation}) => {
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
      }, [navigation]);
  return (
    <View>
      <Text>AccountScreen</Text>
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({})