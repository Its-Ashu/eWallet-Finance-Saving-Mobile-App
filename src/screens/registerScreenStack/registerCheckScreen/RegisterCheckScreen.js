import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Button} from '../../../components/Button';
import ConfirmationItem from '../../../components/ConfirmationItem';
import {ProgressBar} from '../../../components/ProgressBar';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';

const RegisterCheckScreen = props => {
  //All States
  //Main States
  const [modalVisible, setModalVisible] = useState(false);
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
              progress={0.6}
              backIcon={true}
              onPressback={() => {}}
            />
            <Text style={styles.textTitle}>{'Almost there!'}</Text>
            <Text style={styles.textSubTitle}>
              {
                'Please take a moment to ensure all of the information you provide is correct'
              }
            </Text>
          </View>
          <View style={{flex: 1}}>
            <ConfirmationItem
              title={'Full name'}
              subTitle={'Robert Wilson'}
              onPress={() => {}}
            />
            <ConfirmationItem
              title={'Date of birth'}
              subTitle={'05/03/1992'}
              onPress={() => {}}
            />
            <ConfirmationItem
              title={'Residential address'}
              subTitle={'428 Greenwich Ave 88, Brooklyn, NY 11239'}
              onPress={() => {}}
            />
          </View>
          <Button
            viewMain={styles.viewButton}
            title={'Continue'}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          />
        </View>
      </SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalIconContainer}>
              <Image style={styles.modalIcon} source={Theme.icons.Star_Icon} />
            </View>
            <View style={styles.viewMiddleModal}>
              <Text style={styles.modalTitle}>{'You are member now!'}</Text>
              <Text style={styles.modalSubTitle}>
                {
                  'All investments will be subject to approval by the fund manager'
                }
              </Text>
            </View>
            <Button
              viewMain={styles.viewButton}
              title={'I accept'}
              onPress={() => {
                props.navigation.navigate(Constants.REGISTER_PIN_SCREEN);
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default RegisterCheckScreen;
