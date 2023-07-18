import { StyleSheet, Text, View, TouchableOpacity, Modal, FlatList } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
      <Text style={{ paddingBottom: 10 }}>Push Notification</Text>
      <TouchableOpacity onPress={handleToggle}>
        <FontAwesome name={isToggled ? 'toggle-on' : 'toggle-off'} size={20} color="#909594" />
      </TouchableOpacity>
    </View>
  );
};

const Settings = () => {
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('GHANA');
  const countries = ['GHANA', 'USA', 'UK', 'Canada', 'Australia'];

  const handleCountryPress = () => {
    setCountryModalVisible(true);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setCountryModalVisible(false);
  };

  return (
    <View style={styles.Settingsjumiacontainer}>
      <Text style={styles.Settingsjumiatxt}>SETTINGS</Text>
      <View style={styles.container}>
        <ToggleButton />
        <TouchableOpacity onPress={handleCountryPress}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
            <Text style={{ paddingBottom: 10 }}>Country</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>{selectedCountry}</Text>
              <AntDesign name="right" size={20} color="#909594" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
          <Text style={{ paddingBottom: 10 }}>Language</Text>
          <Text>ENGLISH</Text>
        </View>
        <Modal visible={countryModalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Country</Text>
            <FlatList
              data={countries}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleCountrySelect(item)}>
                  <Text style={styles.countryItem}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
            <TouchableOpacity onPress={() => setCountryModalVisible(false)}>
              <Text style={styles.modalCloseButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  Settingsjumiacontainer: {
    alignContent: 'center',
    margin: 5,
  },
  Settingsjumiatxt: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  container: {
    backgroundColor: '#ffff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  countryItem: {
    fontSize: 16,
    paddingVertical: 10,
  },
  modalCloseButton: {
    fontSize: 16,
    color: 'blue',
    marginTop: 20,
  },
});
