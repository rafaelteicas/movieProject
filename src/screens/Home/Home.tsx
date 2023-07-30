import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Background from '../../components/Background';
import { Text } from './style';
import {test} from '../../data/test'
import MovieBox from '../../components/MovieBox';
import { apiCall } from '../../data/db';
import axios from 'axios';

const {width, height} = Dimensions.get('window');

const Home = () => {

  const [movies, setMovies] = useState([1]);
  const [selectedCatergory, setSelectedCategory] = useState();


  useEffect(() => 
  {getTrendingMovies()
  } ,[])

  const getTrendingMovies = async () => {
    const data = await axios.request({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/11?api_key=4ad412f3b31363ecebda8fdb1535ce67",
    }).then(response => setMovies(response.data.poster_path));
  }

  const renderMovie = () => {
    return (
      <MovieBox 
        image={'../../assets/test.jpg'}
      />
    )

  }

  return (
        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{width: width, height: height}}>
       <Background y={1.3}>
        <Header />
        <Text style={{color: 'white', zIndex: 1, textAlign: 'center', fontSize: 30, top: height* 0.3}}>Velozes e Furiosos</Text>
          <View style={{position:'absolute'}}>
            <Image 
            style={{width,height: height*0.55}} 
            source={{uri: 'https://image.tmdb.org/t/p/w500'+ movies}} 
            />
            <LinearGradient
              colors={['rgba(23, 23, 23,0.3)', '#15082b']}
              style={{position: 'absolute', width: width, height: height,  bottom: 0}} 
              start={{x: 0.5, y:0}}
              end={{x: 0.5, y:1}}
            />
          </View>
          <View style={{ top: height* 0.4}}>
            <Text style={{marginLeft: 24, fontSize: 16}}>Novos</Text>
            <FlatList showsHorizontalScrollIndicator={false} horizontal data={movies} renderItem={renderMovie} />
          </View> 
      </Background>
      </ScrollView>

  )
}

export default Home