import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'

const ChatScreen = () => {
  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('')

  const handleSend = () => {
    setMessages([...messages, inputText])
    setInputText('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <Text key={index}>{message}</Text>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messagesContainer: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
  },
})

export default ChatScreen
