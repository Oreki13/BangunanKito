import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View, Text } from 'react-native';
import { Dikirim, Diterima } from '../screens/Pesanaan';
import { TopTabNavigatorParamList } from '../types';

interface TopTabNavigatorProps {

}

const Tab = createMaterialTopTabNavigator<TopTabNavigatorParamList>();
const Base = createStackNavigator()
export const TopTabNavigator: React.FC<TopTabNavigatorProps> = ({ }) => {
    return (

        <Tab.Navigator initialRouteName='Dikirim'>
            <Tab.Screen name="Dikirim" component={Dikirim} />
            <Tab.Screen name="Diterima" component={Diterima} />
        </Tab.Navigator>
    );
}

export const stackNav = () => {
    return (
        <Base.Navigator screenOptions={{ headerShown: true }}>
            <Base.Screen name='Pesanan' component={TopTabNavigator} />
        </Base.Navigator>
    )
}