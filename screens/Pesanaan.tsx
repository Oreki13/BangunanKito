import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, Image, Button } from 'react-native';
import { View } from '../components/Themed';
import { Center } from '../components/Center'
import { HeaderV2 } from '../components/HeaderV2';
import { BottomTabParamList } from '../types'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Dim from '../constants/Layout'
import { CardPesanan } from '../components/CardPesanan';

interface PesanaanProps {
    navigation: StackNavigationProp<BottomTabParamList, 'Pesanan'>,
    route: RouteProp<BottomTabParamList, 'Pesanan'>
}

export const Dikirim: React.FC<PesanaanProps> = ({ route }) => {

    return (
        <SafeAreaView>
            {/* <HeaderV2 name={route.name} /> */}
            <View>
                <CardPesanan title='Pesanan Dikirim' />
                <CardPesanan title='Pesanan Dikirim' />
            </View>
        </SafeAreaView>
    );
}
export const Diterima: React.FC<PesanaanProps> = ({ route }) => {

    return (
        <SafeAreaView>
            {/* <HeaderV2 name={route.name} /> */}
            <View>
                <CardPesanan title='Tulis Ulasan' />
                <CardPesanan title='Tulis Ulasan' />
            </View>
        </SafeAreaView>
    );
}