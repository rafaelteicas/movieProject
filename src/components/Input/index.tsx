import { TextInputProps, View } from 'react-native'
import React, { useState } from 'react'
import { MainInput, Text } from './styles'
import Icon  from 'react-native-vector-icons/Ionicons';

interface InputProps extends TextInputProps {
    title?: string;
    secureTextEntry?: boolean;
}

const Input = ({secureTextEntry, title ,...props} : InputProps)  => {
    const [secureText, setSecureText] = useState<boolean>(!!secureTextEntry);

    const handleSecure = () => {
        setSecureText((current) => !current)
    }

  return (
    <View>
        <Text style={{color: 'white'}}>
            {title}
        </Text>
        {secureTextEntry && ( <Icon name={secureText ? 'eye-outline' : 'eye-off-outline'} size={20} color={'white'} onPress={handleSecure} style={{position: 'absolute', bottom: 30, right: 10, zIndex: 1}} />) }
      <MainInput
        secureTextEntry= {secureText}
        {...props} 
        />
    </View>
  )
}

export default Input