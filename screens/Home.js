import { View} from "react-native";
import { Grafico } from "../components/Grafico";
import { StyleHome } from "../Styles/StyleHome";
import { ScrollView } from "react-native";
import { Task } from "../components/Task";

export function Home(){
    return(
        <View style={StyleHome.contenedorPrincipal}>
            <Grafico/>
            <ScrollView style={StyleHome.contenedorScroll}>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
            </ScrollView>

        </View>
    )
}
