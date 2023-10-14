import { useContext } from 'react';
import { View, Text} from 'react-native';
import { TodoContext } from './TodoContext';
import { StyleTodoCounter } from '../Styles/StyleTodoCounter';


export function TodoCounter() { 
  const {
    completedTodos,
    inProgressTodos,  
  } = useContext(TodoContext)

  return (
    <View style={StyleTodoCounter.TodoCounter}>
        <Text>{completedTodos} completed</Text>
        <Text>{inProgressTodos} in progress</Text>
    </View>
    
  )
}
