import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Theme from '../../theme/Theme';

const LocationItem = props => {
  return (
    <View style={styles.viewMain}>
      <View style={styles.viewRowMain}>
        <Image style={styles.locationIcon} source={Theme.icons.Location_Icon} />
        <View style={styles.viewRow}>
          <View style={styles.viewContent}>
            <Text style={styles.textTitle}>{props.title}</Text>
            <Text style={styles.textSubTitle}>{props.subTitle}</Text>
          </View>
          <Image
            style={styles.locationIcon}
            source={Theme.icons.Down_Arrow_Icon}
          />
        </View>
      </View>
    </View>
  );
};

export default LocationItem;
