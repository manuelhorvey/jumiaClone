import { StyleSheet, Text, View } from 'react-native'
import {React,useEffect} from 'react'

const FeedScreen = ({navigation}) => {
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
      }, [navigation]);
  return (
    <View>
      <Text>FeedScreen</Text>
    </View>
  )
}

export default FeedScreen

const styles = StyleSheet.create({})