import React from 'react'
import { SafeAreaView } from 'react-native'
import { View } from './Themed';

interface CenterProps {

}

export const Center: React.FC<CenterProps> = ({ children }) => {
    return (
        <View>
            {children}
        </View>
    );
}