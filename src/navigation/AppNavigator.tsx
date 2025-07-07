import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ROUTE_NAMES} from '../constants/routes';
import {
  ActivitiesReadyScreen,
  AlreadyAccount,
  GetStart,
  PakagesScreen,
  SearchingActivitiesScreen,
  SplashScreen,
  WelcomeScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE_NAMES.SPLASH}
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
        name={ROUTE_NAMES.PAKAGESSCREEN}
        component={PakagesScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
