import React from "react";
import { TodoContext } from "./TodoContext";
import { Modal, TouchableOpacity, View } from "react-native";
import { StyleModal } from "../Styles/StyleModal";
import { AntDesign } from '@expo/vector-icons';

export function ModalAñadir(){
    const {
        setOpenModal,
        addTodo: addTask
      } = React.useContext(TodoContext);

      const [newTask, setNewTask] = React.useState('');
    
      const onSetTask = (event) => {
        addTask(newTask);
        setOpenModal(false);
      };
    
      const onSetModal = () => {
        setOpenModal(false);
      };
    
      const onChange = (event) => {
        setNewTask(event.target.value);
      };

    return(
        <Modal
            animationType="slide"
            visible={true}
            style={StyleModal.Modal}
            transparent={false}
        >
            <View style={StyleModal.contenedorModal}>
                <View style={StyleModal.mensaje}>
                    <TouchableOpacity onPress={onSetModal} style={StyleModal.botonClose}>
                        <AntDesign name="back" size={34} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}