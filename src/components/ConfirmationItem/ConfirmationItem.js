import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const ConfirmationItem = props => {
  return (
    <View style={styles.viewMain}>
      <View style={{flex: 1}}>
        <Text style={styles.textTitle}>{props.title}</Text>
        <Text style={styles.textSubTitle}>{props.subTitle}</Text>
      </View>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.textEdit}>{'Edit'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmationItem;
