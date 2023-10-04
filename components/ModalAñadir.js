import { Modal, TouchableOpacity, View } from "react-native";
import { StyleModal } from "../Styles/StyleModal";
import { AntDesign } from '@expo/vector-icons';

export function ModalAñadir({toggleModal,setToggleModal}){
    return(
        <Modal
            animationType="slide"
            visible={toggleModal}
            style={StyleModal.Modal}
            transparent={false}
        >
            <View style={StyleModal.contenedorModal}>
                <View style={StyleModal.mensaje}>
                    <TouchableOpacity onPress={()=>setToggleModal(false)} style={StyleModal.botonClose}>
                        <AntDesign name="back" size={34} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}