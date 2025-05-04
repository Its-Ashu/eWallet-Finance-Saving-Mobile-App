import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Pressable,
  Image,
} from 'react-native';
import {ProgressBar} from '../../../components/ProgressBar';
import Theme from '../../../theme/Theme';
import styles from './styles';

const VerifyIdentityScreen1 = props => {
  //All States
  //Main States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
            <ProgressBar
              progress={0.5}
              closeIcon={true}
              onPressClose={() => {
                props.navigation.goBack();
              }}
            />
            <Text style={styles.textTitle}>{'Verify identity'}</Text>
          </View>
          <View style={styles.viewFeatureCard}>
            <Text style={styles.textFeatureTitle}>{'Government ID'}</Text>
            <Text style={styles.textFeatureSubTitle}>
              {'Take a driver’s license, national identity card or passport photo'}
            </Text>
            <View style={styles.viewRow}>
              <Pressable
                style={styles.viewPlus}
                onPress={() => {
                  props.navigation.navigate(Constants.VERIFY_IDENTITY_SCREEN_1);
                }}>
                <Image
                  style={styles.plusIcon}
                  tintColor={Theme.colors.bgColor4}
                  source={Theme.icons.Plus_White_Icon}
                />
              </Pressable>
              <Text style={styles.textFeatureCommonTitle}>
                {'Select'}
              </Text>
            </View>
          </View>
          <View style={styles.viewFeatureCard}>
            <Text style={styles.textFeatureTitle}>{'Selfie photo'}</Text>
            <Text style={styles.textFeatureSubTitle}>
              {'It’s required by law to verify your identity as a new user'}
            </Text>
            <View style={styles.viewRow}>
              <Pressable
                style={styles.viewPlus}
                onPress={() => {
                  props.navigation.navigate(Constants.VERIFY_IDENTITY_SCREEN_1);
                }}>
                <Image
                  style={styles.plusIcon}
                  tintColor={Theme.colors.bgColor4}
                  source={Theme.icons.Plus_White_Icon}
                />
              </Pressable>
              <Text style={styles.textFeatureCommonTitle}>
                {'Select'}
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default VerifyIdentityScreen1;
