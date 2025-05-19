import React, {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ProgressBar} from '../../../components/ProgressBar';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';

const SavingScreen = props => {
  //All States
  //Main States
  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.appColor}
        barStyle={'light-content'}
        hidden={false}
      />
      <SafeAreaView style={styles.viewMainContainer}>
        <View style={styles.container}>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <View style={styles.viewTop}>
              <ProgressBar
                progress={0.5}
                closeIcon={true}
                onPressClose={() => {
                  props.navigation.goBack();
                }}
              />
              <Text style={styles.textTitle}>{'Add savings'}</Text>
            </View>
            <View style={styles.viewFeatureCard}>
              <Text style={styles.textFeatureTitle}>
                {'Select a simple fund'}
              </Text>
              <Text style={styles.textFeatureSubTitle}>
                {`Take a driver’s license, 
national identity card or passport photo`}
              </Text>
              <View style={styles.viewRow}>
                <Pressable
                  style={styles.viewPlus}
                  onPress={() => {
                    props.navigation.navigate(Constants.GOAL_CAROUSEL_SCREEN);
                  }}>
                  <Image
                    style={styles.plusIcon}
                    tintColor={Theme.colors.bgColor4}
                    source={Theme.icons.Plus_White_Icon}
                  />
                </Pressable>
                <Text style={styles.textFeatureCommonTitle}>{'Select'}</Text>
              </View>
            </View>
            <View style={styles.viewFeatureCard}>
              <Text style={styles.textFeatureTitle}>
                {'Set up a saving goal'}
              </Text>
              <Text style={styles.textFeatureSubTitle}>
                {`It’s required by law 
to verify your identity as a new user`}
              </Text>

              <View style={styles.viewRow}>
                <Pressable
                  style={styles.viewPlus}
                  onPress={() => {
                    props.navigation.navigate(Constants.GOAL_CAROUSEL_SCREEN);
                  }}>
                  <Image
                    style={styles.plusIcon}
                    tintColor={Theme.colors.bgColor4}
                    source={Theme.icons.Plus_White_Icon}
                  />
                </Pressable>
                <Text style={styles.textFeatureCommonTitle}>{'Select'}</Text>
              </View>
            </View>
            <View style={styles.viewFeatureCard}>
              <Text style={styles.textFeatureTitle}>{`Set up recurring 
investment`}</Text>
              <Text style={styles.textFeatureSubTitle}>
                {`Verify your identity as a new user`}
              </Text>

              <View style={styles.viewRow}>
                <Pressable
                  style={styles.viewPlus}
                  onPress={() => {
                    props.navigation.navigate(Constants.GOAL_CAROUSEL_SCREEN);
                  }}>
                  <Image
                    style={styles.plusIcon}
                    tintColor={Theme.colors.bgColor4}
                    source={Theme.icons.Plus_White_Icon}
                  />
                </Pressable>
                <Text style={styles.textFeatureCommonTitle}>{'Select'}</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SavingScreen;
