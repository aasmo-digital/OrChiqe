import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ROUTE_NAMES} from '../constants/routes';
import {
  ActivitiesReadyScreen,
  AlreadyAccount,
  GetStart,
  PackageScreen,
  SearchingActivitiesScreen,
  SplashScreen,
  WelcomeScreen,
} from '../screens';
import BottomTabNavigator from './BottomTabNavigator';
import BrowseScreen from '../screens/browse/BrowseScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE_NAMES.BOTTOMTABS}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTE_NAMES.SPLASH} component={SplashScreen} />
      <Stack.Screen name={ROUTE_NAMES.WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={ROUTE_NAMES.GETSTART} component={GetStart} />
      <Stack.Screen
        name={ROUTE_NAMES.ALREADY_ACCOUNT}
        component={AlreadyAccount}
      />

      <Stack.Screen
        name={ROUTE_NAMES.SEARCHING_ACTIVITIES}
        component={SearchingActivitiesScreen}
      />
      <Stack.Screen
        name={ROUTE_NAMES.ACTIVITIES_READY}
        component={ActivitiesReadyScreen}
      />
      <Stack.Screen
        name={ROUTE_NAMES.PackageScreen}
        component={PackageScreen}
      />
      <Stack.Screen
        name={ROUTE_NAMES.BOTTOMTABS}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
