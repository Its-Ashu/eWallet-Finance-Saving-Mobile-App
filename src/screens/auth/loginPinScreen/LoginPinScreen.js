import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Button} from '../../../components/Button';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';
const LoginPinScreen = props => {
  const [pin, setPin] = useState([]);

  const handleKeyPress = value => {
    if (value === 'reset') {
      setPin([]);
    } else if (value === 'delete') {
      setPin(pin.slice(0, -1));
    } else if (pin.length < 4) {
      setPin([...pin, value]);
    }
  };

  const listOfKeypadNumbers = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    ' ',
    '0',
    'delete',
    '',
    'reset',
    '  ',
  ];
  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.appColor}
        barStyle={'light-content'}
        hidden={false}
      />
      <SafeAreaView style={styles.viewMainContainer}>
        <View style={styles.container}>
          <View style={styles.viewTop}>
            <Text style={styles.textTitle}>{'Enter your PIN'}</Text>
          </View>

          <View style={styles.pinContainer}>
            {[...Array(4)].map((_, index) => (
              <View
                key={index}
                style={[styles.pinDot, pin[index] && styles.pinDotFilled]}
              />
            ))}
          </View>

          <View style={styles.keypadContainer}>
            {listOfKeypadNumbers.map(key => (
              <TouchableOpacity
                key={key}
                style={styles.keypadButton}
                onPress={() => handleKeyPress(key)}>
                <Text
                  style={[
                    styles.keypadText,
                    {
                      fontSize:
                        key === 'reset'
                          ? Theme.responsiveSize.size16
                          : Theme.responsiveSize.size24,
                      fontFamily:
                        key === 'reset'
                          ? Theme.fonts.fontSansBold
                          : Theme.fonts.fontSansRegular,
                    },
                  ]}>
                  {key === 'reset' ? 'Reset' : key === 'delete' ? '⌫' : key}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Button
            viewMain={{
              marginVertical: Theme.responsiveSize.size20,
            }}
            title={'Continue'}
            onPress={() => {
              props.navigation.navigate(Constants.REGISTER_FACEID_SCREEN);
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginPinScreen;
