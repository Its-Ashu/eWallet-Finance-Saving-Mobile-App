import React, {useState} from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';
import {Button, NextButton} from '../../../components/Button';
import {InputText} from '../../../components/InputText';
import {ProgressBar} from '../../../components/ProgressBar';
import { Constants } from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';

const RegisterAddressScreen = props => {
  //All States
  //Main States
  const [streetAddress, setStreetAddress] = useState('');
  const [aptNo, setAptNo] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [zipCode, setZipCode] = useState('');

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
              progress={0.500}
              backIcon={true}
              onPressback={() => {
                props.navigation.goBack();
              }}
            />
            <Text style={styles.textTitle}>{'Home address'}</Text>
          </View>
          <InputText
            value={streetAddress}
            title={'Street address'}
            onChangeText={setStreetAddress}
          />
          <InputText
            value={aptNo}
            title={'Apt / Suite number'}
            onChangeText={setAptNo}
          />
          <InputText value={city} title={'City'} onChangeText={setCity} />
          <InputText value={region} title={'Region'} onChangeText={setRegion} />
          <InputText
            value={zipCode}
            title={'Zip code'}
            onChangeText={setZipCode}
          />
          <View style={[styles.viewRow, styles.marginT24]}>
            <Button
              viewMain={{marginHorizontal: 0}}
              viewStyle={styles.viewButton}
              onPress={() => {props.navigation.navigate(Constants.REGISTER_ADDRESS_MAP_SCREEN);}}
              title={'Show on map'}
            />
            <NextButton
              onPress={() => {
                props.navigation.navigate(Constants.REGISTER_CHECK_SCREEN);
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default RegisterAddressScreen;
