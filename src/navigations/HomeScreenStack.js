import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {Constants} from '../constants';
import Theme from '../theme/Theme';
import {ExploreMoreScreen} from '../screens';

const Stack = createNativeStackNavigator();

const HomeScreenStack = () => {
  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.bgColor1}
        barStyle={'light-content'}
        hidden={false}
      />
      <Stack.Navigator initialRouteName={Constants.EXPLORE_MORE_SCREEN}>
        <Stack.Screen
          name={Constants.EXPLORE_MORE_SCREEN}
          component={ExploreMoreScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default HomeScreenStack;
