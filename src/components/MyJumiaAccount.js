import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const MyJumiaAccount = () => {
  return (
    <View style={styles.MyJumiaAccountcontainer}>
        <Text style={styles.MyJumiaAccounttxt}>MY JUMIA ACCOUNT</Text>
        <View style={styles.container}>
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
    <View style={{flexDirection:'row'}}>
    <Entypo name ="archive" size={20} color="#909594" />
        <Text style={{paddingBottom:10,paddingHorizontal:10}}>Orders</Text>
    </View>
        <AntDesign name ="right" size={20} color="#909594" />
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
    <View style={{flexDirection:'row',}}>
          <AntDesign name ="mail" size={20} color="#909594" />
        <Text style={{paddingBottom:10,paddingHorizontal:10}}>Inbox</Text>
    </View>
        <AntDesign name ="right" size={20} color="#909594" />
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
    <View style={{flexDirection:'row',}}>
        <MaterialIcons name ="rate-review" size={20} color="#909594" />
        <Text style={{paddingBottom:10,paddingHorizontal:10}}>Pending Reviews</Text>
    </View>
        <AntDesign name ="right" size={20} color="#909594" />
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
    <View style={{flexDirection:'row',}}>
        <MaterialCommunityIcons name ="ticket" size={20} color="#909594" />
        <Text style={{paddingBottom:10,paddingHorizontal:10}}>Vouchers</Text>
    </View>
        <AntDesign name ="right" size={20} color="#909594" />
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
    <View style={{flexDirection:'row',}}>
        <AntDesign name ="hearto" size={20} color="#909594" />
        <Text style={{paddingBottom:10,paddingHorizontal:10}}>Saved Items</Text>
    </View>
        <AntDesign name ="right" size={20} color="#909594" />
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
    <View style={{flexDirection:'row',}}>
       <SimpleLineIcons name ="user-follow" size={20} color="#909594" />
        <Text style={{paddingBottom:10,paddingHorizontal:10}}>Follow Seller</Text> 
    </View>
        <AntDesign name ="right" size={20} color="#909594" />
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
    <View style={{flexDirection:'row',}}>
         <FontAwesome name ="undo" size={20} color="#909594" />
        <Text style={{paddingBottom:10,paddingHorizontal:10}}>Recently Viewed</Text>
    </View>
        <AntDesign name ="right" size={20} color="#909594" />
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
    <View style={{flexDirection:'row',}}>
    <MaterialIcons name ="saved-search" size={20} color="#909594" />
        <Text style={{paddingBottom:10,paddingHorizontal:10}}>Recently Searched</Text>
    </View>
        <AntDesign name ="right" size={20} color="#909594" />
    </View>
    </View>
  </View>
  )
}

export default MyJumiaAccount

const styles = StyleSheet.create({
    MyJumiaAccountcontainer:{
        alignContent:'center',
        margin:5,
        
    },
    MyJumiaAccounttxt:{
        fontSize:15,
        fontWeight:'bold',
        paddingBottom:5,
    },
    container:{
        backgroundColor:'#ffff',
    }
})