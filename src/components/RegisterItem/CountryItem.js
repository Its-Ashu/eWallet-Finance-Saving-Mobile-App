import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import styles from './styles';

const CountryItem = props => {
  return (
    <Pressable style={styles.viewMain} onPress={props.onPress}>
      <Image
        style={styles.flagIcon}
        resizeMode={'contain'}
        source={props.icon}
      />
      <Text style={styles.textTitle}>{props.title}</Text>
      <Text style={styles.textSubTitle}>{props.subTitle.toUpperCase()}</Text>
    </Pressable>
  );
};

export default CountryItem;
