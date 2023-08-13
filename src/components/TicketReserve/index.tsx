import { View, Text, StyleProp, TextStyle, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { cineSala } from '../../data/cine';
import { FlatList } from 'react-native-gesture-handler';
import { Container, Square} from './style';

interface Chairs {
    item?: any;
}

const MovieTheater = ({ ...item }: Chairs) => {
    useEffect((
       () => setAvaliable(item.item?.disponivel)
    ),[])
    const [avaliable,setAvaliable] = useState<boolean>();

    return(
        <>
          { avaliable ? (<Square onPress={ (press) => console.log(press) } isAvaliable />) : (<Square />)}
        </>
    )
}

const TicketReserve = () => {
  return (
    <Container>
          <Text>Escolha seu lugar...</Text>
        <FlatList horizontal data={cineSala.filaA} renderItem={(item) => <MovieTheater {...item} />} />
        <FlatList horizontal data={cineSala.filaB} renderItem={(item) => <MovieTheater {...item} />} />
        <FlatList horizontal data={cineSala.filaC} renderItem={(item) => <MovieTheater {...item} />} />
        <FlatList horizontal data={cineSala.filaD} renderItem={(item) => <MovieTheater {...item} />} />
    </Container>
  )
}

export default TicketReserve