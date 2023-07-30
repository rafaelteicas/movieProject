import React from 'react'
import Header from '../../components/Header'
import { Dimensions, Image, SafeAreaView, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Background from '../../components/Background';
import { Text } from './style';

const {width, height} = Dimensions.get('window');

const Home = () => {
  return (
    <SafeAreaView>
    <Background y={1.3}>
      <Header />
      
      <Text style={{color: 'white', zIndex: 1, textAlign: 'center', top: height* 0.3, fontSize: 30}}>Velozes e Furiosos</Text>
        <View style={{position:'absolute'}}>
          <Image 
          style={{width,height: height*0.55}} 
          source={require('../../assets/test.jpg')} 
          />
          <LinearGradient
            colors={['rgba(23, 23, 23,0.3)', '#15082b']}
            style={{position: 'absolute', width: width, height: height,  bottom: 0}} 
            start={{x: 0.5, y:0}}
            end={{x: 0.5, y:1}}
          />
        </View>

        <View style={{height}}>
          <Text style={{top: '40%', padding: 20}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cumque voluptates molestias omnis vel nesciunt eum labore laudantium, dicta eius consequatur quis veritatis eos sapiente molestiae blanditiis saepe id cupiditate!</Text>
        </View> 
    </Background>
    </SafeAreaView>

  )
}

export default Home