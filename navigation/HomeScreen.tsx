import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View, Text } from 'react-native';
import { Detail } from '../screens/Detail';
import { TabOneScreen } from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { TopTabNavigator } from './TopTabNavigator';

interface HomeScreenProps {

}
const Stack = createStackNavigator()

export const HomeScreen: React.FC<HomeScreenProps> = ({ }) => {
    return (
        <Stack.Navigator initialRouteName='Home' >
            <Stack.Screen name="Home" options={{ header: () => null }} component={TabOneScreen} />
            <Stack.Screen name="Details" component={Detail} />
        </Stack.Navigator>
    );
}