import React, { useEffect } from 'react'
import Background from '../../components/Background';
import { ImageLogo, SplashScreen } from './styles';
import Loading from '../../components/Loading';
import { useNavigation } from '@react-navigation/native';



const Splash = () => {

  const { navigate } = useNavigation()

  useEffect(() => {
    setTimeout(() => navigate('SignatureScreen'), 2000)
  }, [])

  return (
    <>
      <Background>
        <SplashScreen>
        <ImageLogo resizeMode='center' source={require('../../assets/FILMFLIX.png')} />
        </SplashScreen>
      </Background>
      <Loading />
    </>

  )
}


export default Splash