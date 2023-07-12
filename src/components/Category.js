import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { Categories } from '../data/Categories'

const Category = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.ImgContainer}>
      {Categories.map((item, index) => {
        return (
          <View key={item.id}  style={styles.CategoryContainer} >
            <Image source={item.Image} style={styles.ImgStyle} />
            <Text style={styles.Title}>{item.title}</Text>
          </View>
        );
      })}
    </ScrollView>
    )
  }
  

export default Category

const styles = StyleSheet.create({
    ImgContainer:{
        backgroundColor:'#fffff',
        padding:10,
        margin:-10,
        top:12
    },
    ImgStyle:{
        width:50,
        height:50,
    },
    Title:{
        fontSize:10,
        color:'#2c4341',
        fontWeight:'bold'
    },
    CategoryContainer:{
        padding:8,
        alignItems:'center',
        backgroundColor:'#ffff',
    }

})