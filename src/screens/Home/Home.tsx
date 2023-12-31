import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { Dimensions, FlatList, Image, ImageBackground, SafeAreaView, ScrollView, View , Button } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Background from '../../components/Background';
import { Text } from './style';
import MovieBox from '../../components/MovieBox';
import { apiCall } from '../../data/db';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'
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
  const [topMovies, setTopMovies] = useState();
  const { navigate } = useNavigation<any>();

  useEffect(() => {
    getRandomMovie()
  }, [])

  useEffect(() => {
    getTrendingMovies()
  }, [])

  useEffect(() => {
    getTopMovies()
  }, [])

  const getTrendingMovies = async () => {
    const data = await apiCall('trending/movie/day')
    setMovies(data.results)
  }

  const getTopMovies = async () => {
    const data = await apiCall('/movie/top_rated')
    setTopMovies(data.results)
  }

  const numeroAleatorio = () => Math.floor(Math.random() * 200)

  const getRandomMovie = async () => {

    const data = await apiCall(`/movie/${numeroAleatorio()}`)

    setRandom(data)

  }
    

  return (
    <Background>
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ width: width, height: height + 500 }}>
        <Header />
        {random && (
          <>
            <Text style={{ color: 'white', zIndex: 1, textAlign: 'center', fontSize: 25, top: height * 0.35 }}>{random.title}</Text>
            <View style={{ position: 'absolute' }}>


              <ImageBackground
                style={{ width, height: height / 2, position: 'absolute' }}
                source={{ uri: 'https://image.tmdb.org/t/p/w500' + random.poster_path }}
              >
                <LinearGradient
                  colors={['transparent', '#1e0829']}
                  style={{ width: '100%', height: height / 2, alignItems: 'center', justifyContent: 'flex-end' }}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 0.9 }}
                />
              </ImageBackground>
            </View>
          </>
        )
        }
        <View style={{ top: height * 0.4 }}>
          <Text style={{ marginLeft: 24, fontSize: 16 }}>Novos</Text>
          <FlatList showsHorizontalScrollIndicator={false} horizontal data={movies} renderItem={(item) => <MovieBox data={item} key={item.index} onPress={() => navigate('MovieScreen', { nome: 'aa', data: item })} />} />
          <Text style={{ marginLeft: 24, fontSize: 16 }}>Melhores Filmes</Text>
          <FlatList showsHorizontalScrollIndicator={false} horizontal data={topMovies} renderItem={(item) => <MovieBox data={item} key={item.index} onPress={() => navigate('MovieScreen', { nome: 'aa', data: item })} />} />
        </View>

      </ScrollView>
    </Background>

  )
}

export default Home