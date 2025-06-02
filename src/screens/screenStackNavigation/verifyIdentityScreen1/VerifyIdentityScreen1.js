import React, {useState, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Pressable,
  Image,
  Modal,
  PanResponder,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button} from '../../../components/Button';
import {ProgressBar} from '../../../components/ProgressBar';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';

const {height} = Dimensions.get('window');
const SHEET_HEIGHT = height * 0.6;

const VerifyIdentityScreen1 = props => {
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const translateY = useRef(new Animated.Value(SHEET_HEIGHT)).current;
  const isFromPassportCheck = props.route.params?.isFromPassportCheck;
  const isFromSelfieCamera = props.route.params?.isFromSelfieCamera;

  const openSheet = () => {
    translateY.setValue(SHEET_HEIGHT);
    setVisible(true);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeSheet = callback => {
    Animated.timing(translateY, {
      toValue: height, // slide down off-screen
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
      if (typeof callback === 'function') {
        callback(); // only call if it's a function
      }
    });
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,

      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy > 0) {
          translateY.setValue(gestureState.dy);
        }
      },

      onPanResponderRelease: (evt, gestureState) => {
        const shouldClose = gestureState.dy > 100;

        if (shouldClose) {
          Animated.timing(translateY, {
            toValue: SHEET_HEIGHT,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            setVisible(false);
          });
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  const data = ["Driver's License", 'National Identity Card', 'Passport'];
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
              progress={0.5}
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
                    props.navigation.navigate(Constants.SELFIE_CAMERA_SCREEN);
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
        <Modal
          transparent
          visible={visible}
          animationType="none"
          statusBarTranslucent={true}>
          <TouchableWithoutFeedback onPress={closeSheet}>
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>

          <Animated.View
            style={[styles.sheetContainer, {transform: [{translateY}]}]}
            {...panResponder.panHandlers}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.viewDraggable}
              onPress={closeSheet}>
              <Image
                style={styles.draggableIcon}
                source={Theme.icons.Draggable_Icon}
              />
            </TouchableOpacity>
            <View style={styles.viewMain}>
              <Text style={styles.textBottomSheetSubTitle}>
                {'Which photo ID whould you like to use?'}
              </Text>
              {data?.map(label => (
                <TouchableOpacity
                  key={label}
                  style={styles.viewRowBottomSheet}
                  onPress={() => {
                    closeSheet(() => {
                      props.navigation.navigate(
                        Constants.PASSPORT_CAMERA_SCREEN,
                      );
                    });
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
                    source={Theme.icons.Next_Icon}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </Animated.View>
        </Modal>

        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <ProgressBar
            viewMain={{
              position: 'absolute',
              zIndex: 1,
              alignSelf: 'center',
              top: Theme.responsiveSize.size40,
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
