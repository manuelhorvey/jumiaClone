import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native'
import {React,useEffect} from 'react'
import Header from '../components/Header'
import OrderHeader from '../components/OrderHeader'
import Category from '../components/Category'
import Carousel from '../components/Carousel'
import FlashSaleHeader from '../components/FlashSaleHeader'
import FlashSales from '../components/FlashSales'
import AwesomeDealsHeader from '../components/AwesomeDealsHeader'
import AwesomeDeals from '../components/AwesomeDeals'
import RepublicMonthSalesHeader from '../components/RepublicMonthHeader'
import RepublicMonthSales from '../components/RepublicMonthSales'
import HomeOfficeHeader from '../components/HomeOfficeHeader'
import HomeOfficeDeals from '../components/HomeOfficeDeals'


const HomeScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View>
          <Header />
          <OrderHeader />
          <Carousel />
          <Category />
          <FlashSaleHeader />
          <FlashSales />
          <AwesomeDealsHeader />
          <AwesomeDeals />
          <RepublicMonthSalesHeader />
          <RepublicMonthSales />
          <HomeOfficeHeader />
          <HomeOfficeDeals />
          <View style={styles.bottomSpace} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20, 
  },
  bottomSpace: {
    height: 20, 
  },
})