import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
const SearchItem = props => {
  return (
    <View style={styles.viewMain}>
      <View style={styles.viewIcon}>
        <Image style={styles.iconImage} source={props.icon} />
      </View>
      <Text style={styles.textTitle}>{props.title}</Text>
      <View style={[styles.viewPrice, props.viewPrice]}>
        <Text style={[styles.textSubTitle, props.textSubTitle]}>
          {props.subTitle}
        </Text>
      </View>
    </View>
  );
};

export default SearchItem;
