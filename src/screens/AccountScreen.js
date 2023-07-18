import { StyleSheet, Text, View } from 'react-native'
import {React,useEffect} from 'react'
import AccountHeader from '../components/AccountHeader';
import Login from '../components/Login';
import MyJumiaAccount from '../components/MyJumiaAccount';
import AccountSettings from '../components/AccountSettings';

const AccountScreen = ({navigation}) => {
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
      }, [navigation]);
  return (
    <View>
      <AccountHeader />
      <Login navigation={navigation} />
      <MyJumiaAccount />
      <AccountSettings />
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({})