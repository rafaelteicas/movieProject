import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Background from '../../components/Background';
import { Text } from './style';
import MovieBox from '../../components/MovieBox';
import { apiCall } from '../../data/db';
import Button from '../../components/Button';
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native';

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
  const { navigate } = useNavigation();

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
    <Background y={0.6}>
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ width: width, height: height + 600 }}>
        <Header />
        {random && (
          <>
            <Text style={{ color: 'white', zIndex: 1, textAlign: 'center', fontSize: 25, top: height * 0.35 }}>{random.title}</Text>
            <View style={{ position: 'absolute' }}>


              <Image
                style={{ width, height: height * 0.55 }}
                source={{ uri: 'https://image.tmdb.org/t/p/w500' + random.poster_path }}
              />
              <LinearGradient
                colors={['transparent', '#2a1157']}
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
          <FlatList showsHorizontalScrollIndicator={false} horizontal data={movies} renderItem={(item) => <MovieBox data={item} key={item.index} onPress={() => navigate('MovieScreen', { nome: 'aa', data: item })} />} />
          <Text style={{ marginLeft: 24, fontSize: 16 }}>Melhores Filmes</Text>
          <FlatList showsHorizontalScrollIndicator={false} horizontal data={topMovies} renderItem={(item) => <MovieBox data={item} key={item.index} />} />
          <Button colorGradient={false} style={{ marginLeft: 24 }} title='sair' onPress={() => auth().signOut()} />
        </View>

      </ScrollView>
    </Background>

  )
}

export default Home