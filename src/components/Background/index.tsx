import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

interface bgProps {
  children: any;
  y?: number
}

const { width, height } = Dimensions.get('window')

const Background = ({ children  }: bgProps) => {
  return (
    <LinearGradient
      colors={['#290b38', '#000']}
      style={{
        width,
        height,
        position: 'absolute',
        zIndex: 0
      }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.6}}>
      {children}
    </LinearGradient>
  );
}

export default Background