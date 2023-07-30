import { Dimensions } from "react-native";
import LinearGradient, { LinearGradientProps } from "react-native-linear-gradient";
import { styled } from "styled-components/native";

const {height} = Dimensions.get('window')

export const LinearButton = styled(LinearGradient)`
    width: 190px;
    height: 56px;
    margin-left: 20px;
    background-color: green;
    top: ${ height* 0.65 };
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`
export const ButtonContainer = styled.TouchableOpacity`
    width: 190px;
    height: 56px;
    margin-left: 20px;
    background-color: green;
    top: ${ height* 0.65 };
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`

export const Text = styled.Text`
    color: white;
    font-size: 16px;
    text-transform: uppercase;
`