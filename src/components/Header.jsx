import { View, StyleSheet} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const Header = () => {
    return (
      <View >    
          <LinearGradient
            colors={['#242824', '#242824', '#242824']}
            style={styles.HeaderContainer}
          >
          
        <View style ={styles.InputBox}>

          <View style ={styles.SearchRowAlign}>
            <Ionicons name="search" size={22} color="#1f1f1f"/>
           <TextInput placeholder='Search On Jumia' underlineColor="transparent" mode="flat"
            style={{ backgroundColor: 'transparent', borderWidth: 0,width:'88%' }}
          />
          </View>
            <AntDesign name ="scan1" size={22} color="#909594" />

        </View>
            <AntDesign name ="shoppingcart" size={22} color="#909594" />
          </LinearGradient>
      </View>
    )
  }

export default Header

const styles = StyleSheet.create({
    HeaderContainer:{
       padding:8, 
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
    },
    InputBox:{
      flexDirection:"row",
      alignItems:"center",
      borderWidth:1,
      borderColor:"#a1bcc0",
      borderRadius:8,
      backgroundColor:"#ffff",
      width:'90%',
      justifyContent:"space-between",
      paddingHorizontal:10,
      elevation:10,
    },
    SearchRowAlign:{
      flexDirection:"row",
      alignItems:"center",
      height:30
    },

})