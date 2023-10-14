import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import checkBox from '../assets/checkbox.png';
import square from '../assets/square.png';
import deleteTask from '../assets/closeAlt.png';
import { StyleTodoItem } from '../Styles/StyleTodoItem';

export function TodoItem(props) {
  return (
    <View style={StyleTodoItem.todoItem}>
      <TouchableOpacity
        style={[
          StyleTodoItem.icon, StyleTodoItem.iconCheck,
          props.completed && StyleTodoItem.iconActive,
        ]}
        onPress={props.onComplete}
      >
        <Image source={props.completed ? checkBox : square} style={StyleTodoItem.iconImage} />
      </TouchableOpacity>
      <Text
        style={[
          StyleTodoItem.todoText,
          props.completed && StyleTodoItem.todoTextComplete,
        ]}
      >
        {props.text}
      </Text>
      <TouchableOpacity
        style={[StyleTodoItem.icon, StyleTodoItem.iconDelete]}
        onPress={props.onDelete}
      >
        <Image source={deleteTask} style={StyleTodoItem.iconImage} />
      </TouchableOpacity>
    </View>
  );
}




