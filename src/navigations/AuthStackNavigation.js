import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Theme from '../theme/Theme';
import {OnboardingHomeScreen, OnboardingWelcomeScreen} from '../screens';
import { Constants } from '../constants';
import RegisterScreenStack from './RegisterScreenStack';

const Stack = createNativeStackNavigator();

const AuthStackNavigation = () => {
  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.bgColor1}
        barStyle={'light-content'}
        hidden={false}
      />
      <Stack.Navigator initialRouteName={Constants.REGISTER_SCREEN_STACK}>
        <Stack.Screen
          name={Constants.ONBOARDING_HOME_SCREEN}
          component={OnboardingHomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.ONBOARDING_WELCOME_SCREEN}
          component={OnboardingWelcomeScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name={Constants.REGISTER_SCREEN_STACK}
          component={RegisterScreenStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthStackNavigation;
