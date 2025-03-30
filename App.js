import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigation from './src/navigations/AuthStackNavigation';
import { GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <AuthStackNavigation />
    </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
