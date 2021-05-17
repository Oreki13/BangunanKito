import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import Dim from '../constants/Layout'

interface CardPesananProps {
    title: string
}

export const CardPesanan: React.FC<CardPesananProps> = ({ title }) => {
    return (
        <View>
            <View style={{ borderWidth: 2, paddingBottom: 8, margin: 8 }}>
                <View>
                    <View style={{ flexDirection: 'row' }}>
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
                    <TouchableOpacity>
                        <View style={{ backgroundColor: '#f7dd19', marginTop: 30, marginHorizontal: 10, borderRadius: 5, padding: 10 }}>
                            <Text style={{ fontSize: 17, textAlign: 'center' }}>{title}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}