import React, {useState} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {NextButton} from '../../../components/Button';
import {InputText} from '../../../components/InputText';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';
const LoginScreen = props => {
  //All States
  //Main States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.bgColor2}
        barStyle={'dark-content'}
        hidden={false}
      />
      <SafeAreaView style={styles.viewMainContainer}>
        <View style={styles.container}>
          <View style={styles.viewTop}>
            <Text style={styles.textTitle}>{'Welcome back'}</Text>
            <Text style={styles.textSubTitle}>{'Sign in to your account'}</Text>
          </View>
          <InputText
            viewMain={{marginVertical: Theme.responsiveSize.size08}}
            value={username}
            title={'Username'}
            onChangeText={setUsername}
          />
          <InputText
            viewMain={{marginVertical: Theme.responsiveSize.size08}}
            value={password}
            title={'Last name'}
            onChangeText={setPassword}
          />
          <View style={styles.viewRow}>
            <Text style={styles.textPassword}>{'Forgot password?'}</Text>
            <NextButton
              viewStyle={styles.viewButton}
              onPress={() => {
                props.navigation.navigate(Constants.LOGIN_PIN_SCREEN);
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
