import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

interface bgProps {
  children: any;
  y?: number
}

const { width, height } = Dimensions.get('window')

const Background = ({ children, y = 1 }: bgProps) => {
  return (
    <LinearGradient
      colors={['#000', 'rgb(47, 19, 97)']}
      style={{
        width,
        height,
        position: 'absolute',
        zIndex: 0
      }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: y }}>
      {children}
    </LinearGradient>
  );
}

export default Background