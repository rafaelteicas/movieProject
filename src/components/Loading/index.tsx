import { View, StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'


const Loading = () => {
  return (
    <View style={{flex: 1, zIndex: 1, position: 'absolute', top: '50%', left: '18%'}}>
        <LottieView source={require('../../assets/load2.json')} style={{width: '80%', aspectRatio: 1, }} autoPlay/>
    </View>
  )
}

export default Loading