import React from 'react'
import { ButtonContainer, LinearButton, Text } from './styles'
import { TouchableOpacityProps } from 'react-native'

interface myButton extends TouchableOpacityProps {
    title?: string,
    colorGradient: boolean
}

const Button = ({colorGradient, title, ...props}: myButton) => {
  return (
    <ButtonContainer {...props}>
     
    <LinearButton colors={colorGradient?  ['#5a1cc5', '#5e28b9'] : ['#303030','#292929'] }>
            <Text>{title}</Text>
    </LinearButton>
    </ButtonContainer>
  )
}

export default Button