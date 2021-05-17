import { Ionicons, Foundation } from '@expo/vector-icons';
import React from 'react'
import { View, TextInput } from 'react-native';

interface HeaderTopProps {

}

export const HeaderTop: React.FC<HeaderTopProps> = ({ }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', borderWidth: 2, padding: 3, flex: 1, marginLeft: 3 }}>
                <Ionicons name="ios-search" size={24} color="black" />
                <TextInput style={{ flex: 1, marginLeft: 7, fontSize: 15 }} />
            </View>
            <View style={{ paddingHorizontal: 10, flexDirection: 'row' }}>
                <Ionicons name="ios-chatbubbles-outline" size={24} color="black" />
                <Foundation name="list" size={24} color="black" style={{ marginLeft: 10 }} />
            </View>
        </View>
    );
}