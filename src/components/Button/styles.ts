import { Dimensions } from "react-native";
import LinearGradient, { LinearGradientProps } from "react-native-linear-gradient";
import { styled } from "styled-components/native";


const {width} = Dimensions.get('window')

export const LinearButton = styled(LinearGradient)`
    width: ${width*0.85} ;
    height: 56px;
    background-color: green;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
export const ButtonContainer = styled.TouchableOpacity`

`

export const Text = styled.Text`
    color: white;
    font-size: 16px;
    text-transform: uppercase;
`