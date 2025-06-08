import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {Constants} from '../constants';
import Theme from '../theme/Theme';
import {
  GoalCarouselScreen,
  InvestLowFundScreen,
  MonthlyInvestmentScreen,
  SavingScreen,
  SelectSimpleFundScreen,
  TopUpScreen,
} from '../screens';

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
        <Stack.Screen
          name={Constants.INVEST_LOW_FUND_SCREEN}
          component={InvestLowFundScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.MONTHLY_INVESTMENT_SCREEN}
          component={MonthlyInvestmentScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.SELECT_SIMPLE_FUND_SCREEN}
          component={SelectSimpleFundScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Constants.TOPUP_SCREEN}
          component={TopUpScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default SavingScreenStack;
