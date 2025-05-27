import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import {Button, NextButton} from '../../../components/Button';
import {InputText} from '../../../components/InputText';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';

const AddCardScreen = props => {
  //All States
  //Main States
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvv, setCvv] = useState('');
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
          <View style={styles.viewHeader}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image style={styles.backIcon} source={Theme.icons.Back_Icon} />
            </TouchableOpacity>
            <Text style={styles.textTitle}>{'Add a new card'}</Text>
          </View>
          <InputText
            value={cardHolder}
            title={'Card holder'}
            onChangeText={setCardHolder}
          />
          <InputText
            isCard={true}
            value={cardNumber}
            title={'Card number'}
            onChangeText={setCardNumber}
          />
          <View style={styles.viewRow}>
            <InputText
              viewMain={{flex: 1, marginRight: Theme.responsiveSize.size04}}
              value={expireDate}
              title={'Expire date'}
              onChangeText={setExpireDate}
            />
            <InputText
              viewMain={{flex: 1, marginLeft: Theme.responsiveSize.size04}}
              value={cvv}
              title={'CVV'}
              onChangeText={setCvv}
            />
          </View>
          <NextButton
            viewMainStyle={styles.marginT24}
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
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalIconContainer}>
                <Image
                  style={styles.modalIcon}
                  source={Theme.icons.Star_3D_Icon}
                />
              </View>
              <View style={styles.viewMiddleModal}>
                <Text style={styles.modalTitle}>
                  {`Card added
successfully!`}
                </Text>
                <Text style={styles.modalSubTitle}>
                  {`Congratulations! 
We've added your card.`}
                </Text>
              </View>
              <Button
                viewStyle={{backgroundColor: Theme.colors.bgColor1}}
                viewMain={styles.viewButton}
                title={'Thanks'}
                onPress={() => {
                  props?.navigation?.navigate(Constants.BOTTOM_TAB_NAVIGATION, {
                    screen: Constants.PROFILE_SCREEN,
                    params: {
                      isCardAdded: true,
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

export default AddCardScreen;
