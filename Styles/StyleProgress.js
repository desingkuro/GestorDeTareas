import { StyleSheet } from "react-native"

export const StyleProgress = StyleSheet.create({
    containerPrincipal:{
        marginTop: 20,
        height: 270,
    },
    containerChildren:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    counter:{
        width: 130
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4f4e4e',
    },
    progressImg:{
        width: 175,
        height: 200
    },
    addTask:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    }
})