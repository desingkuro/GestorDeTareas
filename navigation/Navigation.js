import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Entypo } from '@expo/vector-icons';


const tabNavigation = createBottomTabNavigator();

export function Navigation(){
    return(
        <tabNavigation.Navigator initialRouteName='Principal' screenOptions={{
            
        }}>
            <tabNavigation.Screen name='Principal' component={Home} options={{
                tabBarLabel:'',
                tabBarLabelStyle:{
                    fontSize:0,
                    color:'#000000',

                },
                tabBarIcon:()=>{
                    return <Entypo name="home" size={30} color="#000000" />
                }
            }}/>
        </tabNavigation.Navigator>
    )
}