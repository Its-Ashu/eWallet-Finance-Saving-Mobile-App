import React from 'react';
import {View, SafeAreaView, StatusBar, Text} from 'react-native';
import {Button} from '../../../components/Button';
import {ProgressBar} from '../../../components/ProgressBar';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';

const PassportCheckScreen = props => {
  const isFromSelfieCamera = props.route.params?.isFromSelfieCamera;

  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.appColor}
        barStyle="light-content"
        hidden={false}
      />
      <SafeAreaView style={styles.viewMainContainer}>
        <View style={styles.container}>
          <View style={styles.viewTop}>
            <ProgressBar
              progress={0.625}
              backIcon={true}
              onPressback={() => {
                props.navigation.goBack();
              }}
            />
            <Text style={styles.textTitle}>{'Check quality'}</Text>
            <Text style={styles.textSubTitle}>
              {`Please make sure your card details 
are clear to read with no blur or glare`}
            </Text>
          </View>
          {isFromSelfieCamera ? (
            <View style={styles.viewSelfie} />
          ) : (
            <View style={styles.viewPassport} />
          )}
          <View style={{flex: 1}} />
          <Button
            viewMain={{
              marginHorizontal: 0,
            }}
            title={'All clear'}
            onPress={() => {
              props.navigation.navigate(Constants.VERIFY_IDENTITY_SCREEN_1, {
                isFromPassportCheck: true,
                isFromSelfieCamera,
              });
            }}
          />
          <Button
            viewMain={{
              marginBottom: Theme.responsiveSize.size20,
              marginHorizontal: 0,
            }}
            viewStyle={{backgroundColor: Theme.colors.bgColor2}}
            textStyle={{color: Theme.colors.textColor7}}
            title={'Take a new photo'}
            onPress={() => {
              props.navigation.navigate(Constants.PASSPORT_CAMERA_SCREEN);
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default PassportCheckScreen;
