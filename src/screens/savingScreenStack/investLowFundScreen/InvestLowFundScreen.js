import React, {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TextInput,
  Modal,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from '../../../components/Button';
import {ProgressBar} from '../../../components/ProgressBar';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';

const InvestLowFundScreen = props => {
  const [price, setPrice] = useState('980.00');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.bgColor2}
        barStyle={'dark-content'}
      />
      <SafeAreaView style={styles.viewMainContainer}>
        <View style={styles.container}>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <View style={styles.viewTop}>
              <ProgressBar
                progress={0.5}
                backIcon={true}
                onPressback={() => {
                  props.navigation.goBack();
                }}
              />
              <Text style={styles.textTitle}>
                {`How much 
do you want to save?`}
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.dollarSign}>$</Text>
              <TextInput
                style={styles.textInput}
                value={price}
                onChangeText={setPrice}
                placeholder={'980.00'}
                keyboardType="numeric"
                placeholderTextColor={Theme.colors.textColor18}
              />
            </View>
            <Text style={styles.textSubTitle}>{'Set amount of the goal'}</Text>
            <View style={styles.viewInvitation}>
              <View style={styles.viewCircles}>
                <Image
                  style={styles.circleIcon}
                  source={Theme.icons.Home3D_Icon}
                />
              </View>
              <Text style={styles.textInviteTitle}>{'New home'}</Text>
              <Pressable>
                <Image style={styles.copyIcon} source={Theme.icons.Edit_Icon} />
              </Pressable>
            </View>
          </ScrollView>
          <Button
            title="Invest in low risk fund"
            viewMain={{
              marginHorizontal: 0,
              marginVertical: Theme.responsiveSize.size18,
            }}
            viewStyle={{backgroundColor: Theme.colors.bgColor4}}
            onPress={() => {
              setModalVisible(true);
            }}
          />
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
              top: Theme.responsiveSize.size42 + 4,
            }}
            viewProgress={{backgroundColor: Theme.colors.bgColor12}}
            progress={0.5}
            onPressClose={() => {
              props.navigation.goBack();
            }}
          />
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalIconContainer}>
                <Image style={styles.modalIcon} source={Theme.icons.SMS_Icon} />
              </View>
              <View style={styles.viewMiddleModal}>
                <Text style={styles.modalTitle}>
                  {'Enable SMS notifications'}
                </Text>
                <Text style={styles.modalSubTitle}>
                  {`Turn on SMS notifications to keep yourself up-to-date with your savings`}
                </Text>
              </View>
              <Button
                viewStyle={{backgroundColor: Theme.colors.bgColor1}}
                viewMain={styles.viewButton}
                title={'I agree'}
                onPress={() => {
                  props.navigation.navigate(
                    Constants.MONTHLY_INVESTMENT_SCREEN,
                  );
                  setModalVisible(false);
                }}
              />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
};

export default InvestLowFundScreen;
