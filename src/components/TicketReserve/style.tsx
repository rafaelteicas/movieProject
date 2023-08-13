import { TouchableOpacityProps } from "react-native";
import { styled } from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    justify-content: center;

`

export const Square = styled.TouchableOpacity`
    width: 20;
    height: 20;
    margin: 10px;
    ${(props) => props.isAvaliable ? `background-color: rgb(255, 165, 0)` : `background-color: rgba(112, 94, 61, 0.822)`}
`