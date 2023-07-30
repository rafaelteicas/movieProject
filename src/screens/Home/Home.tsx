import React, { useCallback, useEffect, useState } from 'react'
import Header from '../../components/Header'
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Background from '../../components/Background';
import { Text } from './style';
import { test } from '../../data/test'
import MovieBox from '../../components/MovieBox';
// import { apiCall } from '../../data/db';
import axios from 'axios';
import { apiCall } from '../../data/db';

const { width, height } = Dimensions.get('window');

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  item: any
}

const Home = () => {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [random, setRandom] = useState<Movie | null>(null)
  const [selectedCatergory, setSelectedCategory] = useState();

  useEffect(() => {
    getRandomMovie()
  }, [])

  useEffect(() => {
    getTrendingMovies()
  }, [])


  const getTrendingMovies = async () => {
    const data = await apiCall('trending/movie/day')

    setMovies(data.results)

  }
  const numeroAleatorio = useCallback(() => Math.floor(Math.random() * 200), [])

  const getRandomMovie = async () => {

    const data = await apiCall(`/movie/${numeroAleatorio()}`)

    setRandom(data)

  }


  return (
    <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ width: width, height: height }}>
      <Background y={1.3}>
        <Header />
        {random && (
          <>
            <Text style={{ color: 'white', zIndex: 1, textAlign: 'center', fontSize: 30, top: height * 0.3 }}>aa</Text>
            <View style={{ position: 'absolute' }}>


              <Image
                style={{ width, height: height * 0.55 }}
                source={{ uri: 'https://image.tmdb.org/t/p/w500' + random.poster_path }}
              />
              <LinearGradient
                colors={['rgba(23, 23, 23,0.3)', '#15082b']}
                style={{ position: 'absolute', width: width, height: height, bottom: 0 }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
              />
            </View>
          </>
        )
        }
        <View style={{ top: height * 0.4 }}>
          <Text style={{ marginLeft: 24, fontSize: 16 }}>Novos</Text>
          <FlatList showsHorizontalScrollIndicator={false} horizontal data={movies} renderItem={(item) => <MovieBox data={item} key={item.index} ovies={movies} />} />
        </View>

      </Background>
    </ScrollView>

  )
}

export default Home