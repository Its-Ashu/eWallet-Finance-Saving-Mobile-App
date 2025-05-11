import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Theme from '../theme/Theme';
import {
  LoginPinScreen,
  LoginScreen,
  OnboardingHomeScreen,
  OnboardingWelcomeScreen,
} from '../screens';
import {Constants} from '../constants';
import RegisterScreenStack from './RegisterScreenStack';
import ScreenStackNavigation from './ScreenStackNavigation';

const Stack = createNativeStackNavigator();

const AuthStackNavigation = () => {
  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.bgColor1}
        barStyle={'light-content'}
        hidden={false}
      />
      <Stack.Navigator initialRouteName={Constants.SCREEN_STACK_NAVIGATION}>
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
        <Stack.Screen
          name={Constants.LOGIN_SCREEN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.LOGIN_PIN_SCREEN}
          component={LoginPinScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.SCREEN_STACK_NAVIGATION}
          component={ScreenStackNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthStackNavigation;
