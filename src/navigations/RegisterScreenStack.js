import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Theme from '../theme/Theme';
import {
  RegisterAcceptanceScreen,
  RegisterAddressMapScreen,
  RegisterAddressScreen,
  RegisterCheckScreen,
  RegisterFaceIDScreen,
  RegisterOTPScreen,
  RegisterPersonalScreen,
  RegisterPinScreen,
  RegisterScreen,
} from '../screens';
import {Constants} from '../constants';

const Stack = createNativeStackNavigator();

const RegisterScreenStack = () => {
  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.bgColor1}
        barStyle={'light-content'}
        hidden={false}
      />
      <Stack.Navigator initialRouteName={Constants.REGISTER_FACEID_SCREEN}>
        <Stack.Screen
          name={Constants.REGISTER_SCREEN}
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.REGISTER_OTP_SCREEN}
          component={RegisterOTPScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.REGISTER_PERSONAL_SCREEN}
          component={RegisterPersonalScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.REGISTER_ADDRESS_SCREEN}
          component={RegisterAddressScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.REGISTER_ADDRESS_MAP_SCREEN}
          component={RegisterAddressMapScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.REGISTER_CHECK_SCREEN}
          component={RegisterCheckScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.REGISTER_ACCEPTANCE_SCREEN}
          component={RegisterAcceptanceScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.REGISTER_PIN_SCREEN}
          component={RegisterPinScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.REGISTER_FACEID_SCREEN}
          component={RegisterFaceIDScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default RegisterScreenStack;
