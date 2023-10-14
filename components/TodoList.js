import { View, Text, ScrollView } from 'react-native';
import { StyleTodoList } from '../Styles/StyleTodoList';


export function TodoList({ children }) {
  return (
    <View style={StyleTodoList.containerTask}>
      <Text style={StyleTodoList.heading}>Tasks</Text>
      <ScrollView style={StyleTodoList.todoList}>
        <View style={StyleTodoList.containerList}>
          {children}
        </View>
      </ScrollView>
    </View>
  );
}