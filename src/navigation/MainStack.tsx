import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Settings from '../screens/Settings';
import { MainStackParamList } from '../types/navigation';
import Drawer from './Drawer';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Drawer' component={Drawer} />
            {/* <Stack.Screen name='Details' component={Details} />
            <Stack.Screen name='Settings' component={Settings} /> */}
        </Stack.Navigator>
    )
}

export default MainStack

const styles = StyleSheet.create({})