import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import Background from '../../components/Background'
import { MainContent } from './style'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

const Signup = () => {

  const { navigate } = useNavigation();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = async () => {

    try {
      const login = await auth().createUserWithEmailAndPassword(email, password)

      if (login) console.log(`made`)

    } catch (error) {
      console.warn(error)

    }

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
        <Button colorGradient={true} title='Cadastrar' onPress={handleSubmit} />
      </MainContent>
    </Background>
  )
}

export default Signup