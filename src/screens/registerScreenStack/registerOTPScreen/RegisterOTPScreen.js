import React, {useState, useRef} from 'react';
import {Text, SafeAreaView, StatusBar, View, TextInput} from 'react-native';
import {NextButton} from '../../../components/Button';
import {ProgressBar} from '../../../components/ProgressBar';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';

const RegisterOTPScreen = props => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleOtpChange = (text, index) => {
    if (text.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text !== '' && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyPress = (event, index) => {
    if (
      event.nativeEvent.key === 'Backspace' &&
      otp[index] === '' &&
      index > 0
    ) {
      inputRefs[index - 1].current.focus();
    }
  };

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
              progress={0.2}
              backIcon={true}
              onPressback={() => {
                props.navigation.goBack();
              }}
            />
            <Text style={styles.textTitle}>{'Enter 4-digit code'}</Text>
            <Text style={styles.textSubTitle}>
              {'We’ve sent the code to ****234'}
            </Text>
          </View>
          <View style={styles.viewRow}>
            {otp.map((digit, index) => (
              <View
                key={index}
                style={[
                  styles.viewOTP,
                  focusedIndex === index && {
                    borderColor: Theme.colors.darkBorder,
                  },
                ]}>
                <TextInput
                  ref={inputRefs[index]}
                  value={digit}
                  onChangeText={text => handleOtpChange(text, index)}
                  onFocus={() => setFocusedIndex(index)}
                  onBlur={() => setFocusedIndex(null)}
                  onKeyPress={event => handleKeyPress(event, index)}
                  keyboardType="number-pad"
                  maxLength={1}
                  style={styles.textInput}
                />
              </View>
            ))}
          </View>
          <Text style={styles.textResend}>{'Resend'}</Text>
          <NextButton
            onPress={() => {
              props.navigation.navigate(Constants.REGISTER_PERSONAL_SCREEN);
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default RegisterOTPScreen;
