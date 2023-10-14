import { StyleSheet } from "react-native"

export const StyleHeader = StyleSheet.create({
    contenedor:{
        width: 370,
        height: 20,
        paddingLeft: 5,
    },
    segundo:{
        marginTop: 5,
        flexDirection: "row",
    },
    textWelcome:{
     fontSize: 12,   
    },
    image:{
        width: 20,
        height: 20,
        transform: [{ rotate: '60deg' }]
    },
    name:{
        fontSize: 16,
    }
})