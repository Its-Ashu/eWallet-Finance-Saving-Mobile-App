import React, {useState, useRef} from 'react';
import {
  Dimensions,
  Pressable,
  Image,
  Modal,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Toast} from 'react-native-toast-message';
import {Camera} from 'react-native-vision-camera';
import ActionSheet from 'react-native-actions-sheet';
import {Button} from '../../../components/Button';
import {ProgressBar} from '../../../components/ProgressBar';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';

const {height} = Dimensions.get('window');

const VerifyIdentityScreen1 = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const isFromPassportCheck = props.route.params?.isFromPassportCheck;
  const isFromSelfieCamera = props.route.params?.isFromSelfieCamera;
  const actionSheetRef = useRef(null);
  const openSheet = () => {
    actionSheetRef.current?.show();
  };

  const closeSheet = () => {
    actionSheetRef.current?.hide();
  };

  const data = ["Driver's License", 'National Identity Card', 'Passport'];

  const handleOpenCamera = async label => {
    const cameraPermission = await Camera.requestCameraPermission();

    const isGranted =
      cameraPermission === 'authorized' || cameraPermission === 'granted';

    if (isGranted) {
      props.navigation.navigate(Constants.PASSPORT_CAMERA_SCREEN, {
        documentType: label,
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Camera permission not granted',
      });
    }
  };
  const handleOpenSelfieCamera = async () => {
    const cameraPermission = await Camera.requestCameraPermission();

    const isGranted =
      cameraPermission === 'authorized' || cameraPermission === 'granted';

    if (isGranted) {
      props.navigation.navigate(Constants.SELFIE_CAMERA_SCREEN);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Camera permission not granted',
      });
    }
  };
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
              progress={0.25}
              closeIcon={true}
              onPressClose={() => {
                props.navigation.goBack();
              }}
            />
            <Text style={styles.textTitle}>{'Verify identity'}</Text>
          </View>
          <View style={styles.viewFeatureCard}>
            <Text style={styles.textFeatureTitle}>{'Government ID'}</Text>
            <Text style={styles.textFeatureSubTitle}>
              {
                'Take a driver’s license, national identity card or passport photo'
              }
            </Text>
            {isFromPassportCheck ? (
              <View
                style={[
                  styles.viewPlus,
                  {
                    alignSelf: 'center',
                    backgroundColor: Theme.colors.bgColor15,
                    marginTop: Theme.responsiveSize.size18,
                  },
                ]}>
                <Image style={styles.plusIcon} source={Theme.icons.True_Icon} />
              </View>
            ) : (
              <View style={styles.viewRow}>
                <Pressable style={styles.viewPlus} onPress={openSheet}>
                  <Image
                    style={styles.plusIcon}
                    tintColor={Theme.colors.bgColor4}
                    source={Theme.icons.Plus_White_Icon}
                  />
                </Pressable>
                <Text style={styles.textFeatureCommonTitle}>{'Select'}</Text>
              </View>
            )}
          </View>
          <View style={styles.viewFeatureCard}>
            <Text style={styles.textFeatureTitle}>{'Selfie photo'}</Text>
            <Text style={styles.textFeatureSubTitle}>
              {'It’s required by law to verify your identity as a new user'}
            </Text>
            {isFromSelfieCamera ? (
              <View
                style={[
                  styles.viewPlus,
                  {
                    alignSelf: 'center',
                    backgroundColor: Theme.colors.bgColor15,
                    marginTop: Theme.responsiveSize.size18,
                  },
                ]}>
                <Image style={styles.plusIcon} source={Theme.icons.True_Icon} />
              </View>
            ) : (
              <View style={styles.viewRow}>
                <Pressable
                  style={styles.viewPlus}
                  onPress={() => {
                    handleOpenSelfieCamera();
                  }}>
                  <Image
                    style={styles.plusIcon}
                    tintColor={Theme.colors.bgColor4}
                    source={Theme.icons.Plus_White_Icon}
                  />
                </Pressable>
                <Text style={styles.textFeatureCommonTitle}>{'Select'}</Text>
              </View>
            )}
          </View>
          <View style={{flex: 1}} />
          <Button
            disabled={isFromPassportCheck && isFromSelfieCamera ? false : true}
            viewMain={{marginHorizontal: 0}}
            viewStyle={{
              marginBottom: Theme.responsiveSize.size12,
              backgroundColor: isFromPassportCheck
                ? Theme.colors.bgColor4
                : Theme.colors.bgColor13,
            }}
            onPress={() => {
              setModalVisible(true);
            }}
            title={'Verify my identity'}
          />
        </View>

        <ActionSheet
          ref={actionSheetRef}
          gestureEnabled={true}
          showHandle={false}
          containerStyle={{
            borderTopLeftRadius: Theme.responsiveSize.size36,
            borderTopRightRadius: Theme.responsiveSize.size36,
            paddingHorizontal: Theme.responsiveSize.size20,
            backgroundColor: 'white',
          }}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.viewDraggable}
            onPress={closeSheet}>
            <Image
              style={styles.draggableIcon}
              source={Theme.icons.Draggable_Icon}
            />
          </TouchableOpacity>
          <Text
            style={[
              styles.textBottomSheetSubTitle,
              {marginTop: Theme.responsiveSize.size20},
            ]}>
            {'Which photo ID would you like to use?'}
          </Text>

          {data.map(label => (
            <TouchableOpacity
              key={label}
              style={[
                styles.viewRowBottomSheet,
                {borderBottomWidth: label === 'Passport' ? 0 : 1},
              ]}
              onPress={() => {
                actionSheetRef.current?.hide(); // 👈 close sheet
                handleOpenCamera(label); // 👈 call action
              }}>
              <Text
                style={[
                  styles.textFeatureTitle,
                  {
                    textAlign: 'left',
                    flex: 1,
                    fontSize: Theme.responsiveSize.size20,
                  },
                ]}>
                {label}
              </Text>
              <Image
                style={styles.nextIcon}
                tintColor={Theme.colors.textColor12}
                source={Theme.icons.Next_Grey_Icon}
              />
            </TouchableOpacity>
          ))}
        </ActionSheet>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          statusBarTranslucent={true}>
          <ProgressBar
            viewMain={{
              position: 'absolute',
              zIndex: 1,
              alignSelf: 'center',
              top: Theme.responsiveSize.size52 + 1,
            }}
            progress={1}
            onPressClose={() => {
              props.navigation.goBack();
            }}
          />
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalIconContainer}>
                <Image
                  style={styles.modalIcon}
                  source={Theme.icons.Fire_Icon}
                />
              </View>
              <View style={styles.viewMiddleModal}>
                <Text style={styles.modalTitle}>{'Congrats!'}</Text>
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
                  props.navigation.navigate(Constants.BOTTOM_TAB_NAVIGATION, {
                    screen: Constants.HOME_SCREEN_STACK,
                    params: {
                      screen: Constants.HOME_SCREEN,
                      params: {
                        isVerified: true,
                      },
                    },
                  });

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

export default VerifyIdentityScreen1;
