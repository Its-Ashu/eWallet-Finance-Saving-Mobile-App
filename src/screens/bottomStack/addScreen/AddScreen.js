import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Theme from '../../../theme/Theme';
import styles from './styles';

const AddScreen = props => {
  //All States
  //Main States
  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.appColor}
        barStyle={'light-content'}
        hidden={false}
      />
      <SafeAreaView style={styles.viewMainContainer}>
        <View style={styles.container}></View>
      </SafeAreaView>
    </>
  );
};

export default AddScreen;
