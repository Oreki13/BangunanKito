import { FontAwesome } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Image, Text } from 'react-native';
import Dim from '../constants/Layout'
import { HomeParamList } from '../types';

interface CardProdactProps {
    navigation: StackNavigationProp<HomeParamList, 'Home'>
}

export const CardProdact: React.FC<CardProdactProps> = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => { navigation.push('Details') }}>
            <View style={{ borderWidth: 2, width: Dim.window.width / 2.2, paddingBottom: 8, margin: 8 }}>
                <Image width={100} height={100} style={{ width: Dim.window.width / 2.25, height: 200, padding: 5 }} source={require('../assets/images/palu.jpeg')} />
                <View style={{ padding: 5 }}>
                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                        <FontAwesome name="star" size={24} color="black" />
                        <FontAwesome name="star" size={24} color="black" />
                        <FontAwesome name="star" size={24} color="black" />
                        <FontAwesome name="star-half-empty" size={24} color="black" />
                    </View>
                    <Text style={{ fontSize: 22, paddingTop: 5 }}>Palu</Text>
                    <Text style={{ fontSize: 22, color: 'red', paddingTop: 5 }}>Rp 10.000</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}