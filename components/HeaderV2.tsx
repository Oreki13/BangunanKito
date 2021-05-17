import { Ionicons, Foundation } from '@expo/vector-icons';
import React from 'react'
import { Text } from 'react-native';
import { View, TextInput } from 'react-native';

interface HeaderV2 {
    name: string
}

export const HeaderV2: React.FC<HeaderV2> = ({ name }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 2 }}>
                {/* <Ionicons name="arrow-back" size={26} color="black" /> */}
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 18 }}>{name}</Text>

                </View>
            </View>
            <View style={{ paddingHorizontal: 10, flexDirection: 'row' }}>
                <Ionicons name="ios-chatbubbles-outline" size={24} color="black" />
                <Foundation name="list" size={24} color="black" style={{ marginLeft: 10 }} />
            </View>
        </View>
    );
}