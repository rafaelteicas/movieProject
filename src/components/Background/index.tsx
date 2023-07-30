import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const Background = ({children}: any) => {
    return (
      <LinearGradient
          colors={['#000', '#2f1361']}
          style={{
            width: '100%',
            height: '100%',
          }}>
          {children}
      </LinearGradient>
    );
}

export default Background