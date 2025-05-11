import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {Button} from '../../../components/Button';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';

const PassportCameraScreen = props => {
  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.appColor}
        barStyle="light-content"
        hidden={false}
      />
      <SafeAreaView style={styles.viewMainContainer}>
        <View style={styles.container}>
          <Button
            viewMain={{flex: 1, justifyContent: 'center'}}
            title={'Passport Camera'}
            onPress={() => {
              props.navigation.navigate(Constants.PASSPORT_CHECK_SCREEN);
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default PassportCameraScreen;
