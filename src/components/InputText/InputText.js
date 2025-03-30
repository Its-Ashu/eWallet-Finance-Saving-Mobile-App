import {TextInput, View, Animated} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import Theme from '../../theme/Theme';

const InputText = props => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedLabel = useRef(new Animated.Value(props.value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: isFocused || props.value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, props.value]);

  const labelStyle = {
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [25, 12],
    }),
  };

  return (
    <View
      style={[
        styles.viewMain,
        {
          borderColor: isFocused
            ? Theme.colors.borderColor5
            : Theme.colors.borderColor4,
        },
      ]}>
      <Animated.Text style={[styles.textTitle, labelStyle]}>
        {props.title}
      </Animated.Text>
      <TextInput
        style={[
          styles.textInput,
          {
            paddingTop:
              isFocused || props.value ? Theme.responsiveSize.size30 : 0,
          },
        ]}
        value={props.value}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default InputText;
