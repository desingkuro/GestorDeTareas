import { TouchableOpacity, Text, Image} from "react-native";
import add  from '../assets/add.png'
import { StyleCreateTaskButton } from "../Styles/StyleCreateTaskButton";

export function CreateTaskButton({ setOpenModal }){
    return(
        <TouchableOpacity 
            style={StyleCreateTaskButton.contenedorPrincipal} 
            onPress = {() => {
                setOpenModal(state => !state)
              }}
        >
            <Image source={add} style={StyleCreateTaskButton.addImg}/>
            <Text style={StyleCreateTaskButton.textBoton}>Add task</Text>
        </TouchableOpacity>
    )
}