
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import Home from '../screens/Home';
import Details from '../screens/Details';
import Settings from '../screens/Settings';
import { DrawerStackList } from '../types/navigation';

const Drawer = ({navigation}:any) => {
    const Drawr = createDrawerNavigator<DrawerStackList>();
    
    return (
        <Drawr.Navigator initialRouteName="Home" screenOptions={{headerShown:false}} >
            <Drawr.Screen name="Home" component={Home} />
            <Drawr.Screen name="Details" component={Details} initialParams={{ id: 0 }} />
            <Drawr.Screen name="Settings" component={Settings} />
        </Drawr.Navigator>
    )
}

export default Drawer

