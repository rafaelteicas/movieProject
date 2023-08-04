import { View, StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { LoadingView } from './styles'


const Loading = () => {
  return (
    <LoadingView>
      <LottieView source={require('../../assets/load2.json')} style={{ width: '80%', aspectRatio: 1, }} autoPlay />
    </LoadingView>
  )
}

export default Loading