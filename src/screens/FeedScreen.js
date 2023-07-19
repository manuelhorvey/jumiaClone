import {StyleSheet} from 'react-native'
import {React,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar,Text } from 'react-native';
import FeedHeader from '../components/FeedHeader';
import FeedOptions from '../components/FeedOptions';
import FeedItems from '../components/FeedItems';


const FeedScreen = ({navigation}) => {
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
      }, [navigation]);
     
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar style="auto" backgroundColor="black" />
    <FeedHeader/>
    <FeedOptions/>
    <FeedItems /> 
    </SafeAreaView>
  )
}

export default FeedScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  }, 
  
});
