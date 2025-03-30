import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import Theme from '../../theme/Theme';
import styles from './styles';

const NextButton = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.viewNext, props.viewMainStyle]}
      onPress={props.onPress}>
      <View style={[styles.nextButton, props.viewStyle]}>
        <Image style={styles.nextIcon} source={Theme.icons.Next_Icon} />
      </View>
    </TouchableOpacity>
  );
};

export default NextButton;
