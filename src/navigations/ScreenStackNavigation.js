import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {Constants} from '../constants';
import Theme from '../theme/Theme';
import BottomTabNavigation from './BottomTabNavigation';
import {
  ExploreMoreScreen,
  PassportCameraScreen,
  PassportCheckScreen,
  SelfieCameraScreen,
  VerifyIdentityScreen1,
} from '../screens';
import HomeScreenStack from './HomeScreenStack';
import SavingScreenStack from './SavingScreenStack';

const Stack = createNativeStackNavigator();

const ScreenStackNavigation = () => {
  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.bgColor1}
        barStyle={'light-content'}
        hidden={false}
      />
      <Stack.Navigator initialRouteName={Constants.SAVING_SCREEN_STACK}>
        <Stack.Screen
          name={Constants.BOTTOM_TAB_NAVIGATION}
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.VERIFY_IDENTITY_SCREEN_1}
          component={VerifyIdentityScreen1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.PASSPORT_CAMERA_SCREEN}
          component={PassportCameraScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.PASSPORT_CHECK_SCREEN}
          component={PassportCheckScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.SELFIE_CAMERA_SCREEN}
          component={SelfieCameraScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.SAVING_SCREEN_STACK}
          component={SavingScreenStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default ScreenStackNavigation;
