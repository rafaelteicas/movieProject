import { View, Text, FlatList, ImageBackground, Image, Dimensions, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Background from '../../components/Background'
import { useUserReducer } from '../../store/reducers/userReducer/useUserReducer';
import firestore from '@react-native-firebase/firestore';

const Favorites = () => {
    const {user} = useUserReducer();
    const [favorites,setFavorites] = useState([]);
    

    useEffect(() => {
        const subscribe = 
        firestore()
        .collection('users/favorites/' + user.uid)
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


    const {width, height} = Dimensions.get('window')

    const RenderFavMovies = ({data}: any) => {  
        const handleDelete = (key: string) => {
            firestore()
            .collection('users/favorites/' + user.uid)
            .doc(key)
            .delete()    
        }
        return(
            <View style={{ height, alignItems: 'center', justifyContent:'center', padding:width/6 }}>
                <Text style={{color: 'white'}}>{data.data.item.title} </Text>
                 <Image borderRadius={100} width={200} height={200} source={{uri: `https://image.tmdb.org/t/p/w500${data.data.item.poster_path}`}} />
                 <Button title='deletar' onPress={() => handleDelete(data.id)} />
            </View>
        )
        
    }
    

    


  return (
        <Background>
        <Text style={{color: 'white', fontSize: 24, textAlign: 'center',top: 20}}> Favoritos </Text>
            <FlatList horizontal data={favorites} renderItem={({item}: any) => <RenderFavMovies data={item} /> }/>
        </Background>
  )
}

export default Favorites