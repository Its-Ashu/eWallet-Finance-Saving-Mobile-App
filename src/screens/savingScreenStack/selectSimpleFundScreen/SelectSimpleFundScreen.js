import React, {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Modal,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from '../../../components/Button';
import {ProgressBar} from '../../../components/ProgressBar';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';

const SelectSimpleFundScreen = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.bgColor2}
        barStyle={'dark-content'}
        hidden={false}
      />
      <SafeAreaView style={styles.viewMainContainer}>
        <View style={styles.container}>
          <View style={styles.viewTop}>
            <ProgressBar
              progress={1 / 1.2}
              backIcon={true}
              closeIcon={true}
              onPressback={() => {
                props.navigation.goBack();
              }}
              onPressClose={() => {
                props.navigation.goBack();
              }}
            />
          </View>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <Text style={styles.textTitle}>{`Select 
a simple fund`}</Text>
            <View style={styles.viewFeatureCard}>
              <Text style={styles.textFeatureTitle}>{'Low risk'}</Text>
              <Text style={styles.textFeatureSubTitle}>
                {`Take a driver’s license, 
national identity card or passport photo`}
              </Text>
              <View
                style={[
                  styles.viewRow,
                  {marginVertical: Theme.responsiveSize.size22},
                ]}>
                <View style={styles.viewPercent}>
                  <Text style={styles.textPercent}>{'+ 1,2%'}</Text>
                </View>
                <Text style={styles.textCommon}>
                  {`estimated income in one year`}
                </Text>
              </View>
              <View style={styles.viewRow}>
                <Pressable
                  style={styles.viewPlus}
                  onPress={() => {
                    setModalVisible(true);
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
              <Text style={styles.textFeatureTitle}>{'Medium risk'}</Text>
              <Text style={styles.textFeatureSubTitle}>
                {`Take a driver’s license, 
national identity card or passport photo`}
              </Text>
              <View
                style={[
                  styles.viewRow,
                  {marginVertical: Theme.responsiveSize.size22},
                ]}>
                <View style={styles.viewPercent}>
                  <Text style={styles.textPercent}>{'+ 1,2%'}</Text>
                </View>
                <Text style={styles.textCommon}>
                  {`estimated income in one year`}
                </Text>
              </View>
              <View style={styles.viewRow}>
                <Pressable
                  style={styles.viewPlus}
                  onPress={() => {
                    setModalVisible(true);
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
              <Text style={styles.textFeatureTitle}>{`Low risk 
capital protected`}</Text>
              <Text style={styles.textFeatureSubTitle}>
                {`Take a driver’s license, 
national identity card or passport photo`}
              </Text>
              <View
                style={[
                  styles.viewRow,
                  {marginVertical: Theme.responsiveSize.size22},
                ]}>
                <View style={styles.viewPercent}>
                  <Text style={styles.textPercent}>{'+ 1,2%'}</Text>
                </View>
                <Text style={styles.textCommon}>
                  {`estimated income in one year`}
                </Text>
              </View>
              <View style={styles.viewRow}>
                <Pressable
                  style={styles.viewPlus}
                  onPress={() => {
                    setModalVisible(true);
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
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          statusBarTranslucent={true}>
          <ProgressBar
            viewMain={{
              position: 'absolute',
              zIndex: 1,
              alignSelf: 'center',
              top: Theme.responsiveSize.size62,
            }}
            progress={'100%'}
            onPressClose={() => {
              props.navigation.goBack();
            }}
          />
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalIconContainer}>
                <Image
                  style={styles.modalIcon}
                  source={Theme.icons.Heart_Icon}
                />
              </View>
              <View style={styles.viewMiddleModal}>
                <Text style={styles.modalTitle}>
                  {`We love your 
new goal`}
                </Text>
                <Text style={styles.modalSubTitle}>
                  {`Awesome! Your new goal is up 
and running`}
                </Text>
              </View>
              <Button
                viewStyle={{backgroundColor: Theme.colors.bgColor1}}
                viewMain={styles.viewButton}
                title={'Got it'}
                onPress={() => {
                  setModalVisible(false);
                  setModalVisible2(true);
                }}
              />
            </View>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible2}
          statusBarTranslucent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalIconContainer}>
                <Image
                  style={styles.modalIcon}
                  source={Theme.icons.Puzzle_Icon}
                />
              </View>
              <View style={styles.viewMiddleModal}>
                <Text style={styles.modalTitle}>
                  {`Goal achieved successfully!`}
                </Text>
                <Text style={styles.modalSubTitle}>
                  {`You can close or extend 
the goal at any time`}
                </Text>
              </View>
              <Button
                viewStyle={{backgroundColor: Theme.colors.bgColor1}}
                viewMain={styles.viewButton}
                title={'Got it'}
                onPress={() => {
                  props.navigation.navigate(Constants.TOPUP_SCREEN);
                }}
              />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
};

export default SelectSimpleFundScreen;
