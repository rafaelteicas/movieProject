import React from 'react'
import Header from '../../components/Header'
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Background from '../../components/Background';
import { Text } from './style';
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
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ width: width, height: height + 600 }}>
        <Header isMovieScreen />
        <Text style={{ color: 'white', zIndex: 1, left: 20, fontSize: 35, top: height * 0.35, fontWeight: 'bold' }}>{route.params?.data.item.title}</Text>
        <Text style={{ color: 'white', zIndex: 1, left: 20, fontSize: 15, top: height * 0.35 }}>{route.params?.data.item.release_date}</Text>
        <Text style={{ color: 'white', zIndex: 1, fontSize: 15, top: height * 0.39, padding: 20 }}>{route.params?.data.item.overview}</Text>

        <View style={{ position: 'absolute' }}>


          <Image
            style={{ width, height: height * 0.55 }}
            source={{ uri: 'https://image.tmdb.org/t/p/w500' + route.params?.data.item.poster_path }}
          />
          <LinearGradient
            colors={['transparent', '#0f071f']}
            style={{ position: 'absolute', width: width, height: height, bottom: 0 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
        </View>
        <View style={{ top: height * 0.4 }}>

        </View>

      </ScrollView>
    </Background>

  )
}

export default MovieScreen