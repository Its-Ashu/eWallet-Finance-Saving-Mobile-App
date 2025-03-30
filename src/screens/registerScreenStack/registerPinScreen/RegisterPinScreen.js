import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ProgressBar} from '../../../components/ProgressBar';
import Theme from '../../../theme/Theme';
import styles from './styles';

const RegisterPinScreen = props => {
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
              progress={0.7}
              backIcon={false}
              onPressback={() => {}}
            />
            <Text style={styles.textTitle}>{'Create your PIN'}</Text>
            <Text style={styles.textSubTitle}>
              {'Create a four-digit passcode to secure your account'}
            </Text>
          </View>

          {/* PIN Indicators */}
          <View style={styles.pinContainer}>
            {[...Array(4)].map((_, index) => (
              <View
                key={index}
                style={[styles.pinDot, pin[index] && styles.pinDotFilled]}
              />
            ))}
          </View>

          {/* Numeric Keypad */}
          <View style={styles.keypadContainer}>
            {[
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              'reset',
              '0',
              'delete',
            ].map(key => (
              <TouchableOpacity
                key={key}
                style={styles.keyButton}
                onPress={() => handleKeyPress(key)}>
                <Text style={styles.keyText}>
                  {key === 'reset' ? 'Reset' : key === 'delete' ? '⌫' : key}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            style={styles.submitButton}
            disabled={pin.length < 4}>
            <Text style={styles.submitButtonText}>{'Set up PIN'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default RegisterPinScreen;
