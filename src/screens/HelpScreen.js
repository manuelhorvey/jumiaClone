import { StyleSheet, Text, View } from 'react-native'
import {React,useEffect} from 'react'

const HelpScreen = ({navigation}) => {
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
      }, [navigation]);
  return (
    <View>
      <Text>HelpScreen</Text>
    </View>
  )
}

export default HelpScreen

const styles = StyleSheet.create({})