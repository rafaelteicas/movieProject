import { StyleSheet } from "react-native";
import { styled } from "styled-components/native";

const HeaderView = styled.View`
    margin: 20px;
    flex-direction: row;
    justify-content: space-between;
    z-index: 1000;
`
const Text = styled.Text`
    margin-top: 5px;
    font-size: 18px;
`

const Title = styled.Text`
    color: #FFFFFF;
`

const styles = StyleSheet.create({
    iconStyle: {
        backgroundColor: '#ffffff2f',
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export {
    HeaderView,
    Text,
    Title,
    styles
}