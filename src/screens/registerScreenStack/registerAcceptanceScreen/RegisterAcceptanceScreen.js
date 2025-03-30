import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Theme from '../../../theme/Theme';
import styles from './styles';

const RegisterAcceptanceScreen = props => {
  //All States
  //Main States

  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.bgColor2}
        barStyle={'dark-content'}
        hidden={false}
      />
      <SafeAreaView style={styles.viewMainContainer}>
        <View style={styles.container}></View>
      </SafeAreaView>
    </>
  );
};

export default RegisterAcceptanceScreen;
