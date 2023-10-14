import {View} from "react-native";
import { StyleHome } from "../Styles/StyleHome";
import { Header } from "../components/Header";
import { useContext } from "react";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoCounter } from "../components/TodoCounter";
import { TodoContext, TodoProvider } from "../components/TodoContext";
import { Progress } from "../components/Progress";
import { CreateTaskButton } from "../components/CreateTaskButton";

export function Home(){

    const {
        todos,
        completeTodo,
        deleteTodo,
        setOpenModal
    } = useContext(TodoContext);
   
    return(
        <TodoProvider>
            <View style={StyleHome.contenedorPrincipal}>
                <Header/>
                <Progress 
                    style={StyleHome.contenedorProgress}
                    setOpenModal = {setOpenModal}
                >
                    <TodoCounter/>
                    <CreateTaskButton
                        setOpenModal = {setOpenModal}
                    />
                </Progress>
                <TodoList>
                    {todos.map(todo => (
                        <TodoItem
                            key={todo.text} 
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}   
                </TodoList>
            </View>
        </TodoProvider>
    )
}
