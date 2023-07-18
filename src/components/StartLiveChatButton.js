import { StyleSheet, View, Button } from 'react-native';
import React from 'react';

const StartLiveChatButton = ({ navigation }) => {
  const onPressLearnMore = () => {
    navigation.navigate('ChatScreen');
  };

  return (
    <View style={styles.buttonContainer}>
      <Button
        onPress={onPressLearnMore}
        title="Start Live Chat"
        color="#e65c00"
        accessibilityLabel="Start live chat with a representative"
      />
    </View>
  );
};

export default StartLiveChatButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 3,
  },
});
