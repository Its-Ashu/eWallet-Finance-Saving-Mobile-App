import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from '../../../components/Button';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';
const OnboardingHomeScreen = props => {
  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.appColor}
        barStyle={'light-content'}
        hidden={false}
      />
      <SafeAreaView style={styles.viewMainContainer}>
        <View style={styles.container}>
          <Text style={styles.textTitle}>{'Easiest way '}</Text>
          <Text style={styles.textTitle}>{'to start investing'}</Text>
          <Image
            style={styles.appImage}
            resizeMode={'contain'}
            source={Theme.icons.Start_Investing_Icon}
          />
          <Button
            title={'Get Started'}
            onPress={() => {
              props.navigation.navigate(Constants.ONBOARDING_WELCOME_SCREEN);
            }}
          />
          <Button
            viewStyle={{backgroundColor: Theme.colors.bgColor1}}
            title={'Sign In'}
            onPress={() => {
              props.navigation.navigate(Constants.LOGIN_SCREEN);
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default OnboardingHomeScreen;
