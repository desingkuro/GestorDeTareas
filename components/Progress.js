import { useEffect, useContext, useState } from 'react';
import { View, Text, Image} from 'react-native';
import { CircularProgress } from 'react-native-circular-progress';
import { TodoContext } from './TodoContext';
import { ModalAñadir } from './ModalAñadir';
import { StyleProgress } from '../Styles/StyleProgress';
import grafica  from '../assets/ejemploGrafica.png'

export function Progress({children}) {
    const {
        todos,
        openModal,
        completedTodos,
        inProgressTodos,
      } = useContext(TodoContext);
    
      const totalTodos = todos.length;
      const [percentage, setPercentage] = useState(0);
    
      useEffect(() => {
        if (totalTodos) {
          const per = ((completedTodos * 100) / totalTodos).toFixed(0);
          setPercentage(per);
        } else {
          setPercentage(100);
        }
      }, [percentage, totalTodos, completedTodos, inProgressTodos]);
    
      return (
        <View style={StyleProgress.containerPrincipal}>
          <Text style={StyleProgress.text}>Progress</Text>
          <View style={StyleProgress.containerChildren}>
            <Text style={StyleProgress.counter}>{children[0]}</Text>
            <View style={StyleProgress.progressBar}>
              <Image source={grafica} style={StyleProgress.progressImg}/>
              {/* <CircularProgress
                size={120}
                width={3}
                fill={50}
                tintColor="#00e0ff"
                backgroundColor="#3d5875">
              </CircularProgress> */}
            </View>
          </View>
          <View style={StyleProgress.addTask}>{children[1]}</View>
        </View>
      );
}
