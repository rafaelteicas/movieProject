import React from 'react'
import { ButtonContainer, LinearButton, Text } from './styles'
import { TouchableOpacityProps } from 'react-native'
import { View } from 'native-base';

interface myButton extends TouchableOpacityProps {
    title?: string,
    colorGradient: boolean;
    onPress?: any
    
}

const Button = ({onPress, colorGradient, title, ...props}: myButton) => {
  return (


    <ButtonContainer onPress={onPress} {...props}>
     
    <LinearButton colors={colorGradient?  ['#5a1cc5', '#5e28b9'] : ['#303030','#292929'] }>
            <Text>{title}</Text>
    </LinearButton>
    </ButtonContainer>

  )
}

export default Button