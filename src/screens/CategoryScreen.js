import { StyleSheet, Text, View } from 'react-native'
import {React,useEffect} from 'react'

const CategoryScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <View>
      <Text>CategoryScreen</Text>
    </View>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({})