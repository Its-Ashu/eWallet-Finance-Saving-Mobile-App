import React from 'react';
import {SafeAreaView, StatusBar, View, Text, Image} from 'react-native';
import {Button} from '../../../components/Button';
import {ProgressBar} from '../../../components/ProgressBar';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';

const RegisterFaceIDScreen = props => {
  //All States
  //Main States

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
            <ProgressBar progress={1} backIcon={true} onPressback={() => {}} />
            <Text style={styles.textTitle}>{'Face ID for faster payment'}</Text>
            <Text style={styles.textSubTitle}>
              {
                'Enable Face ID to let you log in & proceed with your transactions faster'
              }
            </Text>
          </View>
          <View style={styles.viewMainScan}>
            <View style={styles.viewScan}>
              <Image style={styles.scanIcon} source={Theme.icons.Scan_Icon} />
            </View>
          </View>
          <Button
            title={'Enable face ID'}
            onPress={() => {
              props.navigation.navigate(Constants.LOGIN_SCREEN);
            }}
          />
          <Button
            viewMain={{marginBottom: Theme.responsiveSize.size20}}
            viewStyle={{backgroundColor: Theme.colors.bgColor2}}
            textStyle={{color: Theme.colors.textColor7}}
            title={'Skip, I’ll do this later'}
            onPress={() => {
              props.navigation.navigate(Constants.LOGIN_SCREEN);
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default RegisterFaceIDScreen;
