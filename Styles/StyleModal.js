import { StyleSheet } from "react-native"

export const StyleModal = StyleSheet.create({
    Modal:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    contenedorModal:{
        backgroundColor:'rgba(223, 156, 226, 0.74)',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    mensaje:{
        height:500,
        width:370,
        backgroundColor:'#E4F1FF',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center', 
        position:'relative'
    }, 
    botonClose:{
        position:'absolute',
        top:10,
        left:10,
        height:50,
        width:50,
        justifyContent:'center',
        alignItems:'center',

    }
})