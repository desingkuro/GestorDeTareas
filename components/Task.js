import { View,Text} from "react-native";
import { StyleTask } from "../Styles/StyleTask";

export function Task(){
    return (
        <View style={StyleTask.contenedorPrincipal}>
            <Text style={StyleTask.textTask}>Wenas</Text>
        </View>
    )
}