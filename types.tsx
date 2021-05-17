/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Keranjang: undefined;
  Pesanan: undefined;
  Akun: undefined;
};

export type HomeParamList = {
  Home: undefined;
  Details: undefined;
}

export type TopTabNavigatorParamList = {
  Dikirim: undefined;
  Diterima: undefined;
}

export type BottomTabProp<T extends keyof BottomTabParamList> = {
  navigation: StackNavigationProp<BottomTabParamList, T>,
  route: RouteProp<BottomTabParamList, T>,
}

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
