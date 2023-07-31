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
export {
    HeaderView,
    Text
}