import { View, Text, Dimensions, SafeAreaView, ScrollView, ViewProps } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

interface bgProps extends ViewProps {
  children: any;
  y?: number;
}

const { width,height } = Dimensions.get('window')

const Background = ({children, ...props}: bgProps) => {
  return (

    <LinearGradient
      colors={['#290b38', '#000']}
      style={{
        flex: 1,
        width,
        height
      }} 
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.6}}>
      {children}
    </LinearGradient>
  );
}

export default Background