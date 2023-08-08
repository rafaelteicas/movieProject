import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { Dimensions, Text, Image, ImageBackground, SafeAreaView, ScrollView, View, Button, Alert, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Background from '../../components/Background';
import { Title, Date, TextView, OverView, Cast } from './style';
import { useNavigation } from '@react-navigation/native';
import { apiCall } from '../../data/db';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setMovieAction } from '../../store/reducers/movieReducer';
import store from '@react-native-firebase/firestore';
import { useUserReducer } from '../../store/reducers/userReducer/useUserReducer';
import Icon from 'react-native-vector-icons/Ionicons';

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
  const [cast, setCast] = useState([]);
  const {user} = useUserReducer();
  useEffect((() => {
    getMovieDetails();
  }), [])
  
  const myData = route.params?.data
  console.log(myData);
  
  const getMovieDetails = async () => {
    const data = await apiCall(`movie/${myData.item.id}/credits`);
    setCast(data.cast)
  }
  

  const mapCast = ({item}: any) => {
    if(item.profile_path == null) {
      return;
    } else {
      return (
          <View style={{ padding: 20, marginTop: 40}}>
            <Image style={{height: 100, width: 100, borderRadius: 50}} source={{uri: `https://www.themoviedb.org/t/p/w138_and_h175_face${item.profile_path}`}} />
            <Text style={{color: 'white', marginTop: 20}}>{item.name}</Text>
          </View> 
    ) 
    }
  }
  console.log(user.uid);
  
  const handleFavoriteMovie = () => {
    const subscribe = store().collection(`${user.uid}`).add({
      data: myData
    }).then(()=> Alert.alert('Favoritado com sucesso!')).catch(e=> console.log(e)
    )
  }
  
  return (
    <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ width: width, height: height + 200 }}>
    <Background> 
    <Header isMovieScreen />
        <TextView>
          <Icon name='heart-circle-outline' size={30} color='white' onPress={handleFavoriteMovie} />
          <Title>{route.params?.data.item.title}</Title>
          <Date>{route.params?.data.item.release_date}</Date>
          <OverView>{route.params?.data.item.overview}</OverView>
          <FlatList horizontal data={cast} renderItem={(item): any => mapCast(item)} />
         </TextView>
        <ImageBackground
          resizeMode="cover"
          style={{ width: '100%', height: height / 2, position: 'absolute' }}
          source={{ uri: 'https://image.tmdb.org/t/p/w500' + route.params?.data.item.poster_path }}
          >
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>

            <LinearGradient
              colors={['transparent', '#1e0829']}
              style={{ width: '100%', height: 150, alignItems: 'center', justifyContent: 'flex-end', zIndex: 999 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 0.7 }}
              />
          </View>
        </ImageBackground>

    </Background>
        </ScrollView>
  )
}

export default MovieScreen