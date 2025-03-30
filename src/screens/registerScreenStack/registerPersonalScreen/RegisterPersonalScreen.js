import React, {useState} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {NextButton} from '../../../components/Button';
import {InputText} from '../../../components/InputText';
import {ProgressBar} from '../../../components/ProgressBar';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';

const RegisterPersonalScreen = props => {
  //All States
  //Main States
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

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
            <ProgressBar
              progress={0.375}
              backIcon={true}
              onPressback={() => {
                props.navigation.goBack();
              }}
            />
            <Text style={styles.textTitle}>{'Personal information'}</Text>
            <Text style={styles.textSubTitle}>
              {'We ask for your personal information to verify your identity'}
            </Text>
          </View>
          <InputText
            value={firstName}
            title={'First name'}
            onChangeText={setFirstName}
          />
          <InputText
            value={lastName}
            title={'Last name'}
            onChangeText={setLastName}
          />
          <InputText
            value={dateOfBirth}
            title={'Date of birth ( MM / DD / YYYY )'}
            onChangeText={setDateOfBirth}
          />
          <NextButton
            viewMainStyle={styles.marginT24}
            onPress={() => {
              props.navigation.navigate(Constants.REGISTER_ADDRESS_SCREEN);
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default RegisterPersonalScreen;
