import {View} from "react-native";
import { Grafico } from "../components/Grafico";
import { StyleHome } from "../Styles/StyleHome";
import { ScrollView } from "react-native";
import { Task } from "../components/Task";
import { Añadir } from "../components/Añadir";
import { ModalAñadir } from "../components/ModalAñadir";
import { useState } from "react";

export function Home(){
    const [toggleModal,setToggleModal] = useState(false);
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
            <Añadir toggleModal={setToggleModal}/>
            <ModalAñadir toggleModal={toggleModal} setToggleModal={setToggleModal}/>
        </View>
    )
}
