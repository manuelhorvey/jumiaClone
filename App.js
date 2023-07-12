import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import TabNavigator from './src/navigation/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
          <TabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6ff',
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
