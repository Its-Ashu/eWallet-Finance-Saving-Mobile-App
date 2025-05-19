import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {Constants} from '../constants';
import Theme from '../theme/Theme';
import {GoalCarouselScreen, SavingScreen} from '../screens';

const Stack = createNativeStackNavigator();

const SavingScreenStack = () => {
  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.bgColor1}
        barStyle={'light-content'}
        hidden={false}
      />
      <Stack.Navigator initialRouteName={Constants.SAVING_SCREEN}>
        <Stack.Screen
          name={Constants.SAVING_SCREEN}
          component={SavingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.GOAL_CAROUSEL_SCREEN}
          component={GoalCarouselScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default SavingScreenStack;
