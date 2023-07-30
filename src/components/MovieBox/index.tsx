import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from '../../screens/Home/style';
import axios from 'axios';

const { width, height } = Dimensions.get('window')

interface categoryProps {
    title?: string;
    icon?: string;
    onPress?: any;
    name?: any;
    isFirst?: boolean;
    isSelected?: boolean;
    image?: string
}



const MovieBox = ({title, name, onPress, isFirst, isSelected, image }: categoryProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, isFirst? {marginLeft: 24} : {}]}>
            <View style={[styles.iconContainer, isSelected? { backgroundColor: '#000' }: null]}>
                <Image style={styles.icon} source={ require('../../assets/test.jpg') } />
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 12,
        width: width/2,
    },
    title: {
        color: 'white',
    },
    iconContainer: {
        backgroundColor: 'white',
        height: height/3,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: 'white',
        width: width/2,
    }
})

export default MovieBox