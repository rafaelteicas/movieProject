import { View, Text } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import { MainContent } from './login'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

const Login = () => {

    const { navigate } = useNavigation();

  return (
    <Background>
        <MainContent>
            <Input title='Email' />
            <Input title='Senha' secureTextEntry />
            <Button colorGradient={true} title='Login' onPress={() => navigate('Home')} />
        </MainContent>
    </Background>
  )
}

export default Login