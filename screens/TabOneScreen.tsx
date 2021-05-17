import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderTop } from '../components/HeaderTop';
import { CardProdact } from '../components/CardProdact';
import { ScrollView } from 'react-native-gesture-handler';

import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabParamList, HomeParamList } from '../types';

interface TabOneScreenProps {
  navigation: StackNavigationProp<HomeParamList, 'Home'>
}

export const TabOneScreen: React.FC<TabOneScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <HeaderTop />
      <ScrollView style={{ marginTop: 15, marginBottom: 40 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <CardProdact navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
