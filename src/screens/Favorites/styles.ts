import { Dimensions } from "react-native";
import { styled } from "styled-components/native";

export const Container = styled.View`
    justify-content: center;
    align-content: center;
`

export const Title = styled.Text`
    color: white; 
    font-size: 20; 
    text-align: center; 
    background-color: #0e0e0e; 
    width: ${Dimensions.get('window').width}; 
    padding: 20px
`