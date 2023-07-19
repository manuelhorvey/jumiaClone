import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import { StyleSheet,View,Text } from 'react-native';

const FeedOptions = () => {
    const [active, setActive] = useState('Explore');
    const handleTabPress = (tab) => {
      setActive(tab);
    }
    return(
        <View style={styles.options}>
       <TouchableOpacity onPress={() => {
              handleTabPress('Following');
        }}>
        <Text style={[styles.optionTab, active === 'Following' && styles.activeTab]}>Following</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('Explore')}>
        <Text style={[styles.optionTab, active === 'Explore' && styles.activeTab]}>Explore</Text>
        </TouchableOpacity>
        </View>
    )
};

export default FeedOptions;

const styles=StyleSheet.create({
    options: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: 'gray', 
        marginBottom:20,
        marginTop:0
      },
      optionTab: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
      },
      activeTab: {
        color: 'orange', 
        borderBottomColor: 'orange',
        borderBottomWidth: 2, 
        },
});