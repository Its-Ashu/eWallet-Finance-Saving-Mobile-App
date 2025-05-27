import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TextInput,
  Pressable,
  Modal,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from '../../../components/Button';
import {ProgressBar} from '../../../components/ProgressBar';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';

const TopUpScreen = props => {
  const [price, setPrice] = useState('20.00');
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
                closeIcon={true}
                onPressClose={() => {
                  props.navigation.goBack();
                }}
              />
              <Text style={styles.textTitle}>
                {`Amount 
of investments`}
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.dollarSign}>$</Text>
              <TextInput
                style={styles.textInput}
                value={price}
                onChangeText={setPrice}
                placeholder={'20.00'}
                keyboardType="numeric"
                placeholderTextColor={Theme.colors.textColor18}
              />
            </View>
            <Text style={styles.textSubTitle}>
              {'Set amount of investments'}
            </Text>
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
                  source={Theme.icons.Diamond_3D_Icon}
                />
              </View>
              <View style={styles.viewMiddleModal}>
                <Text style={styles.modalTitle}>
                  {`+ $20`}
                  <Text style={{color: Theme.colors.textColor18}}>{'.00'}</Text>
                </Text>
                <Text style={styles.modalSubTitle}>
                  {`Your account will be
activated in 3 business days`}
                </Text>
              </View>
              <Button
                viewStyle={{backgroundColor: Theme.colors.bgColor1}}
                viewMain={styles.viewButton}
                title={'Got it'}
                onPress={() => {
                  props.navigation.navigate(Constants.SCREEN_STACK_NAVIGATION, {
                    screen: Constants.BOTTOM_TAB_NAVIGATION,
                    params: {
                      screen: Constants.HOME_SCREEN_STACK,
                      params: {
                        screen: Constants.HOME_SCREEN,
                        params: {
                          isVerified: true,
                        },
                      },
                    },
                  });
                }}
              />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
};

export default TopUpScreen;
