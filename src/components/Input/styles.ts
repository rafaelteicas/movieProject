import { Dimensions, TextInputProps } from "react-native";
import { styled } from "styled-components/native";

const { width } = Dimensions.get('window');

export const MainInput = styled.TextInput`
    border: 1px solid white;
    width: ${width * 0.85};
    height: 50px ;
    border-radius: 10px;
    margin-bottom: 15px;
    color: white;
    padding: 15px;
`


export const Text = styled.Text`
    font-size: 14px;
    color: white;
    margin-bottom: 8px;
`