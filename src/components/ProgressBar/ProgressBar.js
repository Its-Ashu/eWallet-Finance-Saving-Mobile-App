import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import Theme from '../../theme/Theme';
import styles from './styles';

const ProgressBar = props => {
  return (
    <View style={[styles.viewMain, props.viewMain]}>
      {props.backIcon ? (
        <TouchableOpacity onPress={props.onPressback}>
          <Image style={styles.backIcon} source={Theme.icons.Back_Icon} />
        </TouchableOpacity>
      ) : null}
      {props.closeIcon ? <View style={styles.backIcon} /> : null}
      {!props.backIcon && !props.closeIcon ? (
        <View style={styles.backIcon} />
      ) : null}
      <View style={[styles.viewProgress, props.viewProgress]}>
        <View
          style={[
            styles.viewInnerProgress,
            {width: `${props.progress * Theme.responsiveSize.size88}%`},
          ]}
        />
      </View>
      {!props.backIcon && !props.closeIcon ? (
        <View style={styles.backIcon} />
      ) : null}
      {props.backIcon ? <View style={styles.backIcon} /> : null}
      {props.closeIcon ? (
        <TouchableOpacity onPress={props.onPressClose}>
          <Image style={styles.backIcon} source={Theme.icons.Close_Icon} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default ProgressBar;
