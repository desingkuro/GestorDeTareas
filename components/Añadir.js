import { TouchableOpacity, Text } from "react-native";
import { StyleAñadir } from "../Styles/StyleAñadir";

export function Añadir({toggleModal}){
    return(
        <TouchableOpacity style={StyleAñadir.contenedorPrincipal} onPress={()=>{toggleModal(true)}}>
            <Text style={StyleAñadir.textBoton}>Añadir Tarea</Text>
        </TouchableOpacity>
    )
}