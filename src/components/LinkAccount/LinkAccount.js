import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Theme from '../../theme/Theme';
import {Button} from '../Button';

const LinkAccount = props => {
  return (
    <View style={[styles.viewAccountCard, props.viewStyle]}>
      <Image style={styles.cardIcon} source={props.icon} />
      <View style={{marginVertical: Theme.responsiveSize.size22}}>
        <Text
          style={[styles.textFeatureTitle, {color: Theme.colors.textColor1}]}>
          {props.title}
        </Text>
        <Text
          style={[
            styles.textFeatureSubTitle,
            {color: Theme.colors.textColor6},
          ]}>
          {props.subTitle}
        </Text>
      </View>
      <Button
        viewMain={{
          marginHorizontal: 0,
        }}
        viewStyle={{
          backgroundColor: Theme.colors.bgColor1,
        }}
        title={props.buttonTitle}
        plusIcon={props.plusIcon}
        onPress={props.onPress}
      />
    </View>
  );
};

export default LinkAccount;
