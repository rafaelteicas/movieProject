import { Dimensions } from "react-native";
import { styled } from "styled-components/native";

const { width, height } = Dimensions.get('window')

const Image = styled.Image`
  position: absolute;
  width: 100%;
  z-index: -0.4;
  `

const TextView = styled.View`
  flex: 1;
  top: ${height * 0.35}  ;
  padding: 20px;
  z-index: 9999;
  `

const Title = styled.Text`
    color: white; 
    font-size: 20; 
    font-weight: bold;
    text-align: center;
    `

const Date = styled.Text`
    color: white; 
    text-align: center;
    `

const OverView = styled.Text`
    color: white; 
    top:20;
    left: 20; 
`
const Cast = styled.Image`
  width: 100;
  height: 100;
  border-radius: 50;
  background-color: 10;
`

export {
  Image,
  Title,
  Date,
  TextView,
  OverView,
  Cast
}