import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const AboutJumia = () => {
  return (
    <View style={styles.aboutjumiacontainer}>
      <Text style={styles.aboutjumiatxt}>ABOUT JUMIA</Text>
      <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
      <Text style={{paddingBottom:10}}>Jumia Services</Text>
      <AntDesign name ="right" size={20} color="#909594" />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
      <Text style={{paddingBottom:10}}>Faq</Text>
      <AntDesign name ="right" size={20} color="#909594" />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
      <Text style={{paddingBottom:10}}>Privacy Policy</Text>
      <AntDesign name ="right" size={20} color="#909594" />
      </View>
      </View>
    </View>
  )
}

export default AboutJumia

const styles = StyleSheet.create({
    aboutjumiacontainer:{
        alignContent:'center',
        margin:5,
        
    },
    aboutjumiatxt:{
        fontSize:15,
        fontWeight:'bold',
        paddingBottom:5,
    },
    container:{
        backgroundColor:'#ffff',
    }
})