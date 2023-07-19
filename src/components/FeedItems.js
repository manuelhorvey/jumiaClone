import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'


const FeedItem = () => {
 
    return (
      <ScrollView>
        <View style={styles.feedList}>
        <View style={styles.feedItem}>
          <Image source={require('../assests/carsousel/RMS_d.jpg')} style={styles.feedItemImage} />
          <Text style={styles.feedItemTitle}>Flash Sales</Text>
          <Text style={styles.feedItemPrice}>Get your favorite offer at the cheapest price just click here</Text>
            <View style={styles.shareContainer}>
              <Image source={require('../assests/feedpictures/share.png')} style={styles.shareitem} />
              <Text style={styles.shareText}>Share</Text>
            </View>
        </View>
        <View style={styles.feedItem}>
          <Image source={require('../assests/carsousel/computing_rms_d.jpg')} style={styles.feedItemImage} />
          <Text style={styles.feedItemTitle}>Laptops</Text>
          <Text style={styles.feedItemPrice}>Get your Laptops here at affordable prices</Text>
           <View style={styles.shareContainer}>
              <Image source={require('../assests/feedpictures/share.png')} style={styles.shareitem} />
              <Text style={styles.shareText}>Share</Text>
            </View>
        </View>
        <View style={styles.feedItem}>
          <Image source={require('../assests/carsousel/TV_rms_d.jpg')} style={styles.feedItemImage} />
          <Text style={styles.feedItemTitle}>TV Set Discounts</Text>
          <Text style={styles.feedItemPrice}>Get various Televisions that suite your need</Text>
           <View style={styles.shareContainer}>
              <Image source={require('../assests/feedpictures/share.png')} style={styles.shareitem} />
              <Text style={styles.shareText}>Share</Text>
            </View>
        </View>
        <View style={styles.feedItem}>
          <Image source={require('../assests/carsousel/TV_rms_d.jpg')} style={styles.feedItemImage} />
          <Text style={styles.feedItemTitle}>Half Sale Prices</Text>
          <Text style={styles.feedItemPrice}>Get your favorite item for half the price</Text>
           <View style={styles.shareContainer}>
              <Image source={require('../assests/feedpictures/share.png')} style={styles.shareitem} />
              <Text style={styles.shareText}>Share</Text>
            </View>
          </View>
      </View>
      </ScrollView>
    );
}; 

export default FeedItem

const styles = StyleSheet.create({
feedList: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  feedItem: {
    marginBottom: 6,
    borderRadius:3,
    borderWidth:3,
    borderColor:'white',
    backgroundColor:'white',
    width:'90%',
    marginLeft:20
  },
  feedItemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginTop: 2
  },
  feedItemTitle: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  feedItemPrice: {
    marginTop: 4,
    fontSize: 16,
    color: 'gray',
  },
  shareitem: {
    marginTop:2,
    bottom:0,
    height:20,
    width:20,
  },
  shareContainer:{
    marginLeft:'80%',
    flexDirection:'row'
  },
  shareText:{
    marginTop:1,
    color:'orange'
  },
});
