import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import Theme from '../../theme/Theme';
import styles from './styles';

const Button = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.viewMain, props.viewMain]}
      onPress={props.onPress}>
      <View style={[styles.button, props.viewStyle]}>
        {props.plusIcon ? (
          <Image style={styles.plusIcon} source={Theme.icons.Plus_White_Icon} />
        ) : null}
        <Text style={[styles.buttonText, props.textStyle]}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
