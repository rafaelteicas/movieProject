import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Background from '../../components/Background'
import { MainContent } from './login'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native'

const Login = () => {

  const { navigate } = useNavigation();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    const login = await auth().signInWithEmailAndPassword(email, password)

  }


  const handleSubmit = async () => {

    await handleLogin()
    navigate('Home')

  }

  return (
    <Background>
      <MainContent>
        <Input title='Email' value={email} onChangeText={setEmail} />
        <Input title='Senha' secureTextEntry value={password} onChangeText={setPassword} />
        <Button colorGradient={true} title='Login' onPress={handleSubmit} />
      </MainContent>
    </Background>
  )
}

export default Login