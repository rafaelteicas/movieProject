import React from 'react'
import Header from '../../components/Header'
import { Dimensions, Image, SafeAreaView, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Background from '../../components/Background'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'


const { width, height } = Dimensions.get('window')
  
const SignatureScreen = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView>

    <Background y={2.3}>
        <Header />
        <View style={{position:'absolute'}}>
            <Image style={{width, height: height * 0.8, top: -40}} source={require('../../assets/bg.jpg')} />
            <LinearGradient
                colors={['transparent', 'rgba(17, 7, 34, 1)']}
                style={{position: 'absolute', width: width, height: height,  bottom: 0}} 
                start={{x: 0.5, y:0}}
                end={{x: 0.5, y:1}}
            />
        </View>
            <Button title={'Fazer login'} onPress={() => navigate('Home') } />
    </Background>
    
    </SafeAreaView>
  )
}

export default SignatureScreen