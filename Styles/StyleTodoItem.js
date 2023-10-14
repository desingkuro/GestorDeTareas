import { StyleSheet } from "react-native"

export const StyleTodoItem = StyleSheet.create({
    todoItem: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height:70,
      },
      todoText: {
        width: 210,
        fontSize: 18,
        lineHeight: 24,
        fontWeight: 400,
      },
      todoTextComplete: {
        textDecorationLine: 'line-through',
        color: '#4f4e4e',
      },
      iconImage: {
        width: 20,
        height: 20,
      },
      icon: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        width: 49,
        fontSize: 24,
        fontWeight: 'bold',
      },
      iconActive: {
        color: '#4acf50',
      },
      iconCheck: {
        position: 'absolute',
        left: 12,
      },
      iconDelete: {
        position: 'absolute',
        right: 12,
      },
      iconDeleteHover: {
        color: 'red',
      },
})