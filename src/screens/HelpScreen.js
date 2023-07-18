import { StyleSheet, View } from 'react-native'
import {React,useEffect} from 'react'
import HelpHeader from '../components/HelpHeader';
import StartLiveChatButton from '../components/StartLiveChatButton';
import AboutJumia from '../components/AboutJumia';
import Settings from '../components/Settings';
import AppInfo from '../components/AppInfo';


const HelpScreen = ({navigation}) => {
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
      }, [navigation]);
  return (
    <View>
      <HelpHeader />
     <StartLiveChatButton />
     <AboutJumia />
     <Settings />
     <AppInfo />
    </View>
  )
}

export default HelpScreen

const styles = StyleSheet.create({})