import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const CountryItem = props => {
  return (
    <View style={styles.viewMain}>
      <Image
        style={styles.flagIcon}
        resizeMode={'contain'}
        source={props.icon}
      />
      <Text style={styles.textTitle}>{props.title}</Text>
      <Text style={styles.textSubTitle}>{props.subTitle.toUpperCase()}</Text>
    </View>
  );
};

export default CountryItem;
