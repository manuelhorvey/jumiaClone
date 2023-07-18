import React from 'react'
import { View } from 'react-native'
import StartLiveChatButton from './StartLiveChatButton'

const ParentComponent = ({ navigation }) => {
  return (
    <View>
      <StartLiveChatButton navigation={navigation} />
    </View>
  )
}

export default ParentComponent
