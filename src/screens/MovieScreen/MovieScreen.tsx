import React from 'react'
import Header from '../../components/Header'
import { Dimensions, Text, Image, ImageBackground, SafeAreaView, ScrollView, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Background from '../../components/Background';
import { Title, Date, TextView, OverView } from './style';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  item: any,
  data?: any
}

const MovieScreen = ({ route }: any) => {

  const navigation = useNavigation;

  const myData = route.params?.data
  console.log(myData.item.title)

  return (
    <Background y={1.8}>
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ width: width, height: height }}>
        <Header isMovieScreen />
        <TextView>
          <Title>{route.params?.data.item.title}</Title>
          <Date>{route.params?.data.item.release_date}</Date>
          <OverView>{route.params?.data.item.overview}</OverView>
        </TextView>


        <ImageBackground
          resizeMode="cover"
          style={{ width: '100%', height: height / 2, position: 'absolute' }}
          source={{ uri: 'https://image.tmdb.org/t/p/w500' + route.params?.data.item.poster_path }}
        >
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>

            <LinearGradient
              colors={['transparent', '#11051acc']}
              style={{ width: '100%', height: 150, alignItems: 'center', justifyContent: 'flex-end', zIndex: 999 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 0.7 }}
            />
          </View>
        </ImageBackground>
        <View style={{ top: height * 0.4 }}>

        </View>

      </ScrollView>
    </Background>

  )
}

export default MovieScreen