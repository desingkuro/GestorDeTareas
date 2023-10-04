import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Entypo } from '@expo/vector-icons';


const tabNavigation = createBottomTabNavigator();

export function Navigation(){
    return(
        <tabNavigation.Navigator initialRouteName='Principal' screenOptions={{
            
        }}>
            <tabNavigation.Screen name='Principal' component={Home} options={{
                tabBarLabel:'Principal',
                tabBarLabelStyle:{
                    fontSize:15,
                    color:'#9D76C1'
                },
                tabBarIcon:()=>{
                    return <Entypo name="home" size={24} color="#9D76C1" />
                }
            }}/>
        </tabNavigation.Navigator>
    )
}