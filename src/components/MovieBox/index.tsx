import { View, Text, Pressable, StyleSheet, Dimensions, ImageBackground, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { Movie } from '../../screens/Home/Home';

const { width, height } = Dimensions.get('window')

interface categoryProps {
    title?: string;
    icon?: string;
    onPress?: any;
    name?: any;
    isFirst?: boolean;
    isSelected?: boolean;
    image?: string;
    data?: any;
}



const MovieBox = ({ title, name, onPress, isFirst, isSelected, data }: categoryProps) => {






    return (
        <Pressable onPress={onPress} style={[styles.container, isFirst ? { marginLeft: 24 } : {}]}>
            <View >
                <Image style={styles.icon} source={{ uri: 'https://image.tmdb.org/t/p/w500' + data.item.poster_path }} />
                <Text style={styles.title}>{data.item.title}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 12,
        width: width / 2,
    },
    title: {
        color: 'red',
    },
    iconContainer: {
        height: height / 3,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 200,
        height: 300

    }
})

export default MovieBox