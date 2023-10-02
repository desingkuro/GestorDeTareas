import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';


const tabNavigation = createBottomTabNavigator();

export function Navigation(){
    return(
        <tabNavigation.Navigator initialRouteName='Principal' >
            <tabNavigation.Screen name='Principal' component={Home} options={{
                tabBarLabel:'Principal',
                tabBarLabelStyle:{
                    fontSize:15,
                },
                tabBarIcon:()=>{
                    return <Entypo name="home" size={24} color="blue" />
                }
            }}/>
        </tabNavigation.Navigator>
    )
}