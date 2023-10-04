import { StyleSheet } from "react-native"

export const StyleHome = StyleSheet.create({
    contenedorPrincipal:{
        flex:1,
        alignItems:'center',
        paddingLeft:30,
        paddingRight:30,
        gap:20,
        position:'relative'
    },
    contenedorGrafico:{
        width:350,
        height:280,
        alignItems:'center',
        marginTop:10
    },
    contenedorScroll:{
        width:370,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        height:300,
    }
})