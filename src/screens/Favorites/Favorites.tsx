import { View, Text, FlatList, ImageBackground, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Background from '../../components/Background'
import { useUserReducer } from '../../store/reducers/userReducer/useUserReducer';
import firestore from '@react-native-firebase/firestore';

const Favorites = () => {
    const {user} = useUserReducer();
    const [favorites,setFavorites] = useState([]);
    const [eachMovie, setEachMovie] = useState([]);
    const collection = user.uid;
    

    useEffect(() => {
        const subscribe = 
        firestore()
        .collection(collection)
        .onSnapshot(querySnapshot => {
            const data = querySnapshot.docs.map(doc=> {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            setFavorites(data);
        });
        return () => subscribe();
    }, [])

    interface Props {
        data?: any;
    }
    
    const RenderFavMovies = ({data}: any) => {  
              
        return(
            <View style={{ height, alignItems: 'center', justifyContent:'center'}}>
                <Text style={{color: 'white'}}>{data.data.item.title} </Text>
                <Image borderRadius={100} width={100} height={100} source={{uri: `https://image.tmdb.org/t/p/w500${data.data.item.poster_path}`}} />
            </View>
        )
        
    }
    

    const {height} = Dimensions.get('window')

  return (
        <Background>
        <FlatList horizontal data={favorites} renderItem={({item}: any) => <RenderFavMovies data={item} /> }/>
        </Background>
  )
}

export default Favorites