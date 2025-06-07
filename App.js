import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigation from './src/navigations/AuthStackNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import ActionSheet from 'react-native-actions-sheet';
// import {registerSheet} from 'react-native-actions-sheet';

// registerSheet('DocumentPickerSheet', ActionSheet);
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <AuthStackNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
