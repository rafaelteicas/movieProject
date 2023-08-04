import { PressableProps } from "react-native";
import { styled } from "styled-components/native";

interface MainButton extends PressableProps {
    isFirst?: boolean
}

const MainButton = styled.Pressable`
    margin-horizontal: 12;
    width: width / 2;
    margin-bottom: 40
`

export {
    MainButton
}