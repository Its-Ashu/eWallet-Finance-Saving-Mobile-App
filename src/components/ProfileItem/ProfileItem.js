import {Image, Text, View, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import Theme from '../../theme/Theme';

const ProfileItem = props => {
  return (
    <>
      <View style={styles.viewMain}>
        <View style={styles.viewIcon}>
          <Image style={styles.iconImage} source={props.icon} />
        </View>
        <Text style={styles.textTitle}>{props.title}</Text>
        <Pressable onPress={props.onPress}>
          <Image
            style={styles.iconImage}
            tintColor={Theme.colors.textColor12}
            source={Theme.icons.Next_Icon}
          />
        </Pressable>
      </View>
      {props.divider ? <View style={styles.divider} /> : null}
    </>
  );
};

export default ProfileItem;
