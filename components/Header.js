import { View, Image, Text } from "react-native";
import waveImg from "../assets/wave.png";
import { StyleHeader } from "../Styles/StyleHeader";

export function Header() {
  return (
    <View style={StyleHeader.contenedor}>
        <View style={StyleHeader.segundo}>
            <Text style={StyleHeader.textWelcome}>Welcome!</Text>
            <Image source={waveImg} style={StyleHeader.image}/>
        </View>
        <Text style={StyleHeader.name}>Walter Jiménez</Text>
    </View>
  )
}
