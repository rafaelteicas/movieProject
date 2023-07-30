import React from 'react'
import { ButtonContainer, LinearButton, Text } from './styles'
import { TouchableOpacityProps } from 'react-native'

interface myButton extends TouchableOpacityProps {
    title?: string,

}

const Button = ({title, ...props}: myButton) => {
  return (
    <ButtonContainer {...props}>
    <LinearButton colors={['#5a1cc5', '#5e28b9']} {...props}>
            <Text>{title}</Text>
    </LinearButton>
    </ButtonContainer>
  )
}

export default Button