import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {Constants} from '../constants';
import Theme from '../theme/Theme';
import BottomTabNavigation from './BottomTabNavigation';
import {VerifyIdentityScreen1} from '../screens';

const Stack = createNativeStackNavigator();

const ScreenStackNavigation = () => {
  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.bgColor1}
        barStyle={'light-content'}
        hidden={false}
      />
      <Stack.Navigator initialRouteName={Constants.VERIFY_IDENTITY_SCREEN_1}>
        <Stack.Screen
          name={Constants.VERIFY_IDENTITY_SCREEN_1}
          component={VerifyIdentityScreen1}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default ScreenStackNavigation;
