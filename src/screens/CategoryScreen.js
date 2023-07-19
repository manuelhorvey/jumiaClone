import { StyleSheet, Text, View } from 'react-native'
import {React,useEffect} from 'react'
import VerticalTab from '../components/VerticalTab';
import CategoryHeader from '../components/CategoryHeader';

const CategoryScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <View>
    <CategoryHeader />
     <VerticalTab />
    </View>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({})